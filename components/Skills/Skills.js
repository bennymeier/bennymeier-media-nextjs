import { Heading, Text } from '@chakra-ui/core';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.container}>
      <Heading mb="30">My Skills</Heading>
      <Text>
        Through my studies, I've gained a solid understanding of computer
        science and web development concepts and have dedicated a lot of my free
        time to apply these concepts to real-world scenarios and applications.
      </Text>
    </div>
  );
};

export default Skills;
