import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TestimonialGrid = ({ data }) => {
  const renderTestimonial = (lists) => {
    return lists.map((list, id) => {
      return (
        <Col lg="4" md="6" className="mb-9" ke>
          <div className="card rounded-10 border p-9 h-100">
            <div className="customer-img circle-sm-2 mb-9 mb-lg-14 circle-md overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.media[0]}`}
                alt="User"
                className="o-cover w-100"
              />
            </div>
            {list.text && (
              <p className="review-text gr-text-7 text-blackish-blue mb-7 mb-lg-8">
                “{list.text}”
              </p>
            )}
            <div className="customer-identity d-md-flex align-items-center mt-auto">
              {list.name && (
                <h3 className="name gr-text-9 mb-2 mb-md-0 mr-3 text-blackish-blue">
                  {list.name}
                </h3>
              )}
              {list.designation && (
                <p className="rank gr-text-9 mb-0 gr-color-blackish-blue-opacity-7">
                  {list.designation}
                </p>
              )}
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <div className="testimonial-section pt-lg-21 pb-lg-21 pt-12 pb-8 ">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
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
            </Col>
          </Row>
          <Row className="justify-content-around">
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

export default TestimonialGrid;
