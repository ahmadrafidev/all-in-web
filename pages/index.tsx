import Head from 'next/head'
import { Fragment } from "react";
import LandingPage from '../components/landing-page/landingPage';
import Footer from '../components/layout/footer';
import NavbarLanding from '../components/layout/navbarLanding';


const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='description'
          content='a website to save everything'
        />
      </Head>
      <NavbarLanding/>
      <LandingPage />
      <Footer/>
    </Fragment>
  );
}

export default index
