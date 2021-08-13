import React from "react";
import ReactMarkdown from "react-markdown";
import { Row, Col, Container, Button } from "react-bootstrap";
import InputGroup from "../components/Core/InputGroup";

const Contact = ({ data }) => {
  return (
    <>
      <div className="pb-2 pt-15 pt-lg-30 bg-default-2">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col xl="8" lg="9">
              <div className="px-md-15 text-center">
                <h2 className="title gr-text-2 mb-9">
                  {data["headline"] && (
                    <React.Fragment>{data.headline}</React.Fragment>
                  )}
                </h2>
                <p className="gr-text-8 mb-13 mb-lg-22">
                  {data["subheadline"] && (
                    <React.Fragment>{data.subheadline}</React.Fragment>
                  )}
                </p>
              </div>
            </Col>
            <Col xs="12" className="mb-9">
              <Row>
                <Col md="5" lg="4" className="mb-13">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      {data["callicon"] && <i className={data.callicon}></i>}
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">
                        {data["callheadline"] && (
                          <React.Fragment>{data.callheadline}</React.Fragment>
                        )}
                      </h3>
                      <p className="gr-text-7 mb-0">
                        {data["phone1"] && (
                          <React.Fragment>{data.phone1}</React.Fragment>
                        )}{" "}
                        <br />
                        {data["phone2"] && (
                          <React.Fragment>{data.phone2}</React.Fragment>
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="5" lg="4" className="mb-13">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      {data["emailicon"] && <i className={data.emailicon}></i>}
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">
                        {data["emailheadline"] && (
                          <React.Fragment>{data.emailheadline}</React.Fragment>
                        )}
                      </h3>
                      <p className="gr-text-7 mb-0">
                        {data["email1"] && (
                          <React.Fragment>{data.email1}</React.Fragment>
                        )}
                        <br />
                        {data["email2"] && (
                          <React.Fragment>{data.email2}</React.Fragment>
                        )}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="5" lg="4" className="mb-13">
                  <div className="single-contact-widget d-flex">
                    <div className="widget-icon circle-sm-2 bg-white gr-text-6 text-primary mr-7">
                      {data["addressicon"] && (
                        <i className={data.addressicon}></i>
                      )}
                    </div>
                    <div className="widget-text">
                      <h3 className="gr-text-6 mb-5">
                        {data["addressheadline"] && (
                          <React.Fragment>
                            {data.addressheadline}
                          </React.Fragment>
                        )}
                      </h3>
                      {data["addresscontent"] && (
                        <ReactMarkdown
                          escapeHtml={false}
                          source={data.addresscontent}
                          className="ce-bodytext address-text gr-text-7 mb-0"
                        />
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
