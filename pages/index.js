import Head from 'next/head';
import Image from 'next/image';
import { Heading, Text } from '@chakra-ui/core';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import LayoutToggle from '../components/LayoutToggle/LayoutToggle';
import Me from '../components/Me/Me';
import Skills from '../components/Skills/Skills';

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
            Student and intern at United Planet GmbH.
          </Heading>
          <Me />
          <Text>
            I'm a 24 year old student at DHBW Lörrach currently studying
            Business Informatics. Before I did three years an apprenticeship as
            an application developer.
          </Text>
          <br />
          <Text>
            As I've grown as a developer, I've worked alongside senior designers
            and developers who have raised my standards for whats expected of
            any web application. Through these experiences.
          </Text>
          <Skills />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
