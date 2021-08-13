import React from "react";
import { BsStopFill } from "react-icons/bs";
import shortid from "shortid";
import { Container } from "react-bootstrap";

const List = ({ data }) => {
  const renderLists = (lists) => {
    if (!lists || !lists.length) {
      return <></>;
    }

    return lists.map((list, id) => (
      <li key={shortid.generate()}>
        <span className="icon-in">
          <BsStopFill></BsStopFill>
        </span>
        {list}
      </li>
    ));
  };

  return (
    <div className="list-section pt-8 pt-lg-15 pb-7 pb-lg-15">
      <Container>
        {data.header && (
          <div className="section-title mb-8">
            <h2 className="title gr-text-4">{data.header}</h2>
          </div>
        )}
        <ul>{renderLists(data.bodytext)}</ul>
      </Container>
    </div>
  );
};

export default List;
