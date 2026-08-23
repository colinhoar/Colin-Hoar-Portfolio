import { profile } from "../../data/profile";
import { MailIcon, GithubIcon, LinkedinIcon } from "../icons";
import styles from "./Header.module.css";

/**
 * Header
 * ------------------------------------------------------------
 * Top intro card: name, subtitle, contact links, and school/major.
 * All content comes from `src/data/profile.ts` — edit that file
 * to change what's shown here, not this component.
 */
export default function Header() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.card}`}>
        <div className={styles.avatar}>
          {profile.profilePhoto ? (
            <img
              className={styles.avatarImage}
              src={profile.profilePhoto}
              alt={`Portrait of ${profile.name}`}
            />
          ) : (
            <span className={styles.avatarInitials} aria-hidden="true">
              {initials}
            </span>
          )}
        </div>

        <div className={styles.identity}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.subtitle}>{profile.subtitle}</p>

          <nav className={styles.contactRow} aria-label="Contact links">
            <a className={styles.contactLink} href={`mailto:${profile.email}`}>
              <MailIcon className={styles.contactIcon} />
              {profile.email}
            </a>
            <a
              className={styles.contactLink}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className={styles.contactIcon} />
              GitHub
            </a>
            <a
              className={styles.contactLink}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className={styles.contactIcon} />
              LinkedIn
            </a>
          </nav>

          <p className={styles.educationRow}>
            <span className={styles.educationSchool}>{profile.school}</span>
            <span className={styles.educationDivider} aria-hidden="true">
              &middot;
            </span>
            <span>{profile.major}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
