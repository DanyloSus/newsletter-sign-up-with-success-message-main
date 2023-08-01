import Head from "next/head";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-charcoal-grey w-screen min-h-screen flex justify-center items-center">
      <Head>
        <title>Nineteenth Project</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
