import { Heading, Text, Box } from '@chakra-ui/core';
import Me from '../Me/Me';

const Introduction = () => {
  return (
    <Box className="section" as="section" id="introduction">
      <Heading className="heading">
        Hi there, I’m Benny.
        <br />
        <Text as="span" color="teal.300">
          Frontend Developer
        </Text>
        <Text lineHeight="initial">and working at United Planet.</Text>
      </Heading>
      <Me />
      <Text className="description">
        I'm a 24 year old student at DHBW Lörrach university. I work in the
        company and study at the university for three months. Always
        alternating. Before I did a three years apprenticeship as an IT
        specialist for application development.
        <br />
        As I've grown as a developer, I've worked alongside senior designers and
        developers who have raised my standards for whats expected of any web
        application. Through these experiences. I'm focused on building
        high-quality, thoughtful, and intuitive websites and web applications.
      </Text>
    </Box>
  );
};

export default Introduction;
