import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TestimonialSolo = ({ data }) => {
  const renderTestimonial = (lists) => {
    return lists.map((list, id) => {
      return (
        <Col
          lg="12"
          xl="11"
          className={`${id + 1 === lists.length ? "" : "mb-10 mb-lg-16"}`}
          key={list.text}
        >
          <div className="review-widget media px-lg-7 flex-column flex-sm-row">
            {list.media && list.media.length ? (
              <>
                <div className="widget-image mr-12 mr-lg-19 mb-9 mb-md-0">
                  <img
                    className="circle-xxxl"
                    src="/image/l5/jpg/l5-testimonial1.jpg"
                    alt="Profile"
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div className="widget-text">
              <img
                className="rating mb-11"
                src="/image/l5/png/5-stars.png"
                alt="Ratings"
              />
              {list.text && (
                <h4 className="review-text gr-text-6 font-weight-bold mb-9">
                  “{list.text}”
                </h4>
              )}
              <div className="reviewer-block d-flex flex-wrap">
                {list.name && (
                  <h5 className="name gr-text-9 mr-7 mb-md-0">{list.name}</h5>
                )}
                {list.designation && (
                  <span className="excerpt gr-text-9 mb-0 gr-text-color-opacity">
                    {list.designation}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="testimonial-section1 pt-9 pt-lg-20 bg-default-4">
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
          <div className="review-wrapper pt-9 pb-lg-25 pb-14 border-bottom">
            <Row className="justify-content-center align-items-center">
              {data.list && Object.values(data.list).length ? (
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default TestimonialSolo;
