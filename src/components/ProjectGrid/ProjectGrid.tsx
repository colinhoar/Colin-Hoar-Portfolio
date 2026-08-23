import { useState } from "react";
import { projects, type Project } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";
import styles from "./ProjectGrid.module.css";

/**
 * ProjectGrid
 * ------------------------------------------------------------
 * Renders every project from `src/data/projects.ts` as a card
 * in a responsive grid (3 columns desktop, 2 tablet, 1 phone),
 * and owns the state for which project's detail modal is open.
 *
 * ProjectCard and ProjectModal stay reusable and dumb: the card
 * just reports which project was clicked, and the modal just
 * renders whichever project it's given.
 *
 * TO ADD A PROJECT: open `src/data/projects.ts` and add a new
 * object to the `projects` array — this component automatically
 * renders it, no changes needed here.
 */
export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className={styles.heading}>
          Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
