import React from "react";
import styled, { keyframes } from "styled-components";
import GoogleMapReact from "google-map-react";
import { Row, Col, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const keyBounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
`;

const MapStyled = styled.div`
  width: 100%;
  height: 100%;
  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
    animation: ${keyBounce} 0.5s infinite alternate;
  }
`;

const LocationPin = () => (
  <div className="pin">
    <LazyLoadImage
      alt="Pin"
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
      className="pin-icon"
    />
  </div>
);

const Map = ({ data }) => {
  const mapAPI = data.api;
  let locationLat = data.latitude;
  let locationLng = data.longitude;

  const location = {
    lat: parseFloat(locationLat),
    lng: parseFloat(locationLng),
  };

  return (
    <>
      <div className="pb-5 pb-md-25 pt-5 bg-default-2">
        <Container>
          <Row className="justify-content-center pt-5 row">
            {/* <!-- Map Area --> */}
            <Col xs="12">
              <MapStyled className="map-wrap">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: mapAPI}}
                  defaultCenter={location}
                  defaultZoom={17}
                  className="fluid-map-height w-100"
                >
                  <LocationPin lat={locationLat} lng={locationLng} />
                </GoogleMapReact>
              </MapStyled>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Map;
