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
 * @param {string[]} builtWith Array with technologies used
 */
const Page = ({ title, description, builtWith = [], url, image }) => {
  return (
    <>
      <NavbarSmall />
      <Box className="container">
        <Heading mt="1em">{title}</Heading>
        <Text mt="2em" mb="2em">
          {description}
        </Text>
        <Stack
          type="Personal"
          stack={['Wordpress']}
          live="https://loewen-voerstetten.de"
        />
        <Image src={`/img/${image}.png`} unsized />
        <Box>
          <UnorderedList>
            {builtWith.map((technology) => {
              return <ListItem>{technology}</ListItem>;
            })}
          </UnorderedList>
        </Box>
        <Link href={url} isExternal>
          Website
        </Link>
      </Box>
    </>
  );
};

export default Page;
