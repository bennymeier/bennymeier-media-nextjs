import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

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
