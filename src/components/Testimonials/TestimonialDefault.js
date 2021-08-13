import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TestimonialDefault = ({ data }) => {
  const renderTestimonial = (lists) => {
    let aosDuration = 700;
    let aosDelay = 0;
    return lists.map((list, id) => {
      aosDuration += 400;
      aosDelay += 500;
      return (
        <Col
          md="6"
          className="mb-13 mb-lg-0"
          data-aos="fade-right"
          data-aos-duration={`${aosDuration}`}
          key={list.text}
          data-aos-delay={`${aosDelay}`}
        >
          <div className="testimonial-card">
            <div className="quote-icon pb-12">
              <img src="/image/png/quote.png" alt="Quote" />
            </div>
            {list.text && (
              <p className="review-text gr-text-6 font-weight-bold gr-text-color pr-xl-11 mb-0">
                “{list.text}”
              </p>
            )}
            <div className="customer-identity d-flex pt-8">
              {list.name && (
                <h3 className="name gr-text-9 font-weight-bold mb-0">
                  {list.name}
                </h3>
              )}
              {list.designation && (
                <p className="rank gr-text-9 pl-5 gr-text-color-opacity mb-0">
                  {list.designation}
                </p>
              )}
            </div>
          </div>
        </Col>
      );
    });
  };

  if (!data) {
    return <>No data found</>;
  }

  return (
    <>
      <div className="testimonial-section pt-9 pt-lg-20 pb-lg-25 bg-default-5">
        <Container>
          <div className="section-title text-center mb-11 mb-lg-14">
            {data.headline && (
              <h2 className="title gr-text-4 mb-6">{data.headline}</h2>
            )}
            {data.subheadline && (
              <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                {data.subheadline}
              </p>
            )}
          </div>
          <Row className="justify-content-center">
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

export default TestimonialDefault;
