import React from "react";
import CountUp from "react-countup";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const FactSecondary = ({ data }) => {
  return (
    <>
      <div className="fact-section pt-12 pb-6 pt-lg-19 pb-lg-17 border-bottom border-gray-3 bg-default-6 ">
        <Container>
          <Row className="justify-content-center">
            {data.list && (
              <React.Fragment>
                {Object.entries(data.list).map((content, key) => (
                  <React.Fragment key={key}>
                    {(() => {
                      let countduraction = parseInt(content[1].countduraction);
                      let countend = parseInt(content[1].countend);
                      return (
                        <Col lg="4" md="6" sm="6" className="mb-9 mb-lg-0">
                          <div className="single-fact d-flex px-md-5 px-lg-2 px-xl-9">
                            <h3 className="gr-text-3 mr-9">
                              <LazyLoadComponent>
                                <span className="counter">
                                  <CountUp
                                    duration={countduraction}
                                    end={countend}
                                  />
                                </span>
                                {content[1].postfix}
                              </LazyLoadComponent>
                            </h3>
                            <p className="gr-text-9 mb-0">
                              {content[1].headline && (
                                <React.Fragment>
                                  {content[1].headline}
                                </React.Fragment>
                              )}
                            </p>
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

export default FactSecondary;
