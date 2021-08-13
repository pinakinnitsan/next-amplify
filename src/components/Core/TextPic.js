import React from "react";
import ReactMarkdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const TextPic = ({ data }) => {
  const publicUrl = data.gallery.rows["1"].columns["1"].publicUrl;

  const renderImageComponent = (data, gallery) => {
    const { position } = gallery;

    if (
      position.horizontal === "left" &&
      position.vertical === "intext" &&
      position.noWrap
    ) {
      // Beside text with left
      return (
        <div className="mt-md-6 pt-24">
          <Row>
            <Col lg="5" md="6" sm="12" className="mb-10 mb-md-8 mb-lg-0">
              <div className="banner-fluid-image">
                {publicUrl && (
                  <LazyLoadImage
                    effect="blur"
                    src={publicUrl}
                    alt="Image"
                    className="w-100 rounded-8"
                  />
                )}
              </div>
            </Col>
            <Col lg="7" md="6" sm="12" className="mb-6 mb-lg-0">
              {data.header && (
                <h4 className="title gr-text-4 mb-5 mb-lg-8">{data.header}</h4>
              )}
              {data.bodytext && (
                <ReactMarkdown escapeHtml={false} source={data.bodytext} />
              )}
            </Col>
          </Row>
        </div>
      );
    } else if (
      position.horizontal === "right" &&
      position.vertical === "intext" &&
      position.noWrap
    ) {
      // Beside text with right
      return (
        <div className="mt-md-6 pt-24">
          <Row>
            <Col
              lg="7"
              md="6"
              sm="12"
              className="order-md-0 order-1 mb-6 mb-lg-0"
            >
              <div className="pr-8 mb-10">
                {data.header && (
                  <h4 className="title gr-text-4 mb-5 mb-lg-8">
                    {data.header}
                  </h4>
                )}
                {data.bodytext && (
                  <ReactMarkdown escapeHtml={false} source={data.bodytext} />
                )}
              </div>
            </Col>
            <Col lg="5" md="6" sm="12" className="mb-10 mb-md-8 mb-lg-0">
              <div className="banner-fluid-image">
                {publicUrl && (
                  <LazyLoadImage
                    effect="blur"
                    src={publicUrl}
                    alt="Image"
                    className="w-100 rounded-8"
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
      );
    } else if (
      position.horizontal === "left" &&
      position.vertical === "intext" &&
      !position.noWrap
    ) {
      // Nowrap with left image
      return (
        <div className="mt-md-6 pt-24">
          <div className="mr-md-8 mb-10 mb-md-8 float-md-left">
            <div className="banner-fluid-image">
              {publicUrl && (
                <LazyLoadImage
                  effect="blur"
                  src={publicUrl}
                  alt="Image"
                  className="rounded-8"
                />
              )}
            </div>
          </div>
          <div className="pr-8 mb-10">
            {data.header && (
              <h4 className="title gr-text-4 mb-5 mb-lg-8">{data.header}</h4>
            )}
            {data.bodytext && (
              <ReactMarkdown escapeHtml={false} source={data.bodytext} />
            )}
          </div>
        </div>
      );
    } else if (
      position.horizontal === "right" &&
      position.vertical === "intext" &&
      !position.noWrap
    ) {
      // Nowrap with right image
      return (
        <div className="mt-md-6 pt-24">
          <div className="ml-md-8 mb-10 mb-md-8 float-md-right">
            <div className="banner-fluid-image">
              {publicUrl && (
                <LazyLoadImage
                  effect="blur"
                  src={publicUrl}
                  alt="Image"
                  className="rounded-8"
                />
              )}
            </div>
          </div>
          <div className="pr-8 mb-10">
            {data.header && (
              <h4 className="title gr-text-4 mb-5 mb-lg-8">{data.header}</h4>
            )}
            {data.bodytext && (
              <ReactMarkdown escapeHtml={false} source={data.bodytext} />
            )}
          </div>
        </div>
      );
    } else if (position.vertical === "above" && !position.noWrap) {
      // Above image
      const verticalPosition = () => {
        if (position.horizontal === "center") {
          return "justify-content-center";
        } else if (position.horizontal === "left") {
          return "justify-content-start";
        } else {
          return "justify-content-end";
        }
      };
      return (
        <div className="mt-md-6 pt-24">
          <Row>
            <Col lg="12" md="12" sm="12">
              <div
                className={`mb-8 banner-fluid-image d-flex ${verticalPosition()}`}
              >
                {publicUrl && (
                  <img src={publicUrl} alt="Image" className="rounded-8" />
                )}
              </div>
            </Col>
            <Col lg="12" md="12" sm="12">
              <div className="mb-10">
                {data.header && (
                  <h4 className="title gr-text-4 mb-5 mb-lg-8">
                    {data.header}
                  </h4>
                )}
                {data.bodytext && (
                  <ReactMarkdown escapeHtml={false} source={data.bodytext} />
                )}
              </div>
            </Col>
          </Row>
        </div>
      );
    } else if (position.vertical === "below" && !position.noWrap) {
      // Below image
      const verticalPosition = () => {
        if (position.horizontal === "center") {
          return "justify-content-center";
        } else if (position.horizontal === "left") {
          return "justify-content-start";
        } else {
          return "justify-content-end";
        }
      };
      return (
        <div className="mt-md-6 pt-24">
          <Row>
            <Col lg="12" md="12" sm="12">
              <div className="mb-10">
                {data.header && (
                  <h4 className="title gr-text-4 mb-5 mb-lg-8">
                    {data.header}
                  </h4>
                )}
                {data.bodytext && (
                  <ReactMarkdown escapeHtml={false} source={data.bodytext} />
                )}
              </div>
            </Col>
            <Col lg="12" md="12" sm="12">
              <div
                className={`mT-8 banner-fluid-image d-flex ${verticalPosition()}`}
              >
                {publicUrl && (
                  <img src={publicUrl} alt="Image" className="rounded-8" />
                )}
              </div>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <>
          <Row className="mt-md-6 pt-24">
            <Col md="6" sm="12">
              <div className="pr-8 mb-10">
                {data.header && (
                  <h4 className="title gr-text-4 mb-5 mb-lg-8">
                    {data.header}
                  </h4>
                )}
                {data.bodytext && (
                  <ReactMarkdown escapeHtml={false} source={data.bodytext} />
                )}
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="banner-fluid-image">
                {publicUrl && (
                  <LazyLoadImage
                    effect="blur"
                    src={publicUrl}
                    alt="Image"
                    className="rounded-8"
                  />
                )}
              </div>
            </Col>
          </Row>
        </>
      );
    }
  };

  if (!data) return <div className="pt-15 pt-lg-20">No Data Found</div>;

  return (
    <>
      <div className="inner-banner">
        <Container>{renderImageComponent(data, data.gallery)}</Container>
      </div>
    </>
  );
};

export default TextPic;
