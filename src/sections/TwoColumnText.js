import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";

const TwoColumnText = ({ data }) => {
  return (
    <>
      {/* <!-- TwoColumnText Area --> */}
      <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
        <Container>
          <Row>
            <Col lg="6" className="mb-7 mb-lg-0">
              <div className="pr-xl-13">
                {data.lefttext && (
                  <ReactMarkdown
                    escapeHtml={false}
                    source={data.lefttext}
                    className="rte-block"
                  />
                )}
              </div>
            </Col>
            <Col lg="6">
              <div className="pr-xl-13">
                {data.righttext && (
                  <ReactMarkdown
                    escapeHtml={false}
                    source={data.righttext}
                    className="rte-block"
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

export default TwoColumnText;
