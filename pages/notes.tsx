import Head from 'next/head'
import { Fragment } from "react";
import NotesForm from '../components/forms/create_note_forms';
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
      <NotesForm/>
      <Footer/>
    </Fragment>
  );
}

export default NotesPage
