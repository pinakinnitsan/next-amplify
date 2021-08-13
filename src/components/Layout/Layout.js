import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";
import Header from "../Header";
import ModalVideo from "../ModalVideo";
import GlobalContext from "../../context/GlobalContext";
import GlobalStyle from "../../utils/globalStyle";
import { get, merge } from "lodash";
import { theme as baseTheme } from "../../utils";
import ThemeSwitcher from "../ThemeSwitcher";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const SiteWrapper = styled.div`
  transition: all 0.5s;
  .site-inner {
    transition: all 0.5s;
  }
  &.boxed {
    background-color: #93939b;
    overflow-x: hidden;
    .site-inner {
      background-color: #fcfdfe;
      @media (min-width: 1240px) {
        margin: 0 4%;
        overflow-x: hidden;
      }
      @media (min-width: 1400px) {
        margin: 0 10%;
      }
      @media (min-width: 1920px) {
        margin: 0 15%;
      }
    }
    header {
      @media (min-width: 1240px) {
        margin: 0 auto;
        width: 92%;
      }
      @media (min-width: 1400px) {
        width: 80%;
      }
      @media (min-width: 1920px) {
        width: 70%;
      }
    }
  }
`;

const CookieConsentBox = styled(CookieConsent)`
  background-color: var(--primary);
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext, pageData }) => {
  const gContext = useContext(GlobalContext);
  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider>
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {children}
          </div>
          <ModalVideo />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <SiteWrapper
            className={`site-wrapper overflow-hidden${
              gContext.themeSwitcher.layout === baseTheme.layouts.boxed
                ? " boxed"
                : ""
            }`}
            ref={eleRef}
          >
            <div className="site-inner">
              <Header isDark={gContext.headerDark} />
              {children}
              <ModalVideo />
              {pageData && pageData.data && (
                <ThemeSwitcher pageData={pageData} />
              )}
            </div>
          </SiteWrapper>
          {gContext.cookie && gContext.cookie.message && (
            <CookieConsentBox
              location="bottom"
              buttonText={gContext.cookie ? gContext.cookie.dismiss : ""}
              enableDeclineButton
              declineButtonText={gContext.cookie ? gContext.cookie.deny : ""}
              style={{
                background:
                  pageData && pageData.data
                    ? pageData.data.page.constants.ns_style.primaryColor.value
                    : "#473bf0",
              }}
            >
              {gContext.cookie && (
                <p className="mb-0 text-white">
                  {gContext.cookie.message}
                  {gContext.cookie && (
                    <Link href="/">
                      <a className="mb-0 ml-5 text-white text-decoration-underline">
                        {gContext.cookie.link}
                      </a>
                    </Link>
                  )}
                </p>
              )}
            </CookieConsentBox>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
