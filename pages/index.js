import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/core';
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Heading>
          Hi there, I’m Benny.
          <br />
          <Text as="span" color="teal.300">
            Frontend Developer
          </Text>
          ,
          <br />
          Student, and intern at United Planet GmbH.
        </Heading>
      </main>

      <footer></footer>
    </div>
  );
}
