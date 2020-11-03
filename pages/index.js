import Head from 'next/head';
import Skills from '../components/Skills/Skills';
import References from '../components/References/References';
import Projects from '../components/Projects/Projects';
import Introduction from '../components/Introduction/Introduction';
import Header from '../components/Header/Header';
import NavbarSmall from '../components/Navbar/NavbarSmall';

const Home = () => {
  return (
    <>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarSmall />
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Introduction />
          <Skills />
          <References />
          <Projects />
          {/* <Projects
            title="My Projects"
            description=" I like to stay busy and always have a project in the works. Take a look
        at some of the applications, articles, and companies I've dedicated my
        time to."
          /> */}
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
