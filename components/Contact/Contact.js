import { Button, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex as="section" id="contact" alignItems="center" justifyContent="center">
      <Button
        color="teal.700"
        borderWidth="3px"
        variant="outline"
        href="mailto:hi@ennymeier-media.de"
      >
        Get In Touch
      </Button>
    </Flex>
  );
};

export default Contact;
