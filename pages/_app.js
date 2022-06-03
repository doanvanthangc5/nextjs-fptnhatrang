import 'bootstrap/dist/css/bootstrap.css';
import '../styles/font-awesome.min.css';
import '../styles/fptnhatrang.css';
import Headingg from '../component/Head';
import Head from '../component/layout';
function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    require('bootstrap/dist/js/bootstrap.min.js');
  }
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
