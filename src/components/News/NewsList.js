import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GlobalContext from "../../context/GlobalContext";

const NewsList = ({ data }) => {
  const { windowWidth } = useContext(GlobalContext);

  return (
    <Container data-aos="fade-left" data-aos-duration="1000">
      <ul
        className={`news-wrapper news-list-view ${
          windowWidth > 768 ? "list-view" : ""
        }`}
      >
        {data.data.list && (
          <React.Fragment>
            {Object.entries(data.data.list).map((content, key) => (
              <React.Fragment key={key}>
                {(() => {
                  let imageURL =
                    content[1].media[0].images.defaultImage.publicUrl;
                  return (
                    <li>
                      <div className="location-card mb-9 gr-hover-shadow-1">
                        {imageURL && (
                          <Link href={`/news/${content[1].pathSegment}`}>
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
                          <Link href={`/news/${content[1].pathSegment}`}>
                            <a>
                              <p className="gr-text-11 mb-4 d-inline-block gr-color-blackish-blue-opacity-7">
                                {content[1].categories[0].title && (
                                  <React.Fragment>
                                    {content[1].categories[0].title}
                                  </React.Fragment>
                                )}
                              </p>
                            </a>
                          </Link>
                          <Link href={`/news/${content[1].pathSegment}`}>
                            <a>
                              <h3 className="title text-blackish-blue gr-text-7 mb-0">
                                {content[1].teaser && (
                                  <React.Fragment>
                                    {content[1].teaser}
                                  </React.Fragment>
                                )}
                              </h3>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })()}
              </React.Fragment>
            ))}
          </React.Fragment>
        )}
      </ul>
    </Container>
  );
};

export default NewsList;
