import { Html, Head, Main, NextScript } from "next/document";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Footer from "./components/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
      </Head>
      <body>
        <ResponsiveNavbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
