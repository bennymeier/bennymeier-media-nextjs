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
      <Text>
        I'm a 24 year old student at DHBW Lörrach university. I work in the
        company and study at the university for three months. Always
        alternating. Before I did a three years apprenticeship as an IT
        specialist for application development.
      </Text>
      <Text mt="1em" mb="1em">
        As I've grown as a developer, I've worked alongside senior designers and
        developers who have raised my standards for whats expected of any web
        application. Through these experiences. I'm focused on building
        high-quality, thoughtful, and intuitive websites and web applications. I
        help you to get started with a professional website on the internet. No
        matter if you need a blog, a community, or a company or club site: I
        will deal with your idea and help you to reach the maximum!
      </Text>
    </Box>
  );
};

export default Introduction;
