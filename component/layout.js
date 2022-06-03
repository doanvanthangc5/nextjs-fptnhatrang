import Head from 'next/head';
import Script from 'next/script';

const Layout = (props) => (
  <div>
    <Head>
      <script
        type="text/javascript"
        src="../static/js/jquery-1.12.0.min.js"
      ></script>
      <script type="text/javascript" src="../static/js/main.js"></script>
    </Head>
    <p id="demo"></p>
  </div>
);

export default Layout;
