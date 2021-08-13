import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TeaserOne = ({ data }) => {
  var backgroundColor = ["green", "blue", "red"];

  const renderCols = (lists) => {
    if (!lists.length) {
      return <>No Data Found!</>;
    }
    return lists.map((list, id) => {
      let imageURL = list
        ? process.env.NEXT_PUBLIC_API_URL +
          process.env.NEXT_PUBLIC_TYPO3_MEDIA +
          list.image
        : "";
      let bgColor = backgroundColor[id];
      return (
        <Col
          key={list.headline}
          md="6"
          lg="4"
          className="mb-9 mb-lg-0"
          data-aos="fade-right"
          data-aos-duration="750"
        >
          <div
            className={
              "service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-" +
              bgColor +
              " h-100"
            }
          >
            <div className="card-img mb-11">
              {imageURL && (
                <LazyLoadImage
                  effect="blur"
                  src={imageURL}
                  alt={list.headline}
                />
              )}
            </div>
            {list.headline && (
              <h3 className="card-title gr-text-6 mb-6">{list.headline}</h3>
            )}
            {list.subheadline && (
              <p className="gr-text-9 mb-11">{list.subheadline}</p>
            )}
            {list.buttonlink && (
              <Link href={`${list.buttonlink}`}>
                <a className="gr-text-9 btn-link with-icon text-white mt-auto">
                  {list.buttontext}{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </a>
              </Link>
            )}
          </div>
          {id != 0 && id % 2 == 0 && (
            <div
              className="gr-abs-br-custom gr-z-index-n1"
              data-aos="zoom-in-right"
              data-aos-duration="750"
            >
              <LazyLoadImage src="/image/png/l5-dot-shape2.png" alt="Icon" />
            </div>
          )}
        </Col>
      );
    });
  };

  return (
    <>
      <div className="service-section bg-default-4 pt-15 pt-lg-30 pb-13 pb-lg-30">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                {data.headline && (
                  <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                    {data.headline}{" "}
                  </h4>
                )}
                {data.subheadline && (
                  <h2 className="title gr-text-4">{data.subheadline} </h2>
                )}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            {data.list && renderCols(Object.values(data.list))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TeaserOne;
