import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Brand = ({ data }) => {
  return (
    <>
      {/* <!-- Brand Area --> */}
      <div className="brand-section pt-11 pb-9 pt-lg-24 pb-lg-23 bg-default-7">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md="10" lg="9" xl="8">
              <div className="section-title text-center mb-7 mb-lg-11">
                <h2 className="title gr-text-4 mb-9">
                  {data["headline"] && (
                    <React.Fragment>{data.headline}</React.Fragment>
                  )}
                </h2>
                <p className="gr-text-8 px-lg-8 mb-0">
                  {data["text"] && <React.Fragment>{data.text}</React.Fragment>}
                </p>
              </div>
            </Col>
            <Col xs="12" md="11" lg="10" xl="9">
              <div className="brand-logos d-flex justify-content-center align-items-center mx-n9 flex-wrap">
                {data.image && (
                  <React.Fragment>
                    {Object.entries(data.image).map((content, key) => (
                      <React.Fragment key={key}>
                        {(() => {
                          let imageURL =
                            process.env.NEXT_PUBLIC_API_URL +
                            process.env.NEXT_PUBLIC_TYPO3_MEDIA +
                            content[1];
                          return (
                            <div>
                              {imageURL && (
                                <div
                                  className="single-brand mx-9 py-7 gr-opacity-8"
                                  data-aos="zoom-in-right"
                                  data-aos-duration="500"
                                >
                                  <LazyLoadImage
                                    effect="blur"
                                    src={imageURL}
                                    alt="Image"
                                    className="w-100"
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Brand;
