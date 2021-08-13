import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TestimonialLists = ({ data }) => {
  const renderTestimonial = (lists) => {
    return lists.map((list, id) => {
      return (
        <Col
          xs="10"
          lg="8"
          className="mb-7"
          data-aos="fade-right"
          data-aos-duration="800"
          key={list.text}
        >
          <div className="testimonial-card d-flex flex-column flex-md-row align-items-md-center border rounded-12 bg-white pt-9 pb-8 px-9 gr-hover-opacity-full">
            <div className="card-image rounded-circle mr-9 mb-7 mb-md-0">
              <img
                className="circle-xxl w-100 o-cover"
                src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.media[0]}`}
                alt="Profile"
              />
            </div>
            <div className="testimonial-content">
              {list.text && (
                <p className="review-text gr-text-7 text-blackish-blue mb-6">
                  “{list.text}”
                </p>
              )}
              {list.name && (
                <span className="name gr-text-9 text-blackish-blue gr-opacity-7 mb-0">
                  {list.name}
                </span>
              )}
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="testimonial-section pt-15 pt-lg-22 pb-15 pb-lg-25 bg-gradient-1">
        <Container>
          <Row className="justify-content-center dark-mode-texts">
            <Col md="8" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-15">
                {data.headline && (
                  <h2 className="title-sm gr-text-5 mb-0 text-white">
                    {data.headline}
                  </h2>
                )}
                {data.subheadline && (
                  <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                    {data.subheadline}
                  </p>
                )}
              </div>
            </Col>
          </Row>
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
                    <a className="btn-link with-icon text-green font-weight-bold">
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

export default TestimonialLists;
