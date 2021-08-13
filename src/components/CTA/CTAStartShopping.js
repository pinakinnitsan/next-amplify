import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Banner = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const CTAStartShopping = ({ data }) => {
  const bgImage =
    data.image && data.image.length
      ? `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${data.image[0]}`
      : "";

  return (
    <>
      <Banner
        className="pt-13 pt-md-35 pb-13 pb-md-35 bg-image mx-md-6 rounded-10 "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs="10" sm="10" md="9" lg="8" xl="7">
              <div className="text-center dark-mode-texts">
                {data.headline && (
                  <h2 className="gr-text-2 font-weight-bold pb-8 pb-md-12">
                    {data.headline}
                  </h2>
                )}
                {data.link && data.buttontext && (
                  <Link href={`${data.link}`}>
                    <a className="btn btn-green gr-hover-y">
                      {data.buttontext}
                    </a>
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Banner>
    </>
  );
};

export default CTAStartShopping;
