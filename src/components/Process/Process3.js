import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";

const Process3 = ({ data }) => {
  const gContext = useContext(GlobalContext);

  let imageURL =
    process.env.NEXT_PUBLIC_API_URL +
    process.env.NEXT_PUBLIC_TYPO3_MEDIA +
    data["image"];
  return (
    <>
      <div className="content-section2 pt-12 pb-9 pt-lg-21 pb-lg-25 bg-default-2">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" sm="10">
              <div className="section-title text-center mb-12 mb-lg-17">
                {data["headline"] && (
                  <h2 className="title gr-text-4 mb-7">{data.headline} </h2>
                )}
                {data["subheadline"] && (
                  <p className="gr-text-8 px-lg-7 px-xl-0">
                    {data.subheadline}
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
              {data["image"] && (
                <div className="content-video-thumb rounded-8 gr-hover-shadow-2">
                  <LazyLoadImage
                    effect="blur"
                    src={imageURL}
                    alt="Image"
                    className="w-100 rounded-8"
                  />
                  {data.video && (
                    <a
                      className="video-play-trigger circle-xl bg-white gr-abs-center gr-abs-hover-y focus-reset"
                      tabIndex="-1"
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        gContext.toggleVideoModal();
                        gContext.setVideoModalURL(`${data.video}`);
                      }}
                    >
                      <i className="icon icon-triangle-right-17-2 text-green"></i>
                    </a>
                  )}
                </div>
              )}
            </Col>
            <Col lg="5">
              <div className="content-widget mt-7 mt-lg-0 pl-xl-13">
                <Row className="align-items-center">
                  {data.process && (
                    <React.Fragment>
                      {Object.entries(data.process).map((content, key) => (
                        <React.Fragment key={content[1].headline}>
                          {(() => {
                            return (
                              <Col
                                md="6"
                                lg="12"
                                data-aos="fade-left"
                                data-aos-duration="750"
                              >
                                <div className="single-widget my-7 media">
                                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                                    <span className="text-primary--light-only gr-text-9">
                                      {key + 1}
                                    </span>
                                  </div>
                                  <div className="media-body">
                                    {content[1].title && (
                                      <h3 className="w-title mb-5 gr-text-7">
                                        {content[1].title}
                                      </h3>
                                    )}
                                    {content[1].content && (
                                      <p className="gr-text-9 mb-0">
                                        {content[1].content}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Col>
                            );
                          })()}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  )}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Process3;
