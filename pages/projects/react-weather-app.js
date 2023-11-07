import { Box, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import Page from '../../components/DetailedPage/Page';

const Description = () => {
  return (
    <Box mb="2em">
      <Text>
        I've seen many Weather Apps built with React out there, so I want to
        create one by my one.
      </Text>
      <Text mt="1em">
        To locate the user and get to his coordinates I used the Geolocation
        API. To get the current weather, I used the {/* */}
        <Link
          aria-label="Open the Open Weather Map API"
          href="https://openweathermap.org/api"
          isExternal
        >
          Open Weather Map API
        </Link>
        , which gives me a 5 day preview.
      </Text>
    </Box>
  );
};

const Project = () => {
  return (
    <Page
      githubUrl="https://github.com/bennymeier/react-weather-app"
      stack={['React', 'Open Weather Map API', 'Geolocation API']}
      type="Personal"
      images={['projects/react-weather-app']}
      description={Description}
      title="React Weather App"
      url="https://react-weather-app-brown.now.sh/"
    />
  );
};

export default Project;
