import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = ({ data }) => {
  const renderCols = (row, images) => {
    if (row == "gallery-1") {
      return images.map((image, id) => {
        return (
          <Col lg="6" md="6" sm="6" xs="12" className="mb-8">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${image}`}
              alt="Gallery"
              key={image + row + id}
              className="img-fluid"
            />
          </Col>
        );
      });
    } else if (row === "gallery-2") {
      return images.map((image, id) => {
        return (
          <Col lg="4" md="6" sm="6" xs="12" className="mb-8">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${image}`}
              alt="Gallery"
              key={image + row + id}
              className="img-fluid"
            />
          </Col>
        );
      });
    } else {
      return images.map((image, id) => {
        return (
          <Col lg="3" md="6" sm="6" xs="12" className="mb-8">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${image}`}
              alt="Gallery"
              key={image + row + id}
              className="img-fluid"
            />
          </Col>
        );
      });
    }
  };

  return (
    <SimpleReactLightbox>
      <div className="lightbox-section pt-25 pb-lg-11">
        <Container>
          <SRLWrapper>
            <h2 class="title gr-text-4 mb-9 mb-lg-12">{data.headline}</h2>
            <Row>
              {data.image && data.image.length
                ? renderCols(data.imagePerRow, data.image)
                : ""}
            </Row>
          </SRLWrapper>
        </Container>
      </div>
    </SimpleReactLightbox>
  );
};

export default Gallery;
