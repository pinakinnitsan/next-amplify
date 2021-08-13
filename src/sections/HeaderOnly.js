import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const HeaderOnly = ({ data }) => {
  let textAlign = data.headerPosition;
  return (
    <>
      {/* <!-- Header & Subheader Area --> */}
      <div className="main-block">
        <Container>
          <Row>
            <Col lg="10" xl="8">
              <div className="px-lg-8 px-xl-3">
                <div className={"pt-25 single-block text-" + textAlign}>
                  <h2 className="gr-text-3 mb-7 mb-lg-8">
                    {data["header"] && (
                      <React.Fragment>{data.header}</React.Fragment>
                    )}
                  </h2>
                  <p className="gr-text-8 mb-0">
                    {data["subheader"] && (
                      <React.Fragment>{data.subheader}</React.Fragment>
                    )}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeaderOnly;
