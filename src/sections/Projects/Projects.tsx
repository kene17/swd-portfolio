import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import { projects } from '../../common/config';

const Projects = () => {
  return (
    <section
      id='projects'
      className={styles.container}
    >
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
