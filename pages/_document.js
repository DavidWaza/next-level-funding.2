import { Html, Head, Main, NextScript } from "next/document";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Footer from "./components/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </Head>
      <body>
        <ResponsiveNavbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
