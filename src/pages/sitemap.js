import React, { useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import getAPIData from "../utils/API";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";
import GlobalContext from "../context/GlobalContext";
import { isEnglish } from "../utils/checkLanguage";
import imgFavicon from "../assets/favicon.png";
import SitemapList from "../sections/SitemapList";

const Sitemap = ({ xmlData, pageData, menuItems }) => {
  /* General data code starts */
  const router = useRouter();
  const { setCookie, setMenuItems, setLanguages, header, setHeader } =
    useContext(GlobalContext);

  let siteLanguage, pageTitle, generalMetaDescription, generalMetaKeywords;

  if (pageData && pageData.data && !pageData.error) {
    siteLanguage = pageData.data.languages[0].twoLetterIsoCode;
    pageTitle = pageData.data.page.title;
    generalMetaDescription =
      pageData.data.page.constants.ns_seo.seo_meta_description.value;
    generalMetaKeywords =
      pageData.data.page.constants.ns_seo.seo_meta_keywords.value;
  }

  React.useEffect(() => {
    if (pageData && !pageData.error) {
      const languages = pageData.data.languages.map((language) => ({
        value: language.twoLetterIsoCode,
        label: language.twoLetterIsoCode.toUpperCase(),
      }));
      setLanguages(languages);

      setCookie(pageData.data.page.cookie);

      const { menu_align, is_fluid, is_dark, is_button } =
        pageData.data.page.appearance;
      setHeader({
        ...header,
        theme: parseInt(is_dark) ? "dark" : "light",
        isFluid: parseInt(is_fluid),
        button: parseInt(is_button),
        align: menu_align,
      });

      const {
        primaryColor,
        secondaryColor,
        tertiaryColor,
        fontSize,
        lineHeight,
      } = pageData.data.page.constants.ns_style;

      if (typeof document !== "undefined") {
        document.documentElement.style.setProperty(
          "--primary",
          `${primaryColor.value}`
        );
        document.documentElement.style.setProperty(
          "--secondary",
          `${secondaryColor.value}`
        );
        document.documentElement.style.setProperty(
          "--red",
          `${tertiaryColor.value}`
        );
        document.documentElement.style.setProperty(
          "--font-size",
          `${fontSize.value}px`
        );
        document.documentElement.style.setProperty(
          "--line-height",
          `${lineHeight.value}px`
        );
      }
    }
    setMenuItems(menuItems);

    if (typeof window !== "undefined") {
      const language =
        window.navigator.userLanguage || window.navigator.language;
      if (
        localStorage.getItem("locale") &&
        localStorage.getItem("locale") !== router.locale
      ) {
        router.push(`${router.asPath}`, `${router.asPath}`, {
          locale: localStorage.getItem("locale"),
        });
      } else if (router.locale === language) {
        return;
      } else {
        // if (isEnglish(language)) {
        router.push(`${router.asPath}`, `${router.asPath}`, {
          locale: "en",
        });
        // } else {
        //   router.push(`${router.asPath}`, `${router.asPath}`, {
        //     locale: "de",
        //   });
        // }
      }
    }
  }, []);
  /* General data code ends */

  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "light",
          align: "right",
          isFluid: false,
        }}
      >
        <Head>
          {siteLanguage && <meta name="language" content={siteLanguage} />}

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
          />

          {generalMetaDescription && (
            <meta name="description" content={generalMetaDescription} />
          )}

          {generalMetaKeywords && (
            <meta name="keywords" content={generalMetaKeywords} />
          )}

          <title>Sitemap | T3 Shiva</title>

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#2012e6" />
          <link
            href="/icon-192x192.png"
            rel="icon"
            type="image/png"
            sizes="192x192"
          />
          <link
            href="/icon-256x256.png"
            rel="icon"
            type="image/png"
            sizes="256x256"
          />
          <link
            href="/icon-384x384.png"
            rel="icon"
            type="image/png"
            sizes="384x384"
          />
          <link
            href="/icon-512x512.png"
            rel="icon"
            type="image/png"
            sizes="512x512"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>

        {xmlData && <SitemapList xml={xmlData} />}

        {pageData && <Footer pageData={pageData} />}
      </PageWrapper>
    </>
  );
};

export const getStaticProps = async (context) => {
  const pageData = await getAPIData("/");
  const xmlData = await getAPIData("?sitemap=pages&type=1533906435");
  const menuItems = await getAPIData("?type=834");

  return {
    props: { xmlData, pageData, menuItems: menuItems },
    revalidate: 1,
  };
};

export default Sitemap;
