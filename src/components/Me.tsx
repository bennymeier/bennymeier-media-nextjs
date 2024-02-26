'use client';

import Image from 'next/image';

const Me = () => {
  return (
    <Image
      alt="Picture of Benny Meier"
      src="/img/me_usa.jpg"
      priority={true}
      height="500"
      width="1180"
      style={{ margin: '3em 0 2em 0' }}
    />
  );
};

export default Me;
