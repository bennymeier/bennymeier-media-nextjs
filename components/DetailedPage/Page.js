import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Alert,
  AlertIcon,
  Box,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Main from '../Main/Main';
import SEO from '../SEO';
import TechnologyStack from '../TechnologyStack/TechnologyStack';

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
      <Main>
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
          <TechnologyStack
            type={type}
            stack={stack}
            live={url}
            code={githubUrl}
          />
          {images.map((image, index) => {
            return (
              <Box className="img-container" key={index}>
                <Image
                  alt={`Website preview of ${title}`}
                  src={image}
                  style={{ borderRadius: '4px' }}
                />
              </Box>
            );
          })}
        </Box>
      </Main>
    </>
  );
};

export default Page;
