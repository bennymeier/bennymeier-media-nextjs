import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import Main from '../components/Main/Main';
import SEO from '../components/SEO';
import Skills from '../components/Skills/Skills';

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
