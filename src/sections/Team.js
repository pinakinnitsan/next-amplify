import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Team = ({ data }) => {
  return (
    <>
      {/* <!-- Team Area --> */}
      <div className="pt-13 pt-lg-24 pb-lg-24 ">
        <Container>
          <Row className="justify-content-center">
            <Col lg="9" xl="8">
              <div className="section-title text-center px-md-12 mb-lg-17 mb-10">
                <h2 className="gr-text-3 mb-7 mb-lg-8">
                  {data["headline"] && (
                    <React.Fragment>{data.headline}</React.Fragment>
                  )}
                </h2>
                <p className="gr-text-8 mb-0">
                  {data["subheadline"] && (
                    <React.Fragment>{data.subheadline}</React.Fragment>
                  )}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-left mb-lg-n15 mb-0">
            {data.teamitem && (
              <React.Fragment>
                {Object.entries(data.teamitem).map((content, key) => (
                  <React.Fragment key={key}>
                    {(() => {
                      let imageURL =
                        process.env.NEXT_PUBLIC_API_URL +
                        process.env.NEXT_PUBLIC_TYPO3_MEDIA +
                        content[1].image;
                      const isChecked = content[1].check;
                      return isChecked == "1" ? (
                        <Col
                          md="3"
                          xs="6"
                          className="mb-13 d-flex align-items-center"
                        >
                          <div className="mt-xs-n25">
                            <h3 className="gr-text-6">
                              {content[1].name && (
                                <React.Fragment>
                                  {content[1].name}
                                </React.Fragment>
                              )}
                            </h3>
                            {content[1].link && (
                              <Link href={`${content[1].link}`}>
                                <a className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-5">
                                  {content[1].designation && (
                                    <React.Fragment>
                                      {content[1].designation}
                                    </React.Fragment>
                                  )}
                                  <i className="icon icon-tail-right font-weight-bold"></i>
                                </a>
                              </Link>
                            )}
                          </div>
                        </Col>
                      ) : (
                        <Col md="3" xs="6" className="mb-lg-15 mb-13">
                          <div className="team-card">
                            <div className="card-image">
                              {imageURL && (
                                <LazyLoadImage
                                  effect="blur"
                                  src={imageURL}
                                  alt="Image"
                                  className="w-100"
                                />
                              )}
                            </div>
                            <div className="card-text pt-9">
                              <h3 className="gr-text-7 mb-2">
                                {content[1].name && (
                                  <React.Fragment>
                                    {content[1].name}
                                  </React.Fragment>
                                )}
                              </h3>
                              <p className="gr-text-9 mb-0 line-height-1">
                                {content[1].designation && (
                                  <React.Fragment>
                                    {content[1].designation}
                                  </React.Fragment>
                                )}
                              </p>
                            </div>
                          </div>
                        </Col>
                      );
                    })()}
                  </React.Fragment>
                ))}
              </React.Fragment>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
