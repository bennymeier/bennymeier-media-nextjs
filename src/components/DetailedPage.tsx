'use client';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Alert, AlertIcon, Box, Heading, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import Main from './Main';
import TechnologyStack from './TechnologyStack';

type DetailedPageProps = {
  title: string;
  description: React.ReactNode;
  stack: string[];
  url?: string;
  images: string[];
  type: any;
  githubUrl?: string;
};

const DetailedPage = (props: DetailedPageProps) => {
  const {
    title,
    description,
    stack = [],
    url,
    images,
    type,
    githubUrl = '',
  } = props;

  const Description = () => {
    if (!description) {
      return (
        <Alert status="warning" mb="1em">
          <AlertIcon />
          Description coming soon!
        </Alert>
      );
    }
    return <Description />;
  };

  return (
    <>
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
          <Box>{Description()}</Box>
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
                  height="650"
                  src={`/${image}`}
                  style={{ borderRadius: '4px' }}
                  width="750"
                />
              </Box>
            );
          })}
        </Box>
      </Main>
    </>
  );
};

export default DetailedPage;
