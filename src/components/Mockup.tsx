import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const Mockup = ({ imageUrl }) => {
  return (
    <Box>
      <Image
        alt={`Mockup image of the website`}
        height="650"
        src={`/img/references/${imageUrl}.png`}
        width="650"
      />
    </Box>
  );
};

export default Mockup;
