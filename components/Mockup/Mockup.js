import styles from './Mockup.module.css';
import Image from 'next/image';

const Mockup = ({ imageUrl }) => {
  return (
    <div className={`${styles['browser-mockup']} ${styles['with-url']}`}>
      <Image src={`/img/${imageUrl}.png`} unsized />
    </div>
  );
};

export default Mockup;
