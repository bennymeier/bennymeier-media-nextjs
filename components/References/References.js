import { Heading, Text, SimpleGrid, Box } from '@chakra-ui/react';
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
    description: `My photography website with pictures from America, London, a road trip through 
    France, Spain, Gibraltar and Portugal, and pictures from my home country.`,
  },
  {
    url: 'https://www.sabrowski-abbautechnik.de',
    imageUrl: 'sabrowski-abbautechnik',
    internalUrl: 'sabrowski-abbautechnik',
    title: 'Sabrowski Beton-Abbautechnik',
    description: `The company is a medium-sized, dynamic concrete drilling and sawing company that uses the latest 
    technology to dismantle reinforced concrete, masonry, etc. without dust and vibration and thus in an environmentally 
    friendly manner.
    Using a special grinding technique, we are able to renovate surfaces such as concrete or screed, prepare the substrate
     or polish directly used surfaces to a high gloss.`,
    inProgress: true,
  },
  {
    url: 'https://www.old.bennymeier-media.de',
    imageUrl: 'bennymeier-media',
    internalUrl: 'bennymeier-media',
    title: 'Benny Meier Media Old Version',
    description: `My very first own website, my very own portfolio. Starting with Bootstrap v2.3.2
       and constantly updated up to Bootstrap v4.0. I had the website from 2015 until the 
       end of 2020. Welcome to my new website!`,
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
