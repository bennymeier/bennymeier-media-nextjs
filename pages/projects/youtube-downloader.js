import Page from '../../components/DetailedPage/Page';

const Project = () => {
  return (
    <Page
      stack={['React', 'Node.js', 'Axios']}
      type="Personal"
      images={['projects/youtube-downloader']}
      description="Since there are almost only YouTube downloaders with adblockers on the internet, I developed one myself. In the backend several APIs are provided for the frontend. There are the following:
      - /suggestions
      If the user does not enter a link, this API is called and the user gets suggestions.
      - /metainfo
      This is where the basic information of the video is retrieved, such as title, description, views, likes and dislikes.
      - /watch
      With the two parameters Format and URL the download is prepared here. The title comes from the metainfo API and is used as filename. But you have to delete Special Characters first. Then the appropriate Content-Disposition Header is set, so that the file is downloadable."
      title="YouTube Downloader"
      url="https://youtubdle.com"
    />
  );
};

export default Project;
