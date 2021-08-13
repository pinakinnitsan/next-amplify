import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const TextImage3 = () => {
  return (
    <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
            <div className="content-grid-image-group d-flex  mx-sm-n3">
              <div className="single-image d-flex flex-column px-3 px-sm-6">
                <img
                  src="/image/inner/about-content-1.png"
                  alt="Content"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  className="w-100 pb-6 pb-sm-9 rounded-10"
                />

                <img
                  src="/image/inner/about-content-2.png"
                  alt="Content"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  className="w-100 pb-6 pb-sm-9 rounded-10"
                />
              </div>
              <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                <img
                  src="/image/inner/about-content-3.png"
                  alt="Content"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="400"
                  className="w-100 pb-6 pb-sm-9 rounded-10"
                />

                <img
                  src="/image/inner/about-content-4.png"
                  alt="Content"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay="1200"
                  className="w-100 rounded-10"
                />
              </div>
            </div>
          </Col>
          <Col
            sm="8"
            lg="6"
            xl="5"
            className="offset-lg-1 offset-lg-1 offset-xl-0"
          >
            <div className="content-text">
              <h2 className="gr-text-3 mb-7 mb-lg-11">
                High skilled coders <br className="d-none d-lg-block" /> from
                worldwide.
              </h2>
              <p className="gr-text-8 mb-7 mb-lg-10">
                We share common trends and strategies for improving your rental
                income and making sure you stay in high demand of service.{" "}
              </p>
              <p className="gr-text-8 mb-0">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page. With lots of unique
                blocks, you can easily build a page without coding any other
                page.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImage3;
