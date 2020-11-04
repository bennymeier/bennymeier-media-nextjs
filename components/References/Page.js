import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Link,
} from '@chakra-ui/core';
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
const Page = ({ title, description, stack = [], url, image, type }) => {
  return (
    <>
      <NavbarSmall />
      <Box className="container">
        <Heading mt="1em">{title}</Heading>
        <Text mt="2em" mb="2em">
          {description}
        </Text>
        <Stack type={type} stack={stack} live={url} />
        <Image src={`/img/references/${image}.png`} unsized />
      </Box>
    </>
  );
};

export default Page;
