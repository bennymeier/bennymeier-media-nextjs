import { Box, Heading, Text, Badge, Alert, AlertIcon } from '@chakra-ui/core';
import Image from 'next/image';
import NavbarSmall from '../Navbar/NavbarSmall';
import Stack from '../Stack/Stack';

/**
 * @description Renders a component for the references
 * @param {string} title Title for heading
 * @param {string} description Describes the reference
 * @param {string[]} stack Array with technologies used
 * @param {string} url URL to website or GitHub repository
 * @param {string} type Personal, Commercial or Team Project
 */
const Page = ({
  title,
  description: Desc,
  stack = [],
  url,
  images,
  type,
  githubUrl,
}) => {
  return (
    <>
      <NavbarSmall />
      <Box className="container">
        <Heading mt="1em" mb="2em">
          {title}
        </Heading>
        {!Desc && (
          <Alert status="warning" mb="1em">
            <AlertIcon />
            Description coming soon!
          </Alert>
        )}
        {typeof description === 'string' && (
          <Text mt="2em" mb="2em">
            {Desc}
          </Text>
        )}
        {typeof Desc === 'function' && <Desc />}
        <Stack type={type} stack={stack} live={url} code={githubUrl} />
        {images.map((image) => {
          return (
            <Image
              src={`/img/${images}.png`}
              unsized
              key={image}
              className="round"
            />
          );
        })}
      </Box>
    </>
  );
};

export default Page;
