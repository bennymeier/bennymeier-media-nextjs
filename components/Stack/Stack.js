import {
  Flex,
  UnorderedList,
  ListItem,
  Heading,
  Link,
  Box,
} from '@chakra-ui/core';

const STACKS = [
  {
    id: 'Type',
    property: 'type',
  },
  {
    id: 'Stack',
    property: 'stack',
  },
  {
    id: 'Code',
    property: 'code',
  },
  {
    id: 'Live',
    property: 'live',
  },
];

const TypeStack = ({ type }) => {
  return <ListItem>{type}</ListItem>;
};

const TechStack = ({ technologies = [] }) => {
  return technologies.map((technology) => {
    return <ListItem key={technology}>{technology}</ListItem>;
  });
};

const CodeAndLiveStack = ({ url }) => {
  return (
    <ListItem>
      <Link isExternal href={url}>
        {url}
      </Link>
    </ListItem>
  );
};

const Stack = (props) => {
  return (
    <Box mb="2em">
      <Flex>
        {STACKS.map((stack) => {
          const { id, property } = stack;
          const data = props[property];
          return (
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="space-around"
              key={id}
            >
              <Heading textTransform="uppercase" size="xs">
                {id}
              </Heading>
              <UnorderedList styleType="none">
                {property === 'type' && <TypeStack url={data} />}
                {property === 'stack' && <TechStack technologies={data} />}
                {property === 'code' ||
                  (property === 'live' && <CodeAndLiveStack url={data} />)}
              </UnorderedList>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Stack;
