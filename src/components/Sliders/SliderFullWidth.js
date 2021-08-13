import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container, Carousel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const SlideHeading = styled.h3`
  font-size: 22px;
  @media (min-width: 992px) {
    font-size: 32px;
  }
  p {
    color: inherit;
    font-size: inherit;
  }
`;

const SlideText = styled.p`
  font-size: 16px;
  @media (min-width: 992px) {
    font-size: 19px;
  }
`;

const SliderFullWidth = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderSlides = (slides) => {
    return slides.map((slide, id) => {
      return (
        <Carousel.Item
          className={`${
            slide.titletext || slide.subText || slide.buttonlabel
              ? "with-text "
              : ""
          } py-12 py-md-20 py-lg-25`}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_TYPO3_MEDIA}${slide.image[0]})`,
          }}
        >
          <div className="carousel-item-inner d-flex justify-content-center align-items-center">
            <Container>
              <Carousel.Caption>
                {slide.titletext && (
                  <SlideHeading className="text-white mb-5 mb-lg-8">
                    <ReactMarkdown
                      escapeHtml={false}
                      source={slide.titletext}
                    />
                  </SlideHeading>
                )}
                {slide.subText && (
                  <SlideText className="text-white">{slide.subText}</SlideText>
                )}
                {slide.buttonlabel && slide.buttonlink && (
                  <Link href={`${slide.buttonlink}`}>
                    <a className="btn bg-primary text-white gr-hover-y mt-5">
                      {slide.buttonlabel}
                    </a>
                  </Link>
                )}
              </Carousel.Caption>
            </Container>
          </div>
        </Carousel.Item>
      );
    });
  };

  return (
    <div className="slider-section">
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
    </div>
  );
};

export default SliderFullWidth;
