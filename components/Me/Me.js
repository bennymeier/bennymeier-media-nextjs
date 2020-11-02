import Image from 'next/image';
import styles from './Me.module.css';

const Me = () => {
  return <Image className={styles.photo} src="/img/about_me.png" unsized />;
};

export default Me;
