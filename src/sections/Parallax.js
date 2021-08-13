import React from "react";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Parallax = ({ data }) => {
  const imgH =
    process.env.NEXT_PUBLIC_API_URL +
    process.env.NEXT_PUBLIC_TYPO3_MEDIA +
    data.image;

  return (
    <>
      {/* <!-- Parallax Area --> */}
      <LazyLoadComponent>
        {imgH && (
          <div className="cta-section parallax-section-750 bg-parallax-image" css={`background-image: url(${imgH});`}>
            <div className="container-fluid pr-0 pl-0"></div>
          </div>
        )}
      </LazyLoadComponent>
    </>
  );
};

export default Parallax;
