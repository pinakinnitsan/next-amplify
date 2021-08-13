import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TeaserThree = ({ data }) => {
  const renderCols = (lists) => {
    if (!lists.length) {
      return <>No Data Found!</>;
    }
    return lists.map((list, id) => {
      let imageURL =
        list.image && list.image.length
          ? process.env.NEXT_PUBLIC_API_URL +
            process.env.NEXT_PUBLIC_TYPO3_MEDIA +
            list.image
          : "";
      return (
        <Col
          lg="6"
          md="10"
          key={list.headline}
          className="mb-11 mb-lg-19"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="feature-widget media">
            <div className="widget-icon p-7 rounded-15 mr-9 gr-bg-blue-opacity-1">
              {imageURL && (
                <LazyLoadImage effect="blur" src={imageURL} alt="Img" />
              )}
            </div>
            <div className="widget-text">
              {list.headline && (
                <h3 className="title gr-text-7 mb-6">{list.headline}</h3>
              )}
              {list.subheadline && (
                <p className="gr-text-9 mb-0 pr-11">{list.subheadline}</p>
              )}
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="feature-section pt-14 pt-lg-25 pb-7 pb-lg-11 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="8">
              <div className="section-title text-center mb-13 mb-lg-23">
                {data["headline"] && (
                  <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                    {data.headline}
                  </h4>
                )}
                {data["subheadline"] && (
                  <h2 className="title gr-text-4">{data.subheadline}</h2>
                )}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="10">
              <Row className="align-items-center justify-content-center">
                {data.list && renderCols(Object.values(data.list))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TeaserThree;
