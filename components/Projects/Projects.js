import styles from './Projects.module.css';
import { Heading } from '@chakra-ui/core';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className={styles.container}>
      <Heading>My Projects</Heading>
      <ProjectCard
        description="Lorem ipsum dolor sit atmet que es a."
        title="Lorem ipsum dolor"
        url="loremipsum"
      />
    </div>
  );
};

export default Projects;
