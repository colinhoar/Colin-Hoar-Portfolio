import type { Interest } from "../../data/interests";
import styles from "./InterestCard.module.css";

interface InterestCardProps {
  interest: Interest;
}

/**
 * InterestCard
 * ------------------------------------------------------------
 * Compact, horizontal, icon-led card — intentionally smaller
 * and simpler than ProjectCard so the Interests section reads
 * as secondary to Projects while still matching the overall
 * design language (same radius scale, shadows, and palette).
 */
export default function InterestCard({ interest }: InterestCardProps) {
  return (
    <article className={styles.card}>
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
      </div>
    </article>
  );
}
