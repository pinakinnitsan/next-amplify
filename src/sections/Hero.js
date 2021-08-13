import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Hero = ({ data }) => {
  return (
    <>
      <div className="hero-section position-relative bg-default-2 bg-pattern pattern-2 pt-24 pt-lg-32 pb-15 pb-lg-27">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs="12" md="9" lg="6" className="align-self-sm-end order-lg-2">
              <div className="hero-img position-relative" data-aos="fade-left">
                {data.image && (
                  <img
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      process.env.NEXT_PUBLIC_TYPO3_MEDIA +
                      data.image
                    }
                    alt="Hero_Image"
                    className="w-100"
                  />
                )}
              </div>
            </Col>
            <Col
              md="10"
              lg="6"
              className="order-lg-1"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="hero-content mt-11 mt-lg-0">
                <h1 className="title gr-text-2 mb-8">
                  {data["headline"] && (
                    <React.Fragment>{data.headline}</React.Fragment>
                  )}
                </h1>
                <p className="gr-text-8 mb-11 pr-md-12">
                  {data["text"] && <React.Fragment>{data.text}</React.Fragment>}
                </p>
                {data["buttontext"] && (
                  <div className="hero-btn mt-10">
                    <Link href={`${data.buttonlink}`}>
                      <a className="btn bg-primary text-white with-icon gr-hover-y">
                        <React.Fragment>{data.buttontext}</React.Fragment>
                        <i className="icon icon-tail-right font-weight-bold"></i>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container></Container>
    </>
  );
};

export default Hero;
