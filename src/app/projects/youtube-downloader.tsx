import DetailedPage from '@/components/DetailedPage';

const Project = () => {
  return (
    <DetailedPage
      githubUrl="https://github.com/bennymeier/youtube-downloader"
      stack={['React', 'Node.js', 'Axios']}
      type="Personal"
      images={['img/projects/youtube-downloader.png']}
      description="Since there are almost only YouTube downloaders with adblockers on the
      internet, I developed one myself. The design comes with a light and dark
      mode. In the backend several APIs are provided for the frontend."
      title="YouTube Downloader"
      url="https://youtubdle.com"
    />
  );
};

export default Project;
