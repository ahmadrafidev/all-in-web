import Head from 'next/head'
import SignUp from '../components/forms/signup_forms';

const Home = () => {
  return (
    <section>
      <Head>
        <title>Save Everything!</title>
        <meta 
          name='home page'
          content='a website to save everything'
        />
      </Head>
      <SignUp/>
    </section>
  );
}

export default Home
