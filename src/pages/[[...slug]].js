// Loal Core of React.js and Next.js
import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import Routes from "../utils/Routes";
import getAPIData from "../utils/API";
import { isEnglish } from "../utils/checkLanguage";
import Footer from "../components/Footer";
import ContentType from "../utils/ContentType";
import PageWrapper from "../components/PageWrapper";
import GlobalContext from "../context/GlobalContext";
import imgFavicon from "../assets/favicon.png";

const Page = ({ pageData, menuItems }) => {
  /* General data code starts */
  const router = useRouter();
  const {
    setCookie,
    setMenuItems,
    setLanguages,
    header,
    setHeader,
    themeSwitcher,
    setThemeSwitcher,
  } = useContext(GlobalContext);

  let siteLanguage,
    pageTitle,
    generalTitlePrefix,
    generalTitleSufix,
    generalMetaDescription,
    generalMetaKeywords;

  if (pageData && pageData.data && !pageData.error) {
    siteLanguage = pageData.data.languages[0].twoLetterIsoCode;
    pageTitle = pageData.data.page.title;
    generalTitlePrefix =
      pageData.data.page.constants.ns_seo.seo_title_prefix.value;
    generalTitleSufix =
      pageData.data.page.constants.ns_seo.seo_title_sufix.value;
    generalMetaDescription =
      pageData.data.page.constants.ns_seo.seo_meta_description.value;
    generalMetaKeywords =
      pageData.data.page.constants.ns_seo.seo_meta_keywords.value;
  }

  useEffect(() => {
    if (pageData && !pageData.error) {
      const { menu_align, is_fluid, is_dark, is_button } =
        pageData.data.page.appearance;
      setHeader({
        ...header,
        theme: parseInt(is_dark) ? "dark" : "light",
        isFluid: parseInt(is_fluid),
        button: parseInt(is_button),
        align: menu_align,
      });
    }
  }, []);

  useEffect(() => {
    if (pageData && !pageData.error) {
      const languages = pageData.data.languages.map((language) => ({
        value: language.twoLetterIsoCode,
        label: language.twoLetterIsoCode.toUpperCase(),
      }));
      setLanguages(languages);

      setCookie(pageData.data.page.cookie);

      const {
        primaryColor,
        secondaryColor,
        tertiaryColor,
        textColor,
        fontSize,
        lineHeight,
        siteFonts,
      } = pageData.data.page.constants.ns_style;

      const fontFamily = pageData.data.page.constants.ns_style["font-family"];

      function getThemeVariable(themeVar) {
        const theme = JSON.parse(localStorage.getItem("theme"));

        if (theme && theme[themeVar]) {
          return theme[themeVar];
        } else {
          return false;
        }
      }

      setThemeSwitcher({
        ...themeSwitcher,
        fontFamilyLink: getThemeVariable("fontFamilyLink")
          ? getThemeVariable("fontFamilyLink")
          : siteFonts.value,
        fontFamilyName: getThemeVariable("fontFamilyName")
          ? getThemeVariable("fontFamilyName")
          : fontFamily.value,
      });

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
        document.body.style.setProperty(
          "--color-headings",
          `${textColor.value}`
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
        router.push(`${router.asPath}`, `${router.asPath}`, {
          locale: "en",
        });
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

          <title>
            {generalTitlePrefix && generalTitlePrefix + " | "}
            {pageTitle && pageTitle}
            {generalTitleSufix && " | " + generalTitleSufix}
          </title>

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
          {themeSwitcher.fontFamilyLink && (
            <>
              <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
              ></link>
              <link
                href={`https://fonts.googleapis.com/css2${themeSwitcher.fontFamilyLink}`}
                rel="stylesheet"
              ></link>
            </>
          )}
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="icon" type="image/png" href={imgFavicon} />
        </Head>

        {!pageData && <div>Loading...</div>}

        {pageData && pageData.error && (
          <div
            className="content-section border-bottom pt-11 pb-7 pt-lg-30 pb-lg-28 bg-default-6"
            id="notfound"
          >
            <Container>
              <Row className="justify-content-center notfound">
                <div className="col-xl-6 col-lg-8 col-sm-10">
                  <div className="section-title text-center mt-12 mt-lg-20 mb-12 mb-lg-23">
                    <div className="notfound-404"></div>
                    <div></div>
                    <h1 className="title mb-6">500</h1>
                    <h2>Oops! Server Not Connected</h2>
                    <p className="gr-text-8 px-lg-7 px-xl-0">
                      Error: Not able to connect your TYPO3 CMS!
                    </p>
                    <a
                      href="https://docs.t3terminal.com/en/latest/"
                      target="_blank"
                    >
                      Get Help From Documentation
                    </a>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        )}

        {pageData && (
          <main>
            <ContentType pageContentProps={pageData} />
          </main>
        )}

        {pageData && <Footer pageData={pageData} />}
      </PageWrapper>
    </>
  );
};

export const getStaticPaths = async (context) => {
  const paths = await Routes();
  paths.map((path) => console.log(path, "path"));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const paramSlug = context.params.slug;
  var newsData = await getAPIData("news/detail/" + paramSlug);

  if (!newsData.error) {
    var pageData = newsData;
  } else {
    var slug;
    if (paramSlug && paramSlug.length > 1) {
      slug = paramSlug.toString().replace(",", "/");
    } else if (paramSlug) {
      slug = paramSlug[0];
    }
    var pageData = await getAPIData(slug ? slug : "");
  }

  const menuItems = await getAPIData("?type=834");

  return {
    props: { pageData, menuItems: menuItems },
    revalidate: 1,
  };
};

export default Page;
