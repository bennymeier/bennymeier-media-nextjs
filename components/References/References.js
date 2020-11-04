import { Heading, Text, SimpleGrid, Box } from '@chakra-ui/core';
import ReferenceCard from './ReferenceCard';

const REFERENCES = [
  {
    url: 'https://www.sv-bremgarten.de',
    imageUrl: 'sv-bremgarten',
    internalUrl: 'sv-bremgarten',
    title: 'SV Hartheim-Bremgarten e.V.',
    description:
      'A website for our football club in the village. Built with Wordpress, shows live data thanks to Fupa.',
  },
  {
    url: 'https://www.sfv-bremgarten.de',
    imageUrl: 'sfv-bremgarten',
    internalUrl: 'sfv-bremgarten',
    title: 'SFV Bremgarten e.V.',
    description: 'A website for our sports support association in our village.',
  },
  {
    url: 'https://loewen-voerstetten.de',
    imageUrl: 'loewen-voerstetten',
    internalUrl: 'loewen-voerstetten',
    title: 'Gasthaus Zum Löwen',
    description: 'A website for the restaurant of my aunt and uncle.',
  },
  {
    url: 'https://wwww.johannaschnuepke.de',
    imageUrl: 'johannaschnuepke',
    internalUrl: 'johannaschnuepke',
    title: 'Johanna Schnüpke Moderatorin & Journalistin',
    description:
      'A website for my cousin. She is a moderator, journalist and presenter for RTL, WDR and NTV.',
  },
  {
    url: 'https://www.gehirnmetabologie.de',
    imageUrl: 'gehirnmetabologie',
    internalUrl: 'gehirnmetabologie',
    title: 'Stefanie Schopp - Gehirnmetabologin',
    description:
      'A website about the science of the brain, psychology and brain metabolism for a client.',
  },
  {
    url: 'https://www.bennymeier.de',
    imageUrl: 'bennymeier',
    internalUrl: 'bennymeier',
    title: 'Benny Meier Photography',
    description:
      'My photography website with pictures from America, London, a road trip through France, Spain, Gibraltar and Portugal, and pictures from my home country.',
  },
  {
    url: 'https://www.sabrowski-abbautechnik.de',
    imageUrl: 'sabrowski-abbautechnik',
    internalUrl: 'sabrowski-abbautechnik',
    title: 'Sabrowski Beton-Abbautechnik',
    description: 'Lorem ipsum dolor sit atmet.',
    inProgress: true,
  },
  {
    url: 'https://www.old.bennymeier-media.de',
    imageUrl: 'bennymeier-media',
    internalUrl: 'bennymeier-media',
    title: 'Benny Meier Media Old Version',
    description:
      'My very first own website, my very own portfolio. Starting with Bootstrap v2.3.2 and constantly updated up to Bootstrap v4.0. I had the website from 2015 until the end of 2020. Welcome to my new website!',
  },
];

const References = () => {
  return (
    <Box className="section" as="section" id="references">
      <Heading className="heading">My References</Heading>
      <Text className="description">
        I design and develop websites for companies and people. Take a look at
        some of the companies I've dedicated my time to.
      </Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {REFERENCES.map((reference) => {
          return <ReferenceCard key={reference.internalUrl} {...reference} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default References;
