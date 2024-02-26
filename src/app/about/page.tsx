'use client';

import Main from '@/components/Main';
import WorkExperience from '@/components/WorkExperience';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Main title="About Me" description="All you have to know about me.">
        <Box>
          <Flex
            margin="3"
            gap="40px"
            flexDirection="column"
            alignItems="center"
          >
            <Heading fontWeight="200" textAlign="center">
              <Text fontWeight="300" as="span">
                Fullstack Developer
              </Text>
              <br />
              crafting beautiful
              <br />
              <i>digital</i> user
              <br />
              experiences
            </Heading>
            <Image
              height="350"
              width="750"
              src="/img/about_me.png"
              alt="Me - Benny Meier"
            />
          </Flex>
          <Flex gap="4">
            <Text>
              As I've grown as a developer, I've worked alongside senior
              designers and developers who have raised my standards for whats
              expected of any web application. Through these experiences. I'm
              focused on building high-quality, thoughtful, and intuitive
              websites and web applications. I help you to get started with a
              professional website on the internet. No matter if you need a
              blog, a community, or a company or club site: I will deal with
              your idea and help you to reach the maximum!
            </Text>
          </Flex>
          <Box margin="100px auto 170px">
            <Flex gap="40px" alignItems="center">
              <Heading>What's a Fullstack Developer?</Heading>
              <Text>
                A Fullstack Developer is a software engineer skilled in both
                frontend and backend development. This means they can handle
                everything from designing user interfaces and user experiences
                (frontend) to managing server-side logic, database operations,
                and server configuration (backend). As an enthusiast for the
                MERN stack, I specialize in using MongoDB, Express.js, React.js,
                and Node.js to build and maintain comprehensive web
                applications. This combination of technologies is celebrated for
                its efficiency, scalability, and flexibility, making it a
                preferred choice for modern web development projects.
              </Text>
            </Flex>
          </Box>
          <Heading>Curriculum vitae</Heading>
          <UnorderedList listStyleType="none" margin="0" padding="0">
            <WorkExperience
              company="INTREXX GmbH"
              date="Oct 2023 - Now"
              title="Software Developer"
            />
            <WorkExperience
              company="INTREXX GmbH"
              date="Oct 2020 - Oct 2023"
              title="Dual Student Business Informatics - Application Management"
              description={
                <UnorderedList>
                  <ListItem>
                    DMS for digital archiving and interface connection in the
                    Finance area introduced
                  </ListItem>
                  <ListItem>
                    Conception, analysis and development of a dashboard for the
                    accounting
                  </ListItem>
                  <ListItem>
                    Tech talk with pre-sales for customers about designing SVG
                    images and form validation
                  </ListItem>
                  <ListItem>
                    Create UI drafts for application development team
                  </ListItem>
                  <ListItem>
                    Project work I for university: Development of a dashboard to
                    determine project statuses
                  </ListItem>
                  <ListItem>
                    Project work II for university: Integration of document
                    management software into an existing app for the digital
                    archiving of documents, as well as the further development
                    of this app
                  </ListItem>
                  <ListItem>
                    Elaboration in the subject of "New Concepts": Determining
                    the maturity level of cloud databases in companies using
                    guidelines and a catalog of key questions
                  </ListItem>
                  <ListItem>
                    Bachelor thesis: Conception and implementation of an image
                    annotation tool for the low-code platform Intrexx
                  </ListItem>
                </UnorderedList>
              }
            />
            <WorkExperience
              company="INTREXX GmbH"
              date="Sep 2017 - Jul 2020"
              title="Apprenticeship - Frontend Developer"
              description={
                <UnorderedList>
                  <ListItem>
                    Demonstrated team-oriented skills while participating in
                    sprint reviews, planning sessions, and retrospective
                    presentations within an agile team environment
                  </ListItem>
                  <ListItem>
                    For a new prototype I helped in a small team to develop a
                    chat web and desktop application using React, Redux,
                    TypeScript, and Electron. For messaging we used XMPP with
                    Stanza.io, video conferencing with Jitsi, authentication
                    with OpenID Connect and Keycloak
                  </ListItem>
                  <ListItem>
                    Ensuring quality with unit and integration tests and
                    Application of TDD (Jasmine, Cypress, Karma, Selenium)
                  </ListItem>
                  <ListItem>
                    Maintaining the web build system (TypeScript, Webpack,
                    Babel, Jasmine, Gulp)
                  </ListItem>
                  <ListItem>
                    Refactored and designed a drag & drop sortable list
                  </ListItem>
                  <ListItem>
                    Refactored modals, tooltips, toasts/alerts
                  </ListItem>
                  <ListItem>
                    Refactored numeric input fields (formatting, validations)
                  </ListItem>
                  <ListItem>Refactored old XSLT/XML transformations</ListItem>
                  <ListItem>
                    Final project: development of a link preview like on
                    LinkedIn, Facebook, and Discord (Node.js, Express,
                    TypeScript, React, Redis)
                  </ListItem>
                </UnorderedList>
              }
            />
          </UnorderedList>
        </Box>
      </Main>
    </>
  );
};

export default About;
