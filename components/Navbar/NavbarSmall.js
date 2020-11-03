import styles from './NavbarSmall.module.css';
import Image from 'next/image';
import LayoutToggle from '../LayoutToggle/LayoutToggle';

const NavbarSmall = () => {
  return (
    <>
      <nav className={styles['sticky-navbar']}>
        <div>
          <Image className="logo" src="/img/logo_black.png" unsized />
        </div>
        <div>
          <LayoutToggle />
        </div>
      </nav>
    </>
  );
};

export default NavbarSmall;
