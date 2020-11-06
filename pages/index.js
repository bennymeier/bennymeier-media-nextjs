import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Benny Meier Media // Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
