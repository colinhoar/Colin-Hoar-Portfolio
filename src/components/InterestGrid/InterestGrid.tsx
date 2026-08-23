import { interests } from "../../data/interests";
import InterestCard from "../InterestCard/InterestCard";
import styles from "./InterestGrid.module.css";

/**
 * InterestGrid
 * ------------------------------------------------------------
 * Renders every interest from `src/data/interests.ts` in a
 * compact grid on a muted background — visually distinct from
 * the Projects section above it.
 *
 * TO ADD AN INTEREST: open `src/data/interests.ts` and add a
 * new object to the `interests` array — this component
 * automatically renders it, no changes needed here.
 */
export default function InterestGrid() {
  return (
    <section className={styles.section} aria-labelledby="interests-heading">
      <div className="container">
        <h2 id="interests-heading" className={styles.heading}>
          Interests
        </h2>
        <div className={styles.grid}>
          {interests.map((interest) => (
            <InterestCard key={interest.title} interest={interest} />
          ))}
        </div>
      </div>
    </section>
  );
}
