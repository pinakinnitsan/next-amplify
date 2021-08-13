import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";

const SliderContained = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderSlides = (slides) => {
    return slides.map((slide, id) => {
      return (
        <Carousel.Item
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${slide.image[0]})`,
          }}
        >
          <div className="carousel-item-inner d-flex justify-content-center align-items-center"></div>
        </Carousel.Item>
      );
    });
  };

  return (
    <div className="slider-section pt-14 pt-lg-20 pb-7 pb-lg-11">
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {data.pi_flexform_content.slides &&
          Object.values(data.pi_flexform_content.slides).length ? (
            renderSlides(Object.values(data.pi_flexform_content.slides))
          ) : (
            <>No slides found</>
          )}
        </Carousel>
        {(data.headline || data.text) && (
          <div className="content-section pt-14 pt-lg-20 pb-7 pb-lg-15">
            <Container>
              <div className="section-title mb-13">
                {data.headline && (
                  <h2 className="title gr-text-4">{data.headline}</h2>
                )}
                {data.text && (
                  <ReactMarkdown escapeHtml={false} source={data.text} />
                )}
              </div>
            </Container>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SliderContained;
