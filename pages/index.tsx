import Head from 'next/head'
import LandingPage from '../components/landing-page/landingPage';
import Footer from '../components/layout/footer';


const Home = () => {
  return (
    <section>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='description'
          content='a website to save everything'
        />
      </Head>
      <LandingPage />
      <Footer/>
    </section>
  );
}

export default Home
