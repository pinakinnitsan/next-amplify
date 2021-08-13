import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TextImage1 from "../components/TextImages/TextImage1";
import TextImage2 from "../components/TextImages/TextImage2";
import TextImage3 from "../components/TextImages/TextImage3";

const TextImage = ({ type, data }) => {
  switch (type) {
    case 1:
      return <TextImage1 data={data} />;
    case 2:
      return <TextImage2 data={data} />;
    case 3:
      return <TextImage3 data={data} />;
    default:
      return <TextImage1 data={data} />;
  }
  // let imgBanner =
  //   process.env.NEXT_PUBLIC_API_URL +
  //   process.env.NEXT_PUBLIC_TYPO3_MEDIA +
  //   data.image;

  // return (
  //   <>
  //     {/* <!-- TextImage Area --> */}
  //     <div className="inner-banner">
  //       <Container>
  //         <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
  //           <Col lg="9" xl="8">
  //             <div className="px-md-12 text-center mb-11 mb-lg-14">
  //               <h2 className="title gr-text-2 mb-9 mb-lg-12">
  //                 {data["headline"] && (
  //                   <React.Fragment>{data.headline}</React.Fragment>
  //                 )}
  //               </h2>
  //               <p className="gr-text-8 mb-0">
  //                 {data["text"] && <React.Fragment>{data.text}</React.Fragment>}
  //               </p>
  //             </div>
  //           </Col>
  //           <Col xs="12">
  //             <div className="banner-fluid-image pt-lg-9">
  //               {imgBanner && (
  //                 <LazyLoadImage
  //                   effect="blur"
  //                   src={imgBanner}
  //                   alt="Image"
  //                   className="w-100 rounded-8"
  //                 />
  //               )}
  //             </div>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //   </>
  // );
};

export default TextImage;
