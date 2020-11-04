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

const TypeStack = ({ type = 'Personal' }) => {
  return <ListItem>{type}</ListItem>;
};

const TechStack = ({ technologies = [] }) => {
  return technologies.map((technology) => {
    return <ListItem key={technology}>{technology}</ListItem>;
  });
};

const CodeAndLiveStack = ({ url, isGitHub }) => {
  return (
    <ListItem>
      <Link isExternal href={url}>
        {isGitHub ? 'Repository' : 'View Site'}
      </Link>
    </ListItem>
  );
};

const Stack = (props) => {
  return (
    <Box mb="2em">
      <Flex alignItems="baseline" justifyContent="space-around">
        {STACKS.map((stack) => {
          const { id, property } = stack;
          const data = props[property];
          return (
            <Flex alignItems="center" flexDirection="column" key={id}>
              <Heading textTransform="uppercase" size="xs" mb="1em">
                {id}
              </Heading>
              <UnorderedList styleType="none">
                {property === 'type' && <TypeStack type={data} />}
                {property === 'stack' && <TechStack technologies={data} />}
                {property === 'code' ||
                  (property === 'live' && (
                    <CodeAndLiveStack
                      url={data}
                      isGitHub={property === 'code'}
                    />
                  ))}
              </UnorderedList>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Stack;
