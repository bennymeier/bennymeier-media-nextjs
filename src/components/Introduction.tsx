'use client';

import { Box, Heading, Text, Tooltip } from '@chakra-ui/react';
import { calculateAge } from '../utils';
import Me from './Me';

const Introduction = () => {
  return (
    <Box className="section" as="section" id="about">
      <Heading className="heading">
        Hi there, I&apos;m Benny.
        <br />
        <Text as="span" color="teal.400">
          Frontend Developer at work
        </Text>
        <Text lineHeight="initial">
          and in my spare time I am passionate about the{' '}
          <Tooltip label="MongoDB + Express.js + React + Node.js">
            MERN-Stack
          </Tooltip>
          .
        </Text>
      </Heading>
      <Me />
      <Text>
        I&apos;m a {calculateAge()} year old student From 2017 to 2020, I
        successfully completed my training as an IT specialist for application
        development. From 2020 to 2023, I successfully completed my studies in
        business informatics specializing in application management at the
        Baden-Wuerttemberg Cooperative State University (DHBW) in Lörrach.
      </Text>
      <Box mt="1em" mb="1em">
        As I&apos;ve grown as a developer, I&apos;ve worked alongside senior
        designers and developers who have raised my standards for whats expected
        of any web application. Through these experiences. I&apos;m focused on
        building high-quality, thoughtful, and intuitive websites and web
        applications. I help you to get started with a professional website on
        the internet. No matter if you need a blog, a community, or a company or
        club site: I will deal with your idea and help you to reach the maximum!
      </Box>
    </Box>
  );
};

export default Introduction;
