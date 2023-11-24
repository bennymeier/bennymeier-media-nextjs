import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Main from '@/components/Main';
import SEO from '@/components/Metadata';
import Skills from '@/components/Skills';

export const metadata = {
  title: 'Home',
  description: 'Das ist Home.',
};

const Home = () => {
  return (
    <>
      <SEO />
      <Header />
      <Main>
        <Introduction />
        <Skills />
        <Contact />
      </Main>
    </>
  );
};

export default Home;
