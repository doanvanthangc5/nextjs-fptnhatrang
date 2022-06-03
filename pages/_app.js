import 'bootstrap/dist/css/bootstrap.css';
import '../styles/fptnhatrang.css';
import Headingg from '../components/Head';
import Head from '../components/layout';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Headingg />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
