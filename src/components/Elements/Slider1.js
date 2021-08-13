import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";

const Slider1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-section pt-14 pt-lg-20 pb-7 pb-lg-11">
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=80"
            )`,
            }}
          >
            <div className="carousel-item-inner d-flex justify-content-center align-items-center"></div>
            {/* <img
              className="d-block w-100"
              // src="/image/l3/jpg/l3-service-img1.jpg"
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1049&q=80"
              alt="First slide"
            /> */}
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: `url(
              "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?auto=format&fit=crop&w=1052&q=80"
            )`,
            }}
          >
            <div className="carousel-item-inner d-flex justify-content-center align-items-center"></div>
            {/* <img
              className="d-block w-100"
              // src="/image/l3/jpg/l3-service-img2.jpg"
              src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?auto=format&fit=crop&w=1052&q=80"
              alt="Second slide"
            /> */}
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              // src="/image/l3/jpg/l3-service-img3.jpg"
              src=""
              alt="Third slide"
            />
          </Carousel.Item> */}
        </Carousel>
        <div className="content-section pt-12 pb-5">
          <div className="section-title mb-13">
            <h2 className="title gr-text-4">Carousel Slider Medium</h2>
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
        </div>
      </Container>
    </div>
  );
};

export default Slider1;
