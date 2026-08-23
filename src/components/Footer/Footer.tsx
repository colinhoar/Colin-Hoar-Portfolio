import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../icons";
import styles from "./Footer.module.css";

/**
 * Footer
 * ------------------------------------------------------------
 * Simple footer with a copyright line and social links. The
 * year updates automatically; name and links come from
 * `src/data/profile.ts`.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <nav className={styles.links} aria-label="Social links">
          <a
            className={styles.link}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className={styles.linkIcon} />
            GitHub
          </a>
          <a
            className={styles.link}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className={styles.linkIcon} />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
