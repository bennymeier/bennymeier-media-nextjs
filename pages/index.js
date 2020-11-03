import Head from 'next/head';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Introduction from '../components/Introduction/Introduction';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Introduction />
          <Skills />
          <Projects />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
