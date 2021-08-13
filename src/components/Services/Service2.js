import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const Service2 = ({ data }) => {
  var backgroundColor = ["green", "blue", "red"];
  return (
    <>
      <div className="service-section bg-default-4 pt-15 pb-13 py-lg-25">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
                <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
                  Our services
                </h4>
                <h2 className="title gr-text-4">
                  We provide great services for{" "}
                  <br className="d-none d-lg-block" /> our customers based on
                  needs
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center position-relative gr-z-index-1">
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="750"
            >
              <div className="service-card border-gray rounded-10 gr-hover-shadow-4 d-flex flex-column text-center dark-mode-texts h-100 overflow-hidden">
                <div
                  className="card-img mb-11 bg-image"
                  style={{
                    backgroundImage:
                      "url('/image/l4/png/l4-content3-img2.png')",
                  }}
                >
                  {/* <img src="/image/l4/png/l4-content3-img2.png" alt="service" /> */}
                </div>
                <div className="px-9 pb-11">
                  <h3 className="card-title text-black gr-text-6 mb-6">
                    Graphic Design
                  </h3>
                  <p className="gr-text-9 text-black mb-11">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <a
                    href="/"
                    className="gr-text-9 bg-green btn-link with-icon text-white mt-auto px-10 py-5 rounded-5"
                  >
                    Learn more{" "}
                    {/* <i className="icon icon-tail-right font-weight-bold"></i> */}
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="service-card border-gray rounded-10 gr-hover-shadow-4 d-flex flex-column text-center dark-mode-texts h-100 overflow-hidden">
                <div
                  className="card-img mb-11 bg-image"
                  style={{
                    backgroundImage:
                      "url('/image/l4/png/l4-content3-img3.png')",
                  }}
                >
                  {/* <img src="/image/l4/png/l4-content3-img3.png" alt="service" /> */}
                </div>
                <div className="px-9 pb-11">
                  <h3 className="card-title text-black gr-text-6 mb-6">
                    Web Development
                  </h3>
                  <p className="gr-text-9 text-black mb-11">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <a
                    href="/"
                    className="gr-text-9 bg-blue btn-link with-icon text-white mt-auto px-10 py-5 rounded-5"
                  >
                    Learn more{" "}
                    {/* <i className="icon icon-tail-right font-weight-bold"></i> */}
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md="6"
              lg="4"
              className="mb-9 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <div className="service-card border-gray rounded-10 gr-hover-shadow-4 d-flex flex-column text-center  dark-mode-texts h-100 overflow-hidden">
                <div
                  className="card-img mb-11 bg-image"
                  style={{
                    backgroundImage:
                      "url('/image/l4/png/l4-content3-img1.png')",
                  }}
                >
                  {/* <img src="/image/l4/png/l4-content3-img1.png" alt="service" /> */}
                </div>
                <div className="px-9 pb-11">
                  <h3 className="card-title text-black gr-text-6 mb-6">
                    Content Writing
                  </h3>
                  <p className="gr-text-9 text-black mb-11">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page.
                  </p>
                  <a
                    href="/"
                    className="gr-text-9 bg-red btn-link with-icon text-white mt-auto px-10 py-5 rounded-5"
                  >
                    Learn more{" "}
                    {/* <i className="icon icon-tail-right font-weight-bold"></i> */}
                  </a>
                </div>
              </div>
              <div
                className="gr-abs-br-custom gr-z-index-n1"
                data-aos="zoom-in-right"
                data-aos-duration="750"
              >
                <img src="/image/l5/png/l5-dot-shape2.png" alt="Dots" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
  // return (
  //   <>
  //     <div className="service-section bg-default-4 pt-15 pt-lg-30 pb-13 pb-lg-30">
  //       <Container>
  //         <Row className="justify-content-center">
  //           <Col md="9" lg="7" xl="6">
  //             <div className="section-title text-center mb-11 mb-lg-19 px-lg-3">
  //               <h4 className="pre-title gr-text-12 text-red text-uppercase mb-7">
  //                 {data["headline"] && (
  //                   <React.Fragment>{data.headline}</React.Fragment>
  //                 )}
  //               </h4>
  //               <h2 className="title gr-text-4">
  //                 {data["subheadline"] && (
  //                   <React.Fragment>{data.subheadline}</React.Fragment>
  //                 )}
  //               </h2>
  //             </div>
  //           </Col>
  //         </Row>
  //         <Row className="justify-content-center position-relative gr-z-index-1">
  //           {data.list && (
  //             <React.Fragment>
  //               {Object.entries(data.list).map((content, key) => (
  //                 <React.Fragment key={key}>
  //                   {(() => {
  //                     let imageURL =
  //                       process.env.NEXT_PUBLIC_API_URL +
  //                       process.env.NEXT_PUBLIC_TYPO3_MEDIA +
  //                       content[1].image;
  //                     let bgColor = backgroundColor[key];
  //                     return (
  //                       <Col
  //                         md="6"
  //                         lg="4"
  //                         className="mb-9 mb-lg-0"
  //                         data-aos="fade-right"
  //                         data-aos-duration="750"
  //                       >
  //                         <div
  //                           className={
  //                             "service-card rounded-10 gr-hover-shadow-4 d-flex flex-column text-center pt-15 px-9 pb-11 dark-mode-texts bg-" +
  //                             bgColor +
  //                             " h-100"
  //                           }
  //                         >
  //                           <div className="card-img mb-11">
  //                             {imageURL && (
  //                               <LazyLoadImage
  //                                 effect="blur"
  //                                 src={imageURL}
  //                                 alt={content[1].headline}
  //                               />
  //                             )}
  //                           </div>
  //                           <h3 className="card-title gr-text-6 mb-6">
  //                             {content[1].headline && (
  //                               <React.Fragment>
  //                                 {content[1].headline}
  //                               </React.Fragment>
  //                             )}
  //                           </h3>
  //                           <p className="gr-text-9 mb-11">
  //                             {content[1].subheadline && (
  //                               <React.Fragment>
  //                                 {content[1].subheadline}
  //                               </React.Fragment>
  //                             )}
  //                           </p>
  //                           {content[1].buttonlink && (
  //                             <Link href={`${content[1].buttonlink}`}>
  //                               <a className="gr-text-9 btn-link with-icon text-white mt-auto">
  //                                 {content[1].buttontext}{" "}
  //                                 <i className="icon icon-tail-right font-weight-bold"></i>
  //                               </a>
  //                             </Link>
  //                           )}
  //                         </div>
  //                         {key != 0 && key % 2 == 0 && (
  //                           <div
  //                             className="gr-abs-br-custom gr-z-index-n1"
  //                             data-aos="zoom-in-right"
  //                             data-aos-duration="750"
  //                           >
  //                             <LazyLoadImage
  //                               src="/image/png/l5-dot-shape2.png"
  //                               alt="Icon"
  //                             />
  //                           </div>
  //                         )}
  //                       </Col>
  //                     );
  //                   })()}
  //                 </React.Fragment>
  //               ))}
  //             </React.Fragment>
  //           )}
  //         </Row>
  //       </Container>
  //     </div>
  //   </>
  // );
};

export default Service2;
