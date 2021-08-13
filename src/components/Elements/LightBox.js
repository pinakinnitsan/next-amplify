import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "react-bootstrap";

const LightBox = () => {
  return (
    <SimpleReactLightbox>
      <div className="lightbox-section pt-14 pt-lg-25 pb-7 pb-lg-11">
        <Container>
          <SRLWrapper>
            <Row>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/inner/about-content-1.png "
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/inner/about-content-2.png "
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/inner/about-content-3.png "
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/inner/about-content-4.png "
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/l3/jpg/l3-content-img.jpg"
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
              <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
                <img
                  src="/image/l3/jpg/l3-service-img2.jpg"
                  alt="Gallery"
                  // width="270"
                  // height="220"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </SRLWrapper>
        </Container>
      </div>
    </SimpleReactLightbox>
  );
};

export default LightBox;
