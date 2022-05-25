import Layout from '../components/layout/Layout';
import '../styles/globals.css';
//구조분해할당
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
