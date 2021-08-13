import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ data }) => {
  const publicUrl = data.gallery.rows["1"].columns["1"].publicUrl;

  return (
    <>
      <div className="inner-banner">
        <Container>
          <Row className="mt-md-6 pt-20">
            <Col md="12" sm="12">
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
        </Container>
      </div>
    </>
  );
};

export default Image;
