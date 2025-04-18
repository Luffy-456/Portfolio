import React from 'react';
import styles from './ProjectsStyles.module.css';
// create and add ttwoImg
import ttwoImg from '../../assets/viberr.png';
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      
     <h1 className ="sectionTitle">
          Projects
     </h1>

     <div className = {styles.projectsContainer}>
          <ProjectsCard 
            src={ttwoImg}
            link="https://github.com/Luffy-456/TTWO-Stock-Analysis-and-Prediction"
            h3="TTWO Stock Analysis and Prediction"
            p="Machine Learning Project for Stock Analysis & Prediction"
          />
     </div>
    </section>
  );
}

export default Projects