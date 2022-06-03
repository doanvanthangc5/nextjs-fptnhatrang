import '../styles/fptnhatrang.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headingg from '../component/Head';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return (
    <>
      <Headingg />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
