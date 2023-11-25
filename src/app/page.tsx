import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Benny Meier Media // Fullstack Developer',
  description:
    'Benny Meier is a fullstack developer from Freiburg, Germany. He loves web design and web development. He is an enthusiast of React, TypeScript, Node.js and MongoDB.',
};

const Home = () => {
  return (
    <>
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
