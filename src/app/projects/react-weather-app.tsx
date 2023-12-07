import DetailedPage from '@/components/DetailedPage';

const Project = () => {
  return (
    <DetailedPage
      githubUrl="https://github.com/bennymeier/react-weather-app"
      stack={['React', 'Open Weather Map API', 'Geolocation API']}
      type="Personal"
      images={['img/projects/react-weather-app.png']}
      description="I've seen many Weather Apps built with React out there, so I want
      to create one by my one. To locate the user and get to his coordinates I used the Geolocation
      API. To get the current weather, I used the Open Weather Map API which gives me a 5 days preview."
      title="React Weather App"
      url="https://react-weather-app-brown.now.sh/"
    />
  );
};

export default Project;
