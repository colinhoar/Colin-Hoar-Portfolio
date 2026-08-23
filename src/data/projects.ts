/**
 * PROJECT DATA
 * ------------------------------------------------------------
 * This array powers both the Projects grid AND the project
 * detail modal that opens when a card is clicked. To add a
 * project, copy one of the objects below and fill in your own
 * details — no component code needs to change.
 *
 * To remove a project, delete its object from the array.
 * Order in the array is the order projects appear on the page.
 *
 * IMAGES: place project screenshots in `src/assets/projects/`
 * and import them at the top of this file, the same way the
 * placeholder images are imported below.
 *
 * See the "Adding a project" guide in the README for a full
 * walkthrough of every field below, including the optional
 * `details` object that powers the modal.
 */

import software_engineering from "../assets/projects/Software_Engineering_Cover_Image.png";
import creative_coding from "../assets/projects/Creative_Coding_Cover_Image.png";
import financial_literacy from "../assets/projects/Financial_Literacy_Cover_Image.png";
import pizza_jam from "../assets/projects/Pizza_Jam_Cover_Image.png";
import pizza_jam_1 from "../assets/projects/pizza_jam_1.jpg";
import pizza_jam_2 from "../assets/projects/pizza_jam_2.jpg";

/** A single labeled link shown as a button in the project modal. */
export interface ProjectLink {
  label: string; // e.g. "GitHub", "Live Demo", "Documentation"
  url: string;
}

/** A single labeled PDF shown as a button in the project modal. */
export interface ProjectPdf {
  label: string; // e.g. "Project Report"
  url: string; // path to a file in `public/`, or an external URL
}

/**
 * Everything in `details` is OPTIONAL. Only the fields you
 * provide will render in the modal — omit a field entirely and
 * its section simply won't appear. This lets simple projects
 * stay simple and detailed projects show everything.
 */
export interface ProjectDetails {
  /** A short summary shown near the top of the modal, above any paragraphs. */
  overview?: string;
  /** One or more longer paragraphs, each rendered as its own <p>. */
  paragraphs?: string[];
  /** Rendered as a bullet list. */
  features?: string[];
  /** Additional screenshots shown in a responsive gallery below the text. */
  images?: string[];
  /** Buttons for GitHub, live demo, docs, videos, papers, etc. — any number. */
  links?: ProjectLink[];
  /** Buttons that open a PDF (report, poster, paper) in a new tab. */
  pdfs?: ProjectPdf[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  /** Powers the "View Details" modal. Omit entirely for a project with no extra detail. */
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    title: "Interactive Hospital Map Directions Application",
    description:
      "A hospital navigation web application designed to help patients find their way across multiple campuses, featuring interactive maps, pathfinding, service requests, and hands-free controls.",
    image: software_engineering,
    technologies: ["React", "TypeScript", "HTML/CSS"],
    details: {
      overview:
        "This PERN stack web application was developed for Brigham & Women’s Hospital to help patients navigate and find services across the hospital’s various campuses.",
      paragraphs: [
        "The project was completed in 8 weeks by a team of 11 students following an Agile development process.",
        "I served as the lead front-end engineer, where I developed core UI features, translated requirements into user stories, and mentored and supported other front-end developers. The application included hospital pathfinding, an interactive map editor, service request modules, and voice- and hand-motion-based interaction capabilities. The final application was deployed using AWS and Docker.",
        "Due to university restrictions, the original application is no longer publicly accessible and its repository remains private. The GitHub repository below contains files copied from the original repository for portfolio purposes.",
        "A live demo of the web application and the final report (user manual) can also be found below.",
      ],
      features: [
        "Multi-campus hospital pathfinding and navigation",
        "Interactive map editor for managing hospital locations and navigation data",
        "Service request system for submitting and managing employee requests",
        "Voice-activated application controls",
        "Hand-motion-based navigation and interaction",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/colinhoar/Software-Engineering-Final" },
        { label: "Live Demo", url: "https://www.youtube.com/watch?v=gaH0hFpIRwY" },
      ],
      pdfs: [
        {
          label: "Project Report",
          url: "/assets/projects/Software_Engineering_Final_Report.pdf",
        },
      ],
    },
  },
  {
    title: "Financial Literacy Application",
    description:
      "A web application built to measure how data visualizations and an AI Coach could affect the learning and engagement regarding financial literacy of users in the United States aged 18-25.",
    image: financial_literacy,
    technologies: ["React", "D3.js", "Firebase", "ReVisit"],
    details: {
      overview:
        "This project was developed as a Major Qualifying Project (MQP) for Worcester Polytechnic Institute (WPI) to design a web application to assess financial literacy engagement and learning through data visualizations and AI.",
      paragraphs: [
        "The project was completed over the course of 10 months by a team of 4 students, meeting with a project advisor weekly.",
        "I contributed to the development of the overall application, including the application design, the module flow and content, and the AI Coach sidebar. The application included three interactive lessons on budgeting, saving, and investing, each featuring D3-built data visualizations, comprehension checks, and a gamified progress system. To evaluate the impact of AI on learning, we conducted an A/B study comparing the experience with and without the AI coach, collecting and analyzing screen-recorded user sessions from participants recruited through Prolific.",
        "Due to university restrictions, the original github repository remains private. The GitHub repository can unfortunately not be copied over.",
        "The web application, project website, and the full report can be found below."
      ],
      features: [
        "Interactive lessons on budgeting, saving, and investing with D3.js data visualizations",
        "Gamified progress tracking, achievements, and sound effects",
        "AI coach sidebar with page-state awareness and hint-first guidance",
        "A/B test framework with screen/audio recording to compare AI-assisted and self-guided learning",
      ],
      links: [
        {
          label: "Web Application", url: "https://makencents.firebaseapp.com/",
        },
        {
          label: "Project Site", url: "https://digital.wpi.edu/concern/student_works/p5547x38t?locale=en",
        }
      ],
      pdfs: [
        {
          label: "Project Report", url: "/assets/projects/AssessingFinancialLiteracyMQP.pdf",
        },
      ],
    },
  },
  {
    title: "Pizza Jam Video Game Prototype",
    description:
      "A simple 3D first-person video game prototype built using the Godot game engine and Blender.",
    image: pizza_jam,
    technologies: ["Godot", "Blender"],
    details: {
      overview:
        "This game was developed as a part of a game jam (called Pizza Jam), where the contestants followed a theme of their choosing from a list of potential themes.",
      paragraphs: [
        "The game was completed over a 9-day period by a team of 2 people, aiming to create an unnerving first-person PS1-style walking/story game.",
        "I assumed the role of the main programmer and 3D modeler, creating a majority of the interactions and environment seen throughout the experience. The goal of this game jam for me was to gain experience with the Godot game engine and strengthen my programming and 3D modeling skills under strict time constraints. During this project I was also able to strengthen my adaptability, problem-solving, and time-management skills.",
        "The GitHub repository, game download page, game submission page, and game jam overview can be found below."
      ],
      images: [
          pizza_jam_1,
          pizza_jam_2
      ],
      links: [
        { label: "GitHub", url: "https://github.com/colinhoar/GameJam" },
        { label: "Game Download", url: "https://aidangp.itch.io/farmtest"},
        { label: "Submission Page", url: "https://itch.io/jam/pizza-jam-pizza-prize-12/rate/2828094" },
        { label: "Game Jam Overview", url: "https://itch.io/jam/pizza-jam-pizza-prize-12" }
      ],
    },
  },
  {
    title: "Creative Coding Course Design",
    description:
        "A creative coding course designed to help STEM students explore artistic expression through programming, combining hands-on projects with active learning and creative problem-solving.",
    image: creative_coding,
    technologies: ["Python", "Google Colab"],
    details: {
      overview:
          "This project was developed as an Interactive Qualifying Project (IQP) sponsored by Zurich University of Applied Sciences (ZHAW), Institute of Computational Life Sciences, to design a Creative Coding course for STEM students who have little exposure to combining programming with artistic expression.",
      paragraphs: [
        "The project was completed over an 8-week term by a team of 3 students, drawing on semi-structured interviews with 9 creative coding instructors and researchers across ZHAW, Zurich University of the Arts, and Pratt Institute.",
        "I contributed to the research methodology, conducted interviews with instructors and sponsors, and helped build the Python/Google Colab course materials, including scaffolded assignments teaching Conway's Game of Life and Multiple Neighborhood Cellular Automata. The final deliverable was an 8-week syllabus using a flipped-classroom model, progressing from Turtle graphics through Pygame and cellular automata to machine learning with ml4a.",
        "The project website and the full report can be found below."
      ],
      features: [
        "Syllabus covering Turtle graphics, Pygame, cellular automata, and machine learning",
        "Scaffolded Google Colab notebook/starter code",
        "Course outcome exemplars",
        "Active learning and flipped-classroom pedagogy"
      ],
      links: [
        { label: "Project Site", url: "https://digital.wpi.edu/concern/student_works/ns064b455?locale=en" },
      ],
      pdfs: [
        {
          label: "Project Report",
          url: "/assets/projects/IQP-ZurichA24-CreativeCoding.docx.pdf",
        },
      ],
    },
  },
];
