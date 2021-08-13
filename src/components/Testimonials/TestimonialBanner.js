import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";

const Overlay = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TestimonialBanner = ({ data }) => {
  const renderTestimonial = (lists) => {
    return lists.map((list, id) => {
      return (
        <Col lg="7" md="9">
          <div className="single-testimonial text-center">
            {list.text && (
              <h3 className="review-text gr-text-5 mb-11">“{list.text}”</h3>
            )}
            <div className="reviewer-img mb-7">
              {list.media && list.media.length ? (
                <img
                  className="circle-lg mx-auto o-cover"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.media[0]}`}
                  alt="Profile"
                />
              ) : (
                ""
              )}
            </div>
            {list.designation && (
              <h3 className="username gr-text-9 mb-1">{list.designation}</h3>
            )}
            {list.name && (
              <span className="rank gr-text-11 gr-text-color-opacity">
                {list.name}
              </span>
            )}
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="testimonial-section2 position-relative bg-blue dark-mode-texts bg-pattern pattern-4  pt-14 pt-lg-26 pb-14 pb-lg-26">
        {data.image && data.image.length ? (
          <Overlay
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${data.image[0]})`,
            }}
          ></Overlay>
        ) : (
          ""
        )}
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-9">
                {data.headline && (
                  <h4 className="pre-title gr-text-12 text-green text-uppercase mb-0">
                    {data.headline}
                  </h4>
                )}
                {data.subheadline && (
                  <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                    {data.subheadline}
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-around">
            {data.list && Object.entries(data.list) ? (
              <>{renderTestimonial(Object.values(data.list))}</>
            ) : (
              ""
            )}
          </Row>
          <Row className="justify-content-center">
            <Col lg="7" className="text-center pt-10">
              <div className="more-btn testimonial-btn">
                {data.link && data.linktext && (
                  <Link href={`${data.link}`}>
                    <a className="btn-link with-icon font-weight-bold">
                      {data.linktext}
                      <i className="icon icon-tail-right font-weight-bold"></i>
                    </a>
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TestimonialBanner;
