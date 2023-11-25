'use client';

import { Box, Flex, Icon } from '@chakra-ui/react';

const Skill = ({ name, icon }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    py="2"
    px="3"
    borderWidth="1px"
    borderStyle="solid"
    borderRadius="9999px"
    gap="1"
    userSelect="none"
  >
    <Icon as={icon} height="16px" width="16px" />
    <Box lineHeight="4">{name}</Box>
  </Flex>
);

export default Skill;
