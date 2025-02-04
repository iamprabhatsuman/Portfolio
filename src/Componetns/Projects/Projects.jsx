import React from "react";
import styles from "./ProjectStyles.module.css";
import Viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="section-title">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          img={Viberr}
          link="#"
          name="Viberr"
          description="Streaming App"
        />
        <ProjectCard
          img={freshBurger}
          link="https://iamprabhatsuman.github.io/Tasty-Burger/"
          name="Tasty Burger"
          description="Resturant Shop"
        />
        <ProjectCard
          img={hipsster}
          link="#"
          name="Hipsster"
          description="Glasses Shop"
        />
        <ProjectCard
          img={fitLift}
          link="#"
          name="FitLift"
          description="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
