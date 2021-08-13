import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

const Fallback = () => (
  <>
    <React.Fragment>
      <div className="content-section border-bottom pt-11 pb-7 pt-lg-30 pb-lg-28 bg-default-6 lg:min-h-vh-100 align-items-center d-flex">
        <Container>
          <Row className="justify-content-center notfound">
            <div className="col-xl-6 col-lg-8 col-sm-10">
              <div className="section-title text-center mt-12 mt-lg-20 mb-12 mb-lg-23">
                <div className="notfound-404"></div>
                <h1 className="title mb-6">Offline Mode!</h1>
                <h2>This is offline fallback page</h2>
                <p className="gr-text-8 px-lg-7 px-xl-0">
                  When offline, any route will fallback to this page
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  </>
);

export default Fallback;
