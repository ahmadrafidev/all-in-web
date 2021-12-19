import Head from 'next/head'
import { Fragment } from "react";
import SignUp from '../components/forms/signup_forms';

const SignUpPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='home page'
          content='a website to save everything'
        />
      </Head>
      <SignUp/>
    </Fragment>
  );
}

export default SignUpPage
