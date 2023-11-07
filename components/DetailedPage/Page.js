import {
  Box,
  Heading,
  Text,
  Alert,
  AlertIcon,
  IconButton,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import Image from 'next/image';
import SEO from '../SEO';
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
      <SEO />
      <Box className="container">
        <Heading mt="1em" mb="2em">
          {title}{' '}
          {url && (
            <Link
              aria-label={`Open ${title} in a new tab`}
              href={url}
              isExternal
              title={`Open ${title} in a new tab`}
            >
              <IconButton
                variant="ghost"
                icon={<ExternalLinkIcon />}
                aria-label="Open Website in new tab"
              />
            </Link>
          )}
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
            <Box className="img-container" key={image}>
              <Image
                alt={`Website preview of ${title}`}
                src={`/img/${images}.png`}
                layout="fill"
                className="round"
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Page;
