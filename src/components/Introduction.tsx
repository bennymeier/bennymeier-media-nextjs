'use client';

import { Box, Heading, Text, Tooltip } from '@chakra-ui/react';
import Me from './Me';

const Introduction = () => {
  return (
    <Box className="section" as="section" id="about">
      <Heading fontSize={{ base: '65px', md: '82px' }} fontWeight="200">
        Hi there, I'm Benny.
        <br />
        <Text as="span" color="teal.400" fontWeight="300">
          Fullstack Developer
        </Text>
      </Heading>
      <Me />
      <Text>
        Welcome to my digital portfolio. I am Benny Meier, a passionate and
        innovative Fullstack Developer specializing in web development and
        enthusiast of the{' '}
        <Tooltip label="MongoDB + Express.js + React + Node.js">
          <Box as="span" textDecoration="underline" textDecorationColor="teal.400">MERN-Stack</Box>
        </Tooltip>
        . With a keen eye for detail and a relentless drive for perfection, I
        create digital experiences that are both visually appealing and
        functionally robust. Explore my work, learn about my journey and let's
        connect to bring your next project to life.
      </Text>
      {/* <Text>
        I'm a {calculateAge()} year old student From 2017 to 2020, I
        successfully completed my training as an IT specialist for application
        development. From 2020 to 2023, I successfully completed my studies in
        business informatics specializing in application management at the
        Baden-Wuerttemberg Cooperative State University (DHBW) in Lörrach.
      </Text>
      <Box mt="1em" mb="1em">
        As I've grown as a developer, I've worked alongside senior designers and
        developers who have raised my standards for whats expected of any web
        application. Through these experiences. I'm focused on building
        high-quality, thoughtful, and intuitive websites and web applications. I
        help you to get started with a professional website on the internet. No
        matter if you need a blog, a community, or a company or club site: I
        will deal with your idea and help you to reach the maximum!
      </Box> */}
    </Box>
  );
};

export default Introduction;
