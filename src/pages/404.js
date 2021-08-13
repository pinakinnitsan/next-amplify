import React, { useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";
import getAPIData from "../utils/API";

const Custom404 = ({ pageData, menuItems }) => {
  const { setMenuItems } = useContext(GlobalContext);

  useEffect(() => {
    setMenuItems(menuItems);
  }, []);

  let imgURL = "";

  if (pageData && pageData.data && pageData.data.content) {
    imgURL =
      pageData.data.content.colPos0[0].content.gallery.rows["1"].columns["1"]
        .publicUrl;
  }

  return (
    <React.Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>404: This page could not be found</title>
        <meta name="theme-color" content="#2012e6" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div
        className="content-section border-bottom pt-11 pb-7 pt-lg-30 pb-lg-20 bg-default-6 lg:min-h-vh-100 align-items-center d-flex"
        id="notfound"
      >
        <Container>
          <Row className="justify-content-center notfound">
            <div className="col-xl-6 col-lg-8 col-sm-10">
              <div className="section-title text-center mb-12 mb-lg-23">
                <div className="notfound-404 img-in mb-10">
                  <img src={`${imgURL}`} alt="Not found" />
                </div>
                <h2>Oops! Page not found</h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  Sorry, the page you were looking for does not exist, has been
                  removed, the name has been changed, or is temporarily
                  unavailable.
                </p>
                <Link href="/">Back to the home page</Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export const getStaticProps = async (context) => {
  const menuItems = await getAPIData("?type=834");
  const pageData = await getAPIData("404");

  return {
    props: { pageData, menuItems: menuItems },
  };
};

export default Custom404;
