import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Process1 = ({ data }) => {
  var backgroundColor = ["green", "blue", "red"];

  const renderCols = (processes) => {
    if (!processes.length) {
      return <>No Data Found!</>;
    }

    return processes.map((process, id) => {
      let bgColor = backgroundColor[id];
      return (
        <div
          key={process.title}
          className="single-timeline-feature text-center px-6 px-md-9"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <div
            className={
              "count circle-lg bg-" +
              bgColor +
              " gr-text-4 mx-auto mb-12 text-white"
            }
          >
            <span>{id + 1}</span>
          </div>
          <div className="content px-xl-7">
            {process.title && (
              <h3 className="title gr-text-7 mb-6">{process.title}</h3>
            )}
            {process.content && <p className="gr-text-9">{process.content}</p>}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="how-section pt-15 pb-13 pt-lg-24 pb-lg-24 bg-default-4">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mb-11 mb-lg-17">
                {data.headline && (
                  <h2 className="title gr-text-3 mb-7">{data.headline}</h2>
                )}
                {data.text && <p className="px-lg-8 gr-text-8">{data.text}</p>}
              </div>
            </Col>
            <div className="gr-timeline-wrapper gr-flex-all-center">
              {data.process && renderCols(Object.values(data.process))}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Process1;
