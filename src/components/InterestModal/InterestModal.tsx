import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { Interest } from "../../data/interests";
import { ArrowUpRightIcon, CloseIcon } from "../icons";
import styles from "./InterestModal.module.css";

interface InterestModalProps {
  /** The interest to display, or null when no modal should be shown. */
  interest: Interest | null;
  onClose: () => void;
}

/**
 * Turns a YouTube or Vimeo URL into its embeddable form. Returns
 * null for anything else (e.g. a direct .mp4 link), which tells
 * the caller to fall back to a plain <video> tag instead.
 */
function getVideoEmbedUrl(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1);
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com") {
    if (parsed.pathname.startsWith("/embed/")) return url;
    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (host === "vimeo.com") {
    const id = parsed.pathname.split("/").filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}` : null;
  }

  return null;
}

/**
 * InterestModal
 * ------------------------------------------------------------
 * A single reusable modal that renders whichever interest is
 * passed to it. Unlike ProjectModal (which has a fixed section
 * order), this modal reads `interest.details` as an ORDERED
 * LIST of content blocks and renders them top to bottom in
 * exactly the order they're listed in `src/data/interests.ts` —
 * so a text block, image block, and video block can appear in
 * any sequence you choose, per interest. To change what's in an
 * interest's modal, edit that data file — never this component.
 *
 * Rendering is controlled entirely by the parent (InterestGrid):
 * when `interest` is null this component renders nothing, so
 * mounting/unmounting naturally drives the open/close animation
 * and focus management below. Mirrors ProjectModal's behavior
 * (scroll lock, focus trap, Escape to close, backdrop click).
 */
export default function InterestModal({
  interest,
  onClose,
}: InterestModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!interest) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [interest]);

  useEffect(() => {
    if (!interest) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [interest, onClose]);

  if (!interest) return null;

  const handleTabTrap = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleTabTrap}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {interest.title}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close interest details"
          >
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.body}>
          {interest.details?.map((block, index) => {
            switch (block.type) {
              case "text":
                return (
                  <div key={index} className={styles.section}>
                    {block.heading && (
                      <h3 className={styles.sectionHeading}>
                        {block.heading}
                      </h3>
                    )}
                    {block.text
                      .split(/\n\s*\n/)
                      .map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className={styles.paragraph}>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                );

              case "image":
                return (
                  <figure key={index} className={styles.section}>
                    <div className={styles.imageWrapper}>
                      <img
                        className={styles.image}
                        src={block.src}
                        alt={block.alt ?? ""}
                        loading="lazy"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className={styles.caption}>
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "video": {
                const embedUrl = getVideoEmbedUrl(block.url);
                return (
                  <figure key={index} className={styles.section}>
                    <div className={styles.videoWrapper}>
                      {embedUrl ? (
                        <iframe
                          className={styles.video}
                          src={embedUrl}
                          title={block.caption ?? `${interest.title} video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          className={styles.video}
                          src={block.url}
                          controls
                        />
                      )}
                    </div>
                    {block.caption && (
                      <figcaption className={styles.caption}>
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              case "link":
                return (
                  <div key={index} className={styles.section}>
                    <div className={styles.buttonRow}>
                      <a
                        className={styles.linkButton}
                        href={block.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {block.label}
                        <ArrowUpRightIcon className={styles.linkButtonIcon} />
                      </a>
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}
