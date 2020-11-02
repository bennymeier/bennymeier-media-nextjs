import Head from 'next/head';
import { Heading } from '@chakra-ui/core';
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benny Meier Media // Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Heading>Benny Meier</Heading>
      </main>

      <footer></footer>
    </div>
  );
}
