// import App from 'next/app'
import { useEffect } from "react";
import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

import "../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";

import "../assets/fonts/typography-font/CircularStd-Bold.ttf";
import "../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Book.ttf";
import "../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Medium.ttf";

import "../assets/fonts/icon-font/fonts/avasta.ttf";
import "../assets/fonts/icon-font/css/style.css";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/aos/dist/aos.css";
import "../../node_modules/react-day-picker/lib/style.css";
import "../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

import "../style.css";
import "../scss/bootstrap.scss";
import "../scss/main.scss";

const MyApp = ({ Component, pageProps, router }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service worker registration successfull", reg);
        })
        .catch((err) => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }, []);

  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }} pageData={pageProps.pageData}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}} pageData={pageProps.pageData}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
