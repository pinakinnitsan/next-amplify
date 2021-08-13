import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GlobalContext from "../context/GlobalContext";
import Masonary from "../components/News/Masonary";
import Grid from "../components/News/Grid";
import GridFullWidth from "../components/News/GridFullWidth";
import NewsList from "../components/News/NewsList";

const News = ({ data, dataHeader }) => {
  if (data.detail) {
    return <NewsDetail data={data} />;
  } else {
    return <NewsListing data={(data, dataHeader)} />;
  }
};

const layouts = {
  0: "masonary",
  1: "list",
  2: "three_column",
  3: "four_column",
  4: "full_width",
  5: "no_margin",
  6: "no_margin_full_width",
};

const NewsDetail = ({ data }) => {
  const imageNews = data.detail.media[0].images.detailViewImage.publicUrl;

  return (
    <>
      <div className="inner-banner pt-15 pt-lg-30 pb-6 pb-lg-8 bg-default-6">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col xl="8" lg="9">
              <div className="px-md-15 text-center">
                <h1 className="title gr-text-2 mb-8 mb-lg-10">
                  {data.detail.title && (
                    <React.Fragment>{data.detail.title}</React.Fragment>
                  )}
                </h1>
                <p className="gr-text-7 mb-8 mb-lg-13">
                  {data.detail.categories[0].title && (
                    <React.Fragment>
                      {data.detail.categories[0].title}
                    </React.Fragment>
                  )}
                </p>
              </div>
              <div
                className="hero-img single-news-hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                {imageNews && (
                  <LazyLoadImage
                    effect="blur"
                    src={imageNews}
                    alt="Image"
                    className="img-fluid w-100 rounded-8"
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main-block single-news-block pb-6 pb-lg-17 bg-default-6">
        <Container>
          <Row className="justify-content-center">
            <Col xl="8" lg="9">
              <div className="single-block mb-12 mb-lg-10">
                <p className="gr-text-6 mb-0 mb-lg-13">
                  {data.detail.teaser && (
                    <React.Fragment>{data.detail.teaser}</React.Fragment>
                  )}
                </p>
                {data.detail.bodytext && (
                  <ReactMarkdown
                    escapeHtml={false}
                    source={data.detail.bodytext}
                    className="ce-bodytext"
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const NewsListing = ({ data }) => {
  const layout = parseInt(data.data.settings.templateLayout);

  const renderLayout = (layoutNum) => {
    switch (layoutNum) {
      case 0:
        return <Masonary data={data} />;
      case 1:
        return <NewsList data={data} />;
      case 2:
      case 3:
      case 5:
        return <Grid data={data} layout={layouts[layoutNum]} />;
      case 4:
      case 6:
        return <GridFullWidth data={data} layout={layouts[layoutNum]} />;
      case 7:
        return <NewsList data={data} />;
      default:
        return <NewsList data={data} />;
    }
  };

  return (
    <>
      <div className="news-section pt-25 pb-8 py-lg-30 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  {data["header"] && (
                    <React.Fragment>{data.header}</React.Fragment>
                  )}
                </h4>
                <h2 className="title gr-text-4">
                  {data["subheader"] && (
                    <React.Fragment>{data.subheader}</React.Fragment>
                  )}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`${layouts[layout]}-layout`}>
          {renderLayout(layout)}
        </div>
      </div>
    </>
  );
};

export default News;
