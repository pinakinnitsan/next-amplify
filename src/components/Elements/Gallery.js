import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
  return (
    <div className="gallery-section pt-14 pt-lg-25 pb-7 pb-lg-11">
      <Container>
        <div className="section-title text-center mb-13">
          <h2 className="title gr-text-4">Gallery</h2>
        </div>
        <div className="gallery-wrapper">
          <Row>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/about-content-1.png "
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/about-content-2.png "
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/about-content-3.png"
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/about-content-4.png"
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/cart-product-image.png"
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
            <Col lg="3" md="4" sm="6" xs="12" className="mb-8">
              <Link href="/">
                <a className="img-in">
                  <img
                    src="/image/inner/cart-product-image-2.png"
                    alt="Gallery"
                    // width="270"
                    // height="220"
                    className="img-fluid"
                  />
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
