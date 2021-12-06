import Head from 'next/head'
import { Fragment } from "react";
import Footer from '../components/layout/footer';
import HomePage from '../components/home-page/homePage';
import Navbar from '../components/layout/navbarMain';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='home page'
          content='a website to save everything'
        />
      </Head>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </Fragment>
  );
}

export default Home
