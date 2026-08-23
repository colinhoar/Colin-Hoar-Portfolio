import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { Project } from "../../data/projects";
import { ArrowUpRightIcon, CloseIcon, DocumentIcon } from "../icons";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  /** The project to display, or null when no modal should be shown. */
  project: Project | null;
  onClose: () => void;
}

/**
 * ProjectModal
 * ------------------------------------------------------------
 * A single reusable modal that renders whichever project is
 * passed to it. It reads ONLY from `project.details` — every
 * section below (overview, paragraphs, features, gallery, links,
 * pdfs) is conditionally rendered and simply omitted when that
 * field isn't provided in `src/data/projects.ts`. To add content
 * to a project's modal, edit that data file — never this component.
 *
 * Rendering is controlled entirely by the parent (ProjectGrid):
 * when `project` is null this component renders nothing, so
 * mounting/unmounting naturally drives the open/close animation
 * and focus management below.
 */
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  // Lock background scroll, move focus into the modal, and restore
  // focus to whatever triggered it when the modal unmounts.
  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [project]);

  // Close on Escape.
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const { details } = project;

  // Simple focus trap: keep Tab / Shift+Tab cycling within the modal
  // instead of escaping out to the page behind it.
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
    // Clicking the backdrop closes the modal; clicking inside the
    // modal content must not (stopPropagation on the inner element).
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
          <div className={styles.headerText}>
            <h2 id={titleId} className={styles.title}>
              {project.title}
            </h2>
            {project.technologies.length > 0 && (
              <ul className={styles.tagList}>
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.tag}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close project details"
          >
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.heroImageWrapper}>
            <img
              className={styles.heroImage}
              src={project.image}
              alt={`Screenshot of the ${project.title} project`}
            />
          </div>

          {/* Overview / short summary */}
          {details?.overview && (
            <p className={styles.overview}>{details.overview}</p>
          )}

          {/* Longer free-form paragraphs */}
          {details?.paragraphs && details.paragraphs.length > 0 && (
            <div className={styles.section}>
              {details.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Feature list */}
          {details?.features && details.features.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>Features</h3>
              <ul className={styles.featureList}>
                {details.features.map((feature) => (
                  <li key={feature} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional screenshots */}
          {details?.images && details.images.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>Screenshots</h3>
              <div className={styles.gallery}>
                {details.images.map((image, index) => (
                  <div key={image} className={styles.galleryImageWrapper}>
                    <img
                      className={styles.galleryImage}
                      src={image}
                      alt={`Additional screenshot ${index + 1} of the ${project.title} project`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links: GitHub, live demo, docs, etc. — any number */}
          {details?.links && details.links.length > 0 && (
            <div className={styles.section}>
              <div className={styles.buttonRow}>
                {details.links.map((link) => (
                  <a
                    key={link.label}
                    className={styles.linkButton}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowUpRightIcon className={styles.linkButtonIcon} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* PDFs: opened in a new tab, no in-app viewer required */}
          {details?.pdfs && details.pdfs.length > 0 && (
            <div className={styles.section}>
              <div className={styles.buttonRow}>
                {details.pdfs.map((pdf) => (
                  <a
                    key={pdf.label}
                    className={styles.linkButton}
                    href={pdf.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DocumentIcon className={styles.linkButtonIcon} />
                    {pdf.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
