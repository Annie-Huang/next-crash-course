import '../styles/globals.css';
import Layout from '../components/Layout';

// The <Component> here are the page component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
