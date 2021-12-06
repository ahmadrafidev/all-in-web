import Head from 'next/head'
import { Fragment } from "react";
import SignIn from '../components/forms/signin_forms';

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
      <SignIn/>
    </Fragment>
  );
}

export default Home
