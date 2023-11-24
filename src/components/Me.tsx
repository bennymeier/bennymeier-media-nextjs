import Image from 'next/image';

const Me = () => {
  return (
    <Image
      alt="Picture of Benny Meier"
      src="/img/about_me_smaller.png"
      priority={true}
      height="200"
      width="600"
      style={{ margin: '3em 0 2em 0' }}
    />
  );
};

export default Me;
