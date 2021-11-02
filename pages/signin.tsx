import Head from 'next/head'
import SignIn from '../components/forms/signin_forms';

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
      <SignIn/>
    </section>
  );
}

export default Home
