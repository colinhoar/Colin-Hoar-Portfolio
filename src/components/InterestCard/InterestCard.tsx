import type { KeyboardEvent } from "react";
import type { Interest } from "../../data/interests";
import { ArrowUpRightIcon } from "../icons";
import styles from "./InterestCard.module.css";

interface InterestCardProps {
  interest: Interest;
  /**
   * Called with this interest when the card is activated (click or
   * Enter/Space). Only relevant when `interest.details` is set —
   * see the conditional rendering below.
   */
  onSelect: (interest: Interest) => void;
}

/**
 * InterestCard
 * ------------------------------------------------------------
 * Compact, horizontal, icon-led card — intentionally smaller
 * and simpler than ProjectCard so the Interests section reads
 * as secondary to Projects while still matching the overall
 * design language (same radius scale, shadows, and palette).
 *
 * If this interest has a `details` array (see
 * `src/data/interests.ts`), the whole card becomes clickable and
 * opens InterestModal with that interest's content, mirroring how
 * ProjectCard opens ProjectModal. Interests with no `details`
 * render exactly as before — a static, non-clickable card.
 */
export default function InterestCard({
  interest,
  onSelect,
}: InterestCardProps) {
  const hasDetails = !!interest.details && interest.details.length > 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!hasDetails) return;
    // Activate on Enter or Space, matching native button behavior,
    // since this card uses role="button" rather than a real <button>
    // (a real button can't contain the heading/paragraph markup cleanly).
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(interest);
    }
  };

  return (
    <div
      className={`${styles.card} ${hasDetails ? styles.clickableCard : ""}`}
      role={hasDetails ? "button" : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      aria-haspopup={hasDetails ? "dialog" : undefined}
      aria-label={hasDetails ? `View details for ${interest.title}` : undefined}
      onClick={hasDetails ? () => onSelect(interest) : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.iconWrapper}>
        <img
          className={styles.icon}
          src={interest.image}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{interest.title}</h3>
        <p className={styles.description}>{interest.description}</p>

        {hasDetails && (
          <span className={styles.viewButton}>
            More details
            <ArrowUpRightIcon className={styles.viewButtonIcon} />
          </span>
        )}
      </div>
    </div>
  );
}
