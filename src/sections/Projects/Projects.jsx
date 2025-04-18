import React from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectsCard from '../../common/ProjectsCard';
// create and add ttwoImg
import ttwoImg from '../../assets/viberr.png';
// create and add ytImg
import ytImg from '../../assets/fitlift.png';

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
          <ProjectsCard 
            src={ytImg}
            link="https://github.com/Luffy-456/youtube-clone"
            h3="YouTube Clone"
            p="A static, replica of YouTube's UI built with HTML and CSS. (In Development)"
          />
     </div>
    </section>
  );
}

export default Projects