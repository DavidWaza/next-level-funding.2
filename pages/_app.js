import "@/styles/globals.css";
import Layout from "./components/Layout";
import './styles.css';
import ScrollToTop from "./components/ScrollToTop";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  );
}
