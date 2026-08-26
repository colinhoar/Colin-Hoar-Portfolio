import { useState } from "react";
import { interests, type Interest } from "../../data/interests";
import InterestCard from "../InterestCard/InterestCard";
import InterestModal from "../InterestModal/InterestModal";
import styles from "./InterestGrid.module.css";

/**
 * InterestGrid
 * ------------------------------------------------------------
 * Renders every interest from `src/data/interests.ts` in a
 * compact grid on a muted background — visually distinct from
 * the Projects section above it. Also owns the state for which
 * interest's detail modal is open, mirroring how ProjectGrid
 * owns `selectedProject` for the Projects section.
 *
 * InterestCard and InterestModal stay reusable and dumb: the
 * card just reports which interest was clicked, and the modal
 * just renders whichever interest it's given.
 *
 * TO ADD AN INTEREST: open `src/data/interests.ts` and add a
 * new object to the `interests` array — this component
 * automatically renders it, no changes needed here. Give it a
 * `details` array to make its card open a modal.
 */
export default function InterestGrid() {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(
    null
  );

  return (
    <section className={styles.section} aria-labelledby="interests-heading">
      <div className="container">
        <h2 id="interests-heading" className={styles.heading}>
          Interests
        </h2>
        <div className={styles.grid}>
          {interests.map((interest) => (
            <InterestCard
              key={interest.title}
              interest={interest}
              onSelect={setSelectedInterest}
            />
          ))}
        </div>
      </div>

      <InterestModal
        interest={selectedInterest}
        onClose={() => setSelectedInterest(null)}
      />
    </section>
  );
}
