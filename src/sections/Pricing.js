import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

const Pricing = ({ data }) => {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <div className="inner-banner bg-default-2 pt-15 pt-lg-29">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col lg="9" xl="8">
              <div className="px-md-15 text-center mb-5 mb-lg-13">
                <h2 className="title gr-text-2 mb-9 mb-lg-12">
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
        </Container>
      </div>
      <div className="pricing-section bg-default-2 pt-lg-9 pb-5 pb-md-19">
        <Container>
          <Row className="justify-content-center">
            {data.pricetable && (
              <React.Fragment>
                {Object.entries(data.pricetable).map((content, key) => (
                  <React.Fragment key={key}>
                    {(() => {
                      let bgColor = content[1].option;
                      let btnBg = content[1].buttoncolor;
                      const isChecked = content[1].onlytext;
                      return (
                        <Col
                          lg="4"
                          md="6"
                          sm="8"
                          className="col-lg-4 col-md-6 col-sm-8 mb-9"
                        >
                          <div
                            className={
                              "pricing-card gr-hover-shadow-1 text-center pt-9 pb-9 pr-9 pr-xl-9 pl-9 pl-xl-9 bg-" +
                              bgColor +
                              " rounded-10"
                            }
                          >
                            <div className="price-content light-mode-texts">
                              <span className="small-title gr-text-12 text-uppercase text-red font-weight-bold">
                                {content[1].title && (
                                  <React.Fragment>
                                    {content[1].title}
                                  </React.Fragment>
                                )}
                              </span>
                              {isChecked == "1" ? (
                                <div className="d-flex align-items-end justify-content-center mt-9 ">
                                  <span className="per gr-text-9 text-blackish-blue">
                                    {content[1].price && (
                                      <React.Fragment>
                                        {content[1].price}
                                      </React.Fragment>
                                    )}
                                  </span>
                                </div>
                              ) : (
                                <div className="d-flex align-items-end justify-content-center mt-9 ">
                                  <span className="currency mr-2 gr-text-6 text-blackish-blue font-weight-bold line-spacing-none">
                                    {content[1].currency && (
                                      <React.Fragment>
                                        {content[1].currency}
                                      </React.Fragment>
                                    )}
                                  </span>
                                  <h2 className="price-value gr-text-2 text-blackish-blue font-weight-bold line-spacing-none mb-0">
                                    {content[1].price && (
                                      <React.Fragment>
                                        {content[1].price}
                                      </React.Fragment>
                                    )}
                                  </h2>
                                  <span className="per gr-text-9 text-blackish-blue">
                                    {content[1].period && (
                                      <React.Fragment>
                                        {content[1].period}
                                      </React.Fragment>
                                    )}
                                  </span>
                                </div>
                              )}
                              {content[1].content && (
                                <ReactMarkdown
                                  escapeHtml={false}
                                  source={content[1].content}
                                  className="rte-block"
                                />
                              )}
                            </div>
                            {content[1].buttontext && (
                              <Link href={`${content[1].link}`}>
                                <a
                                  variant={btnBg}
                                  className={
                                    "gr-hover-y gr-min-width-219 mx-auto btn btn-dark btn-" +
                                    btnBg
                                  }
                                >
                                  <React.Fragment>
                                    {content[1].buttontext}
                                  </React.Fragment>
                                </a>
                              </Link>
                            )}
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

export default Pricing;
