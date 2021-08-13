import React, { useState } from "react";
import { Row, Col, Container, Collapse } from "react-bootstrap";

const FAQ = ({ data }) => {
  const [openItem, setOpenItem] = useState(1);
  return (
    <>
      {/* <!-- FAQ/Accordion Area --> */}
      <div className="bg-default-2 pt-15 pt-lg-29 pb-9 pb-lg-22">
        <Container>
          <Row className="justify-content-center">
            <Col xl="8" lg="9">
              <div className="px-md-12 text-center mb-9 mb-lg-18">
                <h2 className="title gr-text-3 mb-9">
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

          <Row className="justify-content-center">
            <Col xl="8" lg="9">
              <div className="accordion" id="accordionExample">
                {data.accordionItem && (
                  <React.Fragment>
                    {Object.entries(data.accordionItem).map((content, key) => (
                      <React.Fragment key={key}>
                        {(() => {
                          return (
                            <Col className="border rounded-10 mb-3 bg-white overflow-hidden">
                              <div className="mb-0 py-8 pl-9 pr-7 border-bottom-0 bg-white">
                                <button
                                  className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue p-0 accordion-trigger arrow-icon w-100"
                                  type="button"
                                  aria-controls="collapse-1"
                                  onClick={() => setOpenItem(key)}
                                  aria-expanded={openItem === key}
                                >
                                  <span>
                                    {content[1].title && (
                                      <React.Fragment>
                                        {content[1].title}
                                      </React.Fragment>
                                    )}
                                  </span>
                                </button>
                              </div>
                              <Collapse in={openItem === key}>
                                <div>
                                  <div className="card-body gr-color-blackish-blue-opacity-7 pt-0 pl-9 pr-15 gr-text-9 pb-9">
                                  {content[1].content && (
                                    <React.Fragment>
                                      {content[1].content}
                                    </React.Fragment>
                                  )}
                                  </div>
                                </div>
                              </Collapse>
                            </Col>
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

export default FAQ;
