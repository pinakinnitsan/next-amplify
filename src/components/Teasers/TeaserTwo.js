import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const CustomLink = styled.div`
  a {
    min-width: 1px !important;
  }
`;

const TeaserTwo = ({ data }) => {
  const renderCols = (lists) => {
    if (!lists.length) {
      return <>No Data Found!</>;
    }
    return lists.map((list, id) => (
      <Col key={list.headline} lg="4" md="6" className="mb-8 mb-md-13 mb-lg-0">
        <div
          className="feature-widget media"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="widget-icon mr-8">
            {list.image && list.image.length ? (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.image[0]}`}
                alt="service"
              />
            ) : (
              ""
            )}
          </div>
          <div className="widget-texts">
            {list.headline && (
              <h3 className="title gr-text-7 font-weight-bold mb-6">
                {list.headline}
              </h3>
            )}
            {list.subheadline && (
              <p className="gr-text-9 mb-0">{list.subheadline}</p>
            )}
            {list.buttonlink && list.buttontext && (
              <CustomLink>
                <Link href={`${list.buttonlink}`}>
                  <a className="gr-hover-y btn btn-primary mt-8 py-4">
                    {list.buttontext}
                  </a>
                </Link>
              </CustomLink>
            )}
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <>
      <div className="feature-section border-top bg-default-2 pt-15 pt-lg-22 pb-9 pb-md-0 pb-lg-17">
        <Container>
          <Row className="justify-content-center">
            {data.list && renderCols(Object.values(data.list))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TeaserTwo;
