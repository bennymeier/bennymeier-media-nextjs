import { ListItem, UnorderedList, Box, Text, Spacer } from '@chakra-ui/core';
import Page from '../../components/DetailedPage/Page';

const Description = () => {
  return (
    <Box mb="2em">
      <Text>
        Since there are almost only YouTube downloaders with adblockers on the
        internet, I developed one myself. The design comes with a light and dark
        mode. In the backend several APIs are provided for the frontend.
      </Text>
      <br />
      <Text>There are the following:</Text>
      <UnorderedList>
        <ListItem>
          /suggestions
          <Text>
            If the user does not enter a link, this API is called and the user
            gets suggestions.
          </Text>
        </ListItem>
        <ListItem>
          /metainfo
          <Text>
            This is where the basic information of the video is retrieved, such
            as title, description, views, likes and dislikes.
          </Text>
        </ListItem>
        <ListItem>
          /watch
          <Text>
            With the two parameters Format and URL the download is prepared
            here. The title comes from the metainfo API and is used as filename.
            But you have to delete Special Characters first.
          </Text>
        </ListItem>
      </UnorderedList>
      <Text>
        Then the appropriate Content-Disposition Header is set, so that the file
        is downloadable.
      </Text>
    </Box>
  );
};

const Project = () => {
  return (
    <Page
      stack={['React', 'Node.js', 'Axios']}
      type="Personal"
      images={['projects/youtube-downloader']}
      description={Description}
      title="YouTube Downloader"
      url="https://youtubdle.com"
    />
  );
};

export default Project;
