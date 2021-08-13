import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const FactDetailed = ({ data }) => {
  const renderStats = (lists) => {
    let aosDuration = 500;
    return lists.map((list, id) => {
      aosDuration += 500;
      return (
        <div
          className="single-stat py-6"
          data-aos="fade-left"
          data-aos-duration={`${aosDuration}`}
          key={list.headline}
        >
          <h3 className="title gr-text-5 mb-5">
            <LazyLoadComponent>
              <span className="counter">
                <CountUp duration={list.countduraction} end={list.countend} />
              </span>
              {list.postfix}
            </LazyLoadComponent>
          </h3>
          <p className="gr-text-8 mb-0">{list.headline}</p>
        </div>
      );
    });
  };

  return (
    <>
      <div className="content-section pt-12 pb-10 bg-default-6 py-xl-25 ">
        <Container>
          <Row className="align-items-center justify-content-md-center">
            <Col lg="4" md="10">
              <div className="content-text text-center text-lg-left mb-9 mb-lg-0 pr-xl-11">
                {data.headline && (
                  <h2 className="title gr-text-5 mb-8">{data.headline}</h2>
                )}
                {data.text && <p className="gr-text-8 mb-9">{data.text}</p>}
                {data.buttontext && data.link && (
                  <Link href={`${data.link}`}>
                    <a className="btn bg-primary text-white gr-hover-y">
                      {data.buttontext}
                    </a>
                  </Link>
                )}
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="content-img rounded-8">
                {data.image && data.image.length ? (
                  <img
                    className="w-100 rounded-8"
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      process.env.NEXT_PUBLIC_TYPO3_MEDIA +
                      data.image
                    }
                    alt="Content"
                  />
                ) : (
                  ""
                )}
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="stats-wrapper mt-6 mt-md-0 pl-xl-9">
                {data.list && Object.values(data.list).length
                  ? renderStats(Object.values(data.list))
                  : ""}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FactDetailed;
