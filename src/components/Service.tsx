"use client";

import {
  Box,
  Center,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

const Service = ({ title, description, iconName }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          rounded={"lg"}
          mt={-12}
          pos="relative"
          height="175px"
          _after={{
            transition: "all .3s ease",
            content: "''",
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: "/img/blob-haikei.svg",
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Icon as={iconName} height="150px" width="150px" />
          {/* <Image
            rounded={"lg"}
            height="230"
            width="282"
            objectFit={"cover"}
            src="/img/blob-haikei.svg"
            alt="#"
          /> */}
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"md"}>{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Service;
