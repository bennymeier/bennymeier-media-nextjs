import LayoutToggle from '../LayoutToggle/LayoutToggle';
import SocialMedia from '../SocialMedia/SocialMedia';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="container">
        <Image className="logo" src="/img/logo_black.png" unsized />
        <LayoutToggle />
        <SocialMedia />
      </div>
    </>
  );
};

export default Header;
