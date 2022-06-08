import '../styles/fptnhatrang.css';
import Headingg from '../components/Head';
import Footer from '../components/Footer';
import Head from '../components/layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Headingg />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
