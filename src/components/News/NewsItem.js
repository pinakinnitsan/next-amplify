import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsItem = ({ data, layout }) => {
  let imageURL =
    data.media && data.media.length
      ? data.media[0].images.defaultImage.publicUrl
      : "";

  return (
    <div
      className={`location-card  gr-hover-shadow-1 ${
        layout === "no_margin" || layout === "no_margin_full_width"
          ? ""
          : "mb-9"
      }`}
    >
      {imageURL && (
        <Link href={`${data.slug}`}>
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
        <Link href={`${data.slug}`}>
          <a>
            {data.categories[0].title && (
              <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                {data.categories[0].title}
              </p>
            )}
          </a>
        </Link>
        <Link href={`${data.slug}`}>
          <a>
            {data.teaser && (
              <h3 className="title text-blackish-blue gr-text-7 mb-0">
                {data.teaser}
              </h3>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
