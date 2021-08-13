import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { cta } from "../../utils/constants";

const CTADefault = ({ data }) => {
  if (!data) {
    return <>No Data Found!</>;
  }

  return (
    <>
      <div className={`cta-section ${data.style}`}>
        <Container>
          <div className="cta-wrapper pt-14 pb-14 py-lg-19 border-bottom">
            <Row className="align-items-center justify-content-center">
              <Col lg="6" md="10">
                <div className="cta-text section-title">
                  <h2
                    className={`title gr-text-5 mb-7 ${
                      data.style === cta.defaultDark ? "text-white" : ""
                    }`}
                  >
                    {data["headline"] && (
                      <React.Fragment>{data.headline}</React.Fragment>
                    )}
                  </h2>
                  <p
                    className={`gr-text-8 mb-8 mb-lg-0 ${
                      data.style === cta.defaultDark
                        ? "gr-color-white-opacity-7"
                        : ""
                    }`}
                  >
                    {data["text"] && (
                      <React.Fragment>{data.text}</React.Fragment>
                    )}
                  </p>
                </div>
              </Col>
              <Col lg="4" md="10" className="offset-lg-2">
                {data.link && data.buttontext && (
                  <div
                    className="cta-btn text-lg-right"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="250"
                  >
                    <Link href={`${data.link}`}>
                      <a className="gr-hover-y btn btn-primary">
                        {data["buttontext"] && (
                          <React.Fragment>{data.buttontext}</React.Fragment>
                        )}
                      </a>
                    </Link>
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CTADefault;
