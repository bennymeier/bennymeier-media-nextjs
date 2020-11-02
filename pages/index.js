import Head from 'next/head';
import Image from 'next/image';
import { Heading, Text } from '@chakra-ui/core';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import LayoutToggle from '../components/LayoutToggle/LayoutToggle';
import Me from '../components/Me/Me';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <Image className="logo" src="/img/logo_black.png" unsized />
          <LayoutToggle />
          <SocialMedia />
        </div>
      </header>
      <main>
        <div className="container">
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
          <Me />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
