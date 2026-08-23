import { profile } from "../../data/profile";
import styles from "./About.module.css";

/**
 * About
 * ------------------------------------------------------------
 * Short bio section. Edit `bio` in `src/data/profile.ts` to
 * change the paragraph text — no need to touch this file.
 */
export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className={styles.heading}>
          About Me
        </h2>
        <p className={styles.bio}>{profile.bio}</p>
      </div>
    </section>
  );
}
