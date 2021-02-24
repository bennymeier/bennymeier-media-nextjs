import { ListItem, UnorderedList, Box, Text, Spacer } from '@chakra-ui/react';
import Page from '../../components/DetailedPage/Page';

const Description = () => {
  return (
    <Box mb="2em">
      <Text>
        Nowadays it is impossible to imagine life without them. A link preview,
        which shows the user valuable information of a linked website, e.g.
        title, description and a picture of the website.
      </Text>
      <Text mt="1em">
        For this purpose, very specific SEO technical metatags are crawled, e.g.
        Open Graph metatags or the Twitter metatags or the normal HTML metatags.
      </Text>
      <Text mt="1em">
        In the backend there is built an GET Request API built for the frontend.
        The frontend sends the URL of the website to the backend, then the
        backend opens the website headless, thanks to the Google Puppeteer
        library, and crawls the text out of some metatags.
      </Text>
    </Box>
  );
};

const Project = () => {
  return (
    <Page
      githubUrl="https://github.com/bennymeier/url-preview"
      stack={['React', 'Node.js', 'Express.js', 'Puppeteer']}
      type="Personal"
      images={['projects/url-preview']}
      description={Description}
      title="URL Preview"
      url={false}
    />
  );
};

export default Project;
