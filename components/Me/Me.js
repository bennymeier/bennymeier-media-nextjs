import Image from 'next/image';
import styles from './Me.module.css';

const Me = () => {
  return (
    <Image
      alt="A photo of me"
      className={`${styles.photo} round`}
      src="/img/about_me_smaller.png"
      layout="responsive"
      width={400}
      height={100}
    />
  );
};

export default Me;
