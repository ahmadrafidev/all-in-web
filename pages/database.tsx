import Head from "next/head";
import { Fragment } from "react";
import Navbar from "../components/layout/navbarMain";
import Footer from "../components/layout/footer";
import DBPage from "../components/forms/create_database";

const Database = () => {
  return (
    <Fragment>
      <Head>
        <title>Save Everything!</title>
        <meta name="description" content="a website to save everything" />
      </Head>
      <Navbar />
      <DBPage />
      <Footer />
    </Fragment>
  );
};

export default Database;
