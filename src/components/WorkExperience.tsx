'use client';
import { Box, Flex, Heading, ListItem, Text } from '@chakra-ui/react';
interface Props {
  date: string;
  title: string;
  company: string;
  description?: any;
}
export default function WorkExperience({
  date,
  title,
  company,
  description = '',
}: Props) {
  return (
    <ListItem paddingLeft="8" position="relative">
      <Box
        position="absolute"
        top="-5px"
        left="0"
        bottom="0"
        width="15px"
        _before={{
          background: 'teal.300',
          border: '3px solid transparent',
          borderRadius: '100%',
          content: '""',
          display: 'block',
          height: '10px',
          width: '10px',
          position: 'absolute',
          top: '8px',
          left: '2px',
        }}
        _after={{
          content: '""',
          width: '3px',
          background: 'gray.300',
          display: 'block',
          position: 'absolute',
          top: '24px',
          bottom: '0',
          left: '9px',
        }}
      ></Box>
      <Box>
        <Flex flexDirection="column">
          <Box>
            <Text color="gray.500" fontSize="sm">
              {date}
            </Text>
          </Box>
          <Box>
            <Heading size="md">{title}</Heading>
            <Text>{company}</Text>
            <Box>{description}</Box>
          </Box>
        </Flex>
      </Box>
    </ListItem>
  );
}
