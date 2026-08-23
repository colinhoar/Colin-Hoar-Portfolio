import type { KeyboardEvent } from "react";
import type { Project } from "../../data/projects";
import { ArrowUpRightIcon } from "../icons";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  /** Called with this project when the card is activated (click or Enter/Space). */
  onSelect: (project: Project) => void;
}

/**
 * ProjectCard
 * ------------------------------------------------------------
 * Renders a single project preview. The whole card acts as a
 * button that opens the ProjectModal with this project's data —
 * it does NOT navigate anywhere itself. This keeps the card
 * reusable and free of any modal content or external-link logic;
 * the parent component (ProjectGrid) owns what happens on click.
 */
export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Activate on Enter or Space, matching native button behavior,
    // since this card uses role="button" rather than a real <button>
    // (a real button can't contain the heading/list markup cleanly).
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div
      className={`${styles.card} ${styles.clickableCard}`}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`View details for ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {project.technologies.length > 0 && (
          <ul className={styles.tagList}>
            {project.technologies.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
        )}

        <span className={styles.viewButton}>
          View Details
          <ArrowUpRightIcon className={styles.viewButtonIcon} />
        </span>
      </div>
    </div>
  );
}
