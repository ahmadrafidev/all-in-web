import Head from 'next/head'
import LandingPage from '../components/landing-page/landingPage';
import Footer from '../components/layout/footer';
import AboutPage from '../components/about-page/About';
import NavbarLanding from '../components/layout/navbarLanding';


const index = () => {
  return (
    <section>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='description'
          content='a website to save everything'
        />
      </Head>
      <NavbarLanding/>
      <LandingPage />
      <AboutPage />
      <Footer/>
    </section>
  );
}

export default index
