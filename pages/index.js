import Head from 'next/head';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
