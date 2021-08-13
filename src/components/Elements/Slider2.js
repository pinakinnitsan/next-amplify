import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";

const slides = [
  {
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=80",
  },
  {
    title: "Second slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=80",
  },
];

const Slider2 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderSlides = (slides) =>
    slides.map((slide, id) => (
      <Carousel.Item
        className={slide.title ? "with-text " : ""}
        style={{
          backgroundImage: `url(
              ${slide.image}
            )`,
        }}
      >
        <div className="carousel-item-inner d-flex justify-content-center align-items-center">
          <Carousel.Caption>
            <h3 className="text-white">{slide.title}</h3>
            <p className="text-white">{slide.description}</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    ));

  return (
    <div className="slider-section">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {renderSlides(slides)}
        {/* <Carousel.Item
          style={{
            backgroundImage: `url(
              ""
            )`,
          }}
        >
          <img
            className="d-block w-100"
            // src="/image/l3/jpg/l3-service-img1.jpg"
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <div className="content-section pt-14 pt-lg-20 pb-7 pb-lg-15">
        <Container>
          <div className="section-title mb-13">
            <h2 className="title gr-text-4">Carousel Slider Full Width</h2>
          </div>
          <p className="gr-text-9">
            T3 Bootstrap has a widget-rich boxed layout, footer section, one
            column, transparent header overlay and default breadcrumb that will
            amaze everyone who visits your web space.
          </p>
          <p className="gr-text-9">
            Minimalistic and clean templates are amongst the favorites. They
            provide an easy way to leave focus strictly on the content that’s
            being published, and Stuff takes care of this task very beautifully.
            It’s a great fit for business, personal and other creative projects
            that want to focus solely on the said words, rather than the five
            million widgets popping up all over the place. The template comes
            pre-built with a blog homepage, a page for talking about yourself, a
            sample content post, as well as a page for establishing a contact me
            feature.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Slider2;
