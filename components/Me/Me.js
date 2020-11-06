import Image from 'next/image';
import styles from './Me.module.css';

const Me = () => {
  return (
    <Image
      alt="A photo of me"
      className={`${styles.photo} round`}
      src="/img/about_me_smaller.png"
      unsized
    />
  );
};

export default Me;
