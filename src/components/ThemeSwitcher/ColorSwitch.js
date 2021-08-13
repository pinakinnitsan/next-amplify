import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const ColorBox = styled.div`
  display: flex;
  height: 41px;
  .color-in {
    flex: 0 0 20%;
    max-width: 20%;
    .color {
      display: block;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  .hexa-in {
    flex: 0 0 80%;
    max-width: 80%;
    font-size: 16px;
    line-height: 20px;
    color: rgba(22, 28, 45, 0.7);
  }
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorSwitch = ({ title, color, setColor, isRGBA }) => {
  return (
    <>
      <h3 className="name gr-text-9 mb-2 font-weight-light">{title}</h3>
      <ColorBox className="border mb-2">
        <div className="color-in px-2 py-2 border-right">
          <span
            className="color"
            style={{ backgroundColor: color.color }}
            onClick={() => setColor({ ...color, visible: !color.visible })}
          ></span>
        </div>
        <div className="hexa-in px-4 py-4">{color.color}</div>
      </ColorBox>
      {color.visible && (
        <>
          <Cover onClick={() => setColor({ ...color, visible: false })}></Cover>
          <SketchPicker
            color={color.color}
            onChange={({ rgb, hex, ...props }) => {
              setColor({
                ...color,
                visible: true,
                color: isRGBA
                  ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
                  : hex,
              });
            }}
          />
        </>
      )}
    </>
  );
};

export default ColorSwitch;
