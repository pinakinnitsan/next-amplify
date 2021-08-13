import React from "react";
import styled from "styled-components";

const NumberWrapper = styled.input`
  width: 100%;
  outline: none;
  font-size: 16px;
  line-height: 20px;
`;

const TypographySwitch = ({ typography, handleTypographyChange }) => {
  return (
    <div className="mb-12">
      <h3 className="title gr-text-7 mb-6">Body Typography</h3>
      <div className="typography-wrapper">
        <div className="mb-4">
          <h3 className="name gr-text-9 mb-2 font-weight-light">
            Font Size (in px)
          </h3>
          <NumberWrapper
            name="fontSize"
            type="number"
            value={typography.fontSize}
            className="border px-4 py-4"
            onChange={handleTypographyChange}
          />
        </div>
        <div>
          <h3 className="name gr-text-9 mb-2 font-weight-light">
            Line Height (in px)
          </h3>
          <NumberWrapper
            name="lineHeight"
            type="number"
            value={typography.lineHeight}
            className="border px-4 py-4"
            onChange={handleTypographyChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TypographySwitch;
