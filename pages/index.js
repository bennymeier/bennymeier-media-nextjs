import Head from 'next/head';
import Header from '../components/Header/Header';
import NavbarSmall from '../components/Navbar/NavbarSmall';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarSmall />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
