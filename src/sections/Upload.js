import React from "react";
import { Container } from "react-bootstrap";

const Upload = ({ data }) => {
  const renderFilelists = (displayInformation) => {
    const type = parseInt(displayInformation);

    if (type === 1) {
      return data.media.map((m, id) => {
        return (
          <div key={m.publicUrl + id} className="py-4">
            {
              <img
                src={`/image/FileIcons/${m.properties.extension}.gif`}
                alt="Type"
                className="mr-5"
              />
            }
            {m.properties.title && (
              <a href={`${m.publicUrl}`} target="_blank">
                {m.properties.title}
              </a>
            )}
          </div>
        );
      });
    } else {
      return data.media.map((m, id) => {
        return (
          <div key={m.publicUrl + id} className="py-4">
            {m.properties.title && (
              <a href={`${m.publicUrl}`} target="_blank">
                {m.properties.title}
              </a>
            )}
          </div>
        );
      });
    }
  };

  return (
    <div className="pt-8 pt-lg-15 pb-5">
      <Container>
        {data.header && <h2 class="title gr-text-4 mb-9">{data.header}</h2>}
        {data.media && data.media.length
          ? renderFilelists(data.displayInformation)
          : ""}
      </Container>
    </div>
  );
};

export default Upload;
