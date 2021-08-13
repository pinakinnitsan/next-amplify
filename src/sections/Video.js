import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Video = ({ data }) => {
  const gContext = useContext(GlobalContext);
  let image =
    process.env.NEXT_PUBLIC_API_URL +
    process.env.NEXT_PUBLIC_TYPO3_MEDIA +
    data["image"];
  return (
    <>
      {/* <!-- Video Area --> */}
      <LazyLoadComponent>
        <div
          className="video-section bg-image bg-overlay overlay-1 py-23 py-lg-31 dark-mode-texts "
          css={`
            background-image: url(${image});
          `}
        >
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col xl="6" lg="8" md="10">
                <div className="text-center video-content">
                  <a
                    href="/#"
                    className="video-play-icon mx-auto circle-md bg-white mb-9 gr-hover-y focus-reset"
                    tabIndex="-1"
                    onClick={(e) => {
                      e.preventDefault();
                      gContext.toggleVideoModal();
                      gContext.setVideoModalURL(`${data.video}`);
                    }}
                  >
                    <i className="icon icon-triangle-right-17-2"></i>
                  </a>
                  <div className="section-title">
                    <h2 className="title gr-text-4 mb-5">
                      {data["headline"] && (
                        <React.Fragment>{data.headline}</React.Fragment>
                      )}
                    </h2>
                    <p className="gr-text-8 mb-0 px-lg-7 px-xl-0">
                      {data["text"] && (
                        <React.Fragment>{data.text}</React.Fragment>
                      )}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </LazyLoadComponent>
    </>
  );
};
export default Video;
