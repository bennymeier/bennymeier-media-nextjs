import { Heading, Text } from '@chakra-ui/core';
import Me from '../Me/Me';

const Introduction = () => {
  return (
    <>
      <Heading>
        Hi there, I’m Benny.
        <br />
        <Text as="span" color="teal.300">
          Frontend Developer
        </Text>
        <Text>and working at United Planet.</Text>
      </Heading>
      <Me />
      <Text>
        I'm a 24 year old student at DHBW Lörrach university. I work in the
        company and study at the university for three months. Always
        alternating. Before I did a three years apprenticeship as an IT
        specialist for application development.
      </Text>
      <br />
      <Text>
        As I've grown as a developer, I've worked alongside senior designers and
        developers who have raised my standards for whats expected of any web
        application. Through these experiences.
      </Text>
    </>
  );
};

export default Introduction;
