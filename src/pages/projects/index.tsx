import Main from '@/components/Main';
import SEO from '@/components/Metadata';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <>
      <SEO />
      <Main>
        <Projects />
      </Main>
    </>
  );
};

export default Index;
