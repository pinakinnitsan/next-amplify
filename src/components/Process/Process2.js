import { Container, Row, Col } from "react-bootstrap";

const Process2 = ({ data }) => {
  var backgroundColor = ["blue", "red", "green"];

  const renderCols = (processes) => {
    if (!processes.length) {
      return <>No Data Found!</>;
    }
    return processes.map((p, id) => (
      <Col
        lg="4"
        md="6"
        className="mb-11 mb-lg-19 px-xs-6 px-md-6 px-lg-0 px-xl-8"
        data-aos="fade-right"
        data-aos-duration="800"
        key={p.title}
      >
        <div className="feature-widget text-center">
          <div
            className={`widget-icon square-80 rounded-15 mx-auto mb-9 mb-lg-12 bg-${backgroundColor[id]} shadow-blue`}
          >
            {p.media && p.media.length ? (
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${p.media[0]}`}
                alt="Icon"
              />
            ) : (
              ""
            )}
          </div>
          <div className="widget-text">
            {p.title && <h3 className="title gr-text-6 mb-7">{p.title}</h3>}
            {p.content && <p className="gr-text-11 mb-0">{p.content}</p>}
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <>
      <div className="feature-section pt-14 pt-lg-21 pb-7 bg-default-6">
        <Container>
          <Row className="justify-content-center">
            <Col xl="5" lg="6" md="8">
              <div className="section-title text-center mb-13 mb-lg-21">
                {data.headline && (
                  <h2 className="title gr-text-4 mb-6">{data.headline}</h2>
                )}
                {data.text && <p className="gr-text-9 mb-0">{data.text}</p>}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            {data.process && renderCols(Object.values(data.process))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Process2;
