import Image from 'next/image';
import styles from './Me.module.css';

const Me = () => {
  return (
    <Image
      className={`${styles.photo} round`}
      src="/img/about_me_smaller.png"
      unsized
    />
  );
};

export default Me;
