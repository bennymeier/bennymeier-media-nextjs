import Image from 'next/image';
import styles from './Me.module.css';
import mePic from '/public/img/about_me_smaller.png';

const Me = () => {
  return (
    <Image
      alt="Picture of Benny Meier"
      className={`${styles.photo} round`}
      src={mePic}
      priority={true}
      // width={400}
      // height={100}
    />
  );
};

export default Me;
