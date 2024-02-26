'use client';

import Main from '@/components/Main';
import Service from '@/components/Service';
import { SERVICES } from '@/utils/constants';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const Services = () => {
  return (
    <>
      <Main title="Services" description="All my services.">
        <Text>
          As a passionate web developer, I can help you kickstart your online
          presence with a professional website. Whether you need a blog, a
          community platform, or a corporate/club site, I'll delve into your
          ideas and assist you in reaching the maximum potential!
        </Text>
        <Box>
          <SimpleGrid minChildWidth="320px" spacing="40px">
            {SERVICES.map((service) => (
              <Service key={service.title} {...service} />
            ))}
          </SimpleGrid>
        </Box>
      </Main>
    </>
  );
};

export default Services;
