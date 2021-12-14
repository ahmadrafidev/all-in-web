import Head from 'next/head'
import { Fragment } from "react";
import SignIn from '../components/forms/signin_forms';

const SignInPage = () => {
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

export default SignInPage
