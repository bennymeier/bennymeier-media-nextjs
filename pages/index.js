import Head from 'next/head';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Introduction from '../components/Introduction/Introduction';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Head lang="en">
        <title>Benny Meier Media // Fullstack Developer</title>
        <meta
          name="description"
          content="Benny Meier is a fullstack developer from Freiburg, Germany. He loves web design and web development. He is an enthusiast of React, TypeScript, Node.js and MongoDB."
        />

        <meta property="og:image" content="" />
        <meta
          property="og:title"
          content="Benny Meier Media // Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Benny Meier is a fullstack developer from Freiburg, Germany. He loves web design and web development. He is an enthusiast of React, TypeScript, Node.js and MongoDB."
        />
        <meta property="og:url" content="https://bennymeier-media.de" />
        <meta
          property="og:site_name"
          content="Benny Meier Media // Fullstack Developer"
        />

        <meta name="twitter:card" content="" />
        <meta name="twitter:url" content="https://bennymeier-media.de" />
        <meta
          name="twitter:title"
          content="Benny Meier Media // Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Benny Meier is a fullstack developer from Freiburg, Germany. He loves web design and web development. He is an enthusiast of React, TypeScript, Node.js and MongoDB."
        />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="https://bennymeier-media.de" />

        <meta name="theme-color" content="#38b2ac"/>
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
