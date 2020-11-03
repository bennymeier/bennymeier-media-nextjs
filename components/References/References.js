import { Heading, Text, SimpleGrid, Box } from '@chakra-ui/core';
import ReferenceCard from './ReferenceCard';

const REFERENCES = [
  {
    url: 'https://loewen-voerstetten.de',
    imageUrl: 'loewen-voerstetten',
    internalUrl: 'loewen-voerstetten',
    title: 'Gasthaus Zum Löwen',
    description:
      'Lorem ipsum dolor sit atmet. Lorem ipsum dolor sit atmet. Lorem ipsum dolor.',
  },
  {
    url: 'https://sv-bremgarten.de',
    imageUrl: 'sv-bremgarten',
    internalUrl: 'sv-bremgarten',
    title: 'SV Hartheim-Bremgarten e.V.',
    description:
      'Lorem ipsum dolor sit atmet. Lorem ipsum dolor sit atmet. Lorem ipsum dolor.',
  },
  {
    url: 'https://sfv-bremgarten.de',
    imageUrl: 'sfv-bremgarten',
    internalUrl: 'sfv-bremgarten',
    title: 'SFV Bremgarten e.V.',
    description: 'Lorem ipsum dolor sit atmet.',
  },
  {
    url: 'https://johannaschnuepke.de',
    imageUrl: 'johannaschnuepke',
    internalUrl: 'johannaschnuepke',
    title: 'Johanna Schnüpke Moderatorin & Journalistin',
    description: 'Lorem ipsum dolor sit atmet.',
  },
  {
    url: 'https://gehirnmetabologie.de',
    imageUrl: 'gehirnmetabologie',
    internalUrl: 'gehirnmetabologie',
    title: 'Stefanie Schopp - Gehirnmetabologin',
    description:
      'Lorem ipsum dolor sit atmet. Lorem ipsum dolor sit atmet. Lorem ipsum dolor.',
  },
  {
    url: 'https://www.sabrowski-abbautechnik.de',
    imageUrl: 'sabrowski-abbautechnik',
    internalUrl: 'sabrowski-abbautechnik',
    title: 'Sabrowski Beton-Abbautechnik',
    description: 'Lorem ipsum dolor sit atmet.',
  },
  {
    url: 'https://bennymeier.de',
    imageUrl: 'bennymeier',
    internalUrl: 'bennymeier',
    title: 'Benny Meier Photography',
    description: 'Lorem ipsum dolor sit atmet.',
  },
];

const References = () => {
  return (
    <Box>
      <Heading mb="1em">My References</Heading>
      <Text mb="3em">I design and develop websites for companies and people. It's always a challenge with much fun!</Text>
      <SimpleGrid columns={[1, 1, 2]} spacing="40px">
        {REFERENCES.map((reference) => {
          return <ReferenceCard key={reference.internalUrl} {...reference} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default References;
