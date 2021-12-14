import Head from 'next/head'
import { Fragment } from "react";
import Navbar from '../components/layout/navbarMain';
import Footer from '../components/layout/footer';


const NotesPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='description'
          content='a website to save everything'
        />
      </Head>
      <Navbar/>
      <Footer/>
    </Fragment>
  );
}

export default NotesPage
