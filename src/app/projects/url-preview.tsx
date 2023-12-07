import DetailedPage from '@/components/DetailedPage';

const Project = () => {
  return (
    <DetailedPage
      githubUrl="https://github.com/bennymeier/url-preview"
      stack={['React', 'Node.js', 'Express.js', 'Puppeteer']}
      type="Personal"
      images={['img/projects/url-preview.png']}
      description="Nowadays it is impossible to imagine life without them. A link preview,
      which shows the user valuable information of a linked website, e.g.
      title, description and a picture of the website. For this purpose, very specific SEO technical metatags are crawled, e.g.
      Open Graph metatags or the Twitter metatags or the normal HTML metatags. In the backend there is built an GET Request API built for the frontend.
      The frontend sends the URL of the website to the backend, then the
      backend opens the website headless, thanks to the Google Puppeteer
      library, and crawls the text out of some metatags."
      title="URL Preview"
      url={false}
    />
  );
};

export default Project;
