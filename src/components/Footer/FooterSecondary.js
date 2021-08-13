import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo/Logo";

const FooterSecondary = ({ footerData }) => {
  const {
    isDark,
    addressText,
    copyrightText,
    footerLogo,
    emailId,
    phoneNumber,
    otherPhoneNumber,
    twitterLink,
    facebookLink,
    linkedinLink,
    instagramLink,
    youtubeLink,
  } = footerData;

  const linkClassName = isDark
    ? "gr-text-color gr-hover-text-green"
    : "gr-text-color gr-hover-text-blue";

  const iconClassName = isDark
    ? "text-storm gr-hover-text-green"
    : "gr-text-color gr-hover-text-blue";

  return (
    <div
      className={`footer-section ${
        isDark ? "dark-mode-texts bg-blackish-blue" : ""
      }`}
    >
      <Container>
        <div className="footer-top pt-14 pt-lg-20 pb-lg-6">
          <Row className="justify-content-center">
            <Col
              xs="12"
              md="12"
              className="d-lg-flex justify-content-center pr-lg-10"
            >
              <Row className="align-items-center justify-content-center mb-8">
                <Col xs="12" md="12">
                  {footerLogo && (
                    <p className="mb-8 text-center">
                      <Logo white={isDark} className="footer-logo" />
                    </p>
                  )}
                </Col>
                <Col xs="12" md="12">
                  {addressText && (
                    <p className="text-center mb-0 gr-text-11">{addressText}</p>
                  )}
                </Col>
              </Row>
            </Col>
            <Col
              sm="12"
              md="12"
              lg="12"
              className="d-lg-flex justify-content-center pl-lg-10"
            >
              <div className="d-flex single-footer mb-13 mb-lg-9 flex-column flex-md-row flex-wrap justify-content-center">
                {emailId && (
                  <div className="pr-md-4 text-center text-md-left">
                    <a
                      className={`pr-lg-5 gr-text-9 font-weight-bold hover-underline active gr-text-color ${linkClassName}`}
                      href={`mailto:${emailId}`}
                    >
                      {emailId}
                    </a>
                  </div>
                )}
                {phoneNumber && (
                  <div className=" pr-md-4 text-center text-md-left">
                    <a
                      className={`pr-lg-5 gr-text-9 font-weight-bold hover-underline active gr-text-color ${linkClassName}`}
                      href={`tel:${phoneNumber}`}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                )}
                {otherPhoneNumber && (
                  <div className=" text-center text-md-left">
                    <a
                      className={`pr-lg-5 gr-text-9 font-weight-bold hover-underline active gr-text-color ${linkClassName}`}
                      href={`tel:${otherPhoneNumber}`}
                    >
                      {otherPhoneNumber}
                    </a>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
        <div className="copyright-area border-top py-9">
          <Row className="justify-content-center justify-content-lg-between align-items-center">
            <Col lg="6">
              {copyrightText && (
                <p className="copyright-text text-center text-lg-left gr-text-11 mb-6 mb-lg-0 gr-text-color-opacity">
                  <React.Fragment>{copyrightText}</React.Fragment>
                </p>
              )}
            </Col>
            <Col
              lg="6"
              className="d-flex justify-content-center justify-content-lg-end"
            >
              <ul className="social-icons list-unstyled mb-0">
                {twitterLink && (
                  <li className="mr-5">
                    <a
                      href={`${twitterLink}`}
                      className={`gr-text-color ${iconClassName}`}
                      target="_blank"
                    >
                      <i className="icon icon-logo-twitter"></i>
                    </a>
                  </li>
                )}
                {facebookLink && (
                  <li className="mr-5">
                    <a
                      href={`${facebookLink}`}
                      className={`gr-text-color ${iconClassName}`}
                      target="_blank"
                    >
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </li>
                )}
                {linkedinLink && (
                  <li className="mr-5">
                    <a
                      href={`${linkedinLink}`}
                      className={`gr-text-color ${iconClassName}`}
                      target="_blank"
                    >
                      <i className="icon icon-logo-linkedin"></i>
                    </a>
                  </li>
                )}
                {youtubeLink && (
                  <li className="mr-5">
                    <a
                      href={`${youtubeLink}`}
                      className={`gr-text-color ${iconClassName}`}
                      target="_blank"
                    >
                      <i className="icon icon-triangle-right-17-2"></i>
                    </a>
                  </li>
                )}
                {instagramLink && (
                  <li className="mr-5">
                    <a
                      href={`${instagramLink}`}
                      className={`gr-text-color ${iconClassName}`}
                      target="_blank"
                    >
                      <i className="icon icon-instant-camera-2"></i>
                    </a>
                  </li>
                )}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default FooterSecondary;
