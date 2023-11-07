import Image from 'next/image';
import styles from './Me.module.css';

const Me = () => {
  return (
    <Image
      alt="Picture of Benny Meier"
      className={`${styles.photo} round`}
      src="/img/about_me_smaller.png"
      width={400}
      height={100}
    />
  );
};

export default Me;
