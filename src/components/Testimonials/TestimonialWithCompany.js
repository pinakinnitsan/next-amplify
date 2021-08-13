import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TestimonialWithCompany = ({ data }) => {
  const renderTestimonial = (lists) => {
    return lists.map((list, id) => {
      return (
        <Col lg="4" md="6" sm="9" className="mb-16">
          <div className="single-testimonial text-center h-100 d-flex flex-column px-5">
            {list.file2 && list.file2.length ? (
              <div className="brand-logo mb-9 mb-lg-13">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.file2[0]}`}
                  alt="Brand"
                />
              </div>
            ) : (
              ""
            )}
            {list.text && (
              <p className="review-text mb-0 gr-text-6 font-weight-bold gr-text-color">
                “{list.text}”
              </p>
            )}
            <div className="user-block media pt-9 pt-lg-12 d-flex justify-content-center mt-auto">
              {list.media && list.media.length ? (
                <div className="user-image circle-md mr-7 circle-md overflow-hidden">
                  <img
                    className="w-100"
                    src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${list.media[0]}`}
                    alt="User"
                  />
                </div>
              ) : (
                ""
              )}
              <div className="user-text text-left align-self-center">
                {list.name && (
                  <h4 className="user-title gr-text-9 mb-0">{list.name}</h4>
                )}
                {list.designation && (
                  <span className="user-rank gr-text-11 gr-text-color-opacity">
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
      <div className="testimonial-section pt-15 pt-lg-24 pb-lg-12 bg-default-1">
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

export default TestimonialWithCompany;
