import DetailedPage from '@/components/DetailedPage';

const Project = () => {
  return (
    <DetailedPage
      githubUrl="https://github.com/bennymeier/react-credit-card-component"
      stack={['React', 'Sass']}
      type="Personal"
      images={['img/projects/react-credit-card-component.png']}
      description="Out of boredom I once developed a credit card component with React and
      styled it with Sass."
      title="React Credit Card Component"
      url="http://react-credit-card-component.vercel.app/"
    />
  );
};

export default Project;
