import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Masonary = ({ data }) => {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    500: 1,
  };

  const renderCols = (lists) => {
    return lists.map((list, id) => {
      let imageURL = list.media[0].images.defaultImage.publicUrl;
      return (
        <div className="location-card mb-9 gr-hover-shadow-1">
          {imageURL && (
            <Link href={`${list.slug}`}>
              <a className="card-img">
                <LazyLoadImage
                  effect="blur"
                  src={imageURL}
                  alt="Image"
                  className="w-100 rounded-top-10"
                />
              </a>
            </Link>
          )}
          <div className="card-content px-9 py-8 bg-white rounded-bottom-10">
            <Link href={`${list.slug}`}>
              <a>
                <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                  {list.categories[0].title && (
                    <React.Fragment>{list.categories[0].title}</React.Fragment>
                  )}
                </p>
              </a>
            </Link>
            <Link href={`${list.slug}`}>
              <a>
                <h3 className="title text-blackish-blue gr-text-7 mb-0">
                  {list.teaser && (
                    <React.Fragment>{list.teaser}</React.Fragment>
                  )}
                </h3>
              </a>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <Container data-aos="fade-left" data-aos-duration="1000">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column news-wrapper"
      >
        {data.data.list && renderCols(Object.values(data.data.list))}
      </Masonry>
    </Container>
  );
};

export default Masonary;
