import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { theme as baseTheme } from "../../utils";

const HeaderSwitcherWrapper = styled.div``;

const CheckForm = styled(Form.Check)`
  font-size: 16px;
  line-height: 20px;
  padding-left: 0;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:before {
    border-color: #473bf0;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #473bf0;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  [type="checkbox"] {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 1em;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    &:checked + label:after {
      border-color: #473bf0;
    }
    &:checked + label:after {
      background-color: #473bf0;
    }
    + label {
      padding-left: 28px;
      &:before,
      &:after {
        content: "";
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        display: block;
        box-sizing: border-box;
        border-radius: 0;
        border: 1px solid transparent;
        z-index: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
      }
      &:before {
        border-color: #dddddd;
      }
      &:after {
        transform: translateY(-50%) scale(0.6);
      }
    }
  }
`;

const HeaderSwitch = ({
  headerAlignment,
  setHeaderAlignment,
  headerTheme,
  setHeaderTheme,
  headerButton,
  setHeaderButton,
  headerFluid,
  setHeaderFluid,
}) => {
  const handleAlignmentChange = (e) => setHeaderAlignment(e.target.value);
  const handleThemeChange = (e) => setHeaderTheme(e.target.value);
  const handleButtonChange = (e) => setHeaderButton(!headerButton);
  const handleFluidChange = (e) => setHeaderFluid(!headerFluid);

  return (
    <div className="mb-12">
      <h3 className="title gr-text-7 mb-6">Header Switcher</h3>
      <HeaderSwitcherWrapper className="header-switcher-wrapper">
        <h3 className="name gr-text-9 mb-2 font-weight-light">Theme</h3>
        <div className="mb-3">
          <CheckForm
            label="Dark"
            name="group2"
            value="dark"
            type="radio"
            id="headerDark"
            checked={headerTheme === baseTheme.headerVariants.theme.dark}
            onChange={handleThemeChange}
          />
          <CheckForm
            label="Light"
            name="group2"
            value="light"
            type="radio"
            id="headerLight"
            checked={headerTheme === baseTheme.headerVariants.theme.light}
            onChange={handleThemeChange}
          />
        </div>
        <h3 className="name gr-text-9 mb-2 font-weight-light">Alignment</h3>
        <div className="mb-3">
          <CheckForm
            label="Left"
            name="groupAlign"
            value={baseTheme.headerVariants.align.left}
            type="radio"
            id="left"
            checked={headerAlignment === baseTheme.headerVariants.align.left}
            onChange={handleAlignmentChange}
          />
          <CheckForm
            label="Center"
            name="groupAlign"
            value={baseTheme.headerVariants.align.center}
            type="radio"
            id="center"
            checked={headerAlignment === baseTheme.headerVariants.align.center}
            onChange={handleAlignmentChange}
          />
          <CheckForm
            label="Right"
            name="groupAlign"
            value={baseTheme.headerVariants.align.right}
            type="radio"
            id="right"
            checked={headerAlignment === baseTheme.headerVariants.align.right}
            onChange={handleAlignmentChange}
          />
        </div>
        <h3 className="name gr-text-9 mb-2 font-weight-light">Button</h3>
        <div className="mb-3">
          <CheckForm
            label="Contact Button"
            name="groupButton"
            defaultChecked={headerButton}
            type="checkbox"
            id="isButton"
            onChange={handleButtonChange}
          />
        </div>
        <h3 className="name gr-text-9 mb-2 font-weight-light">Fluid</h3>
        <div className="mb-3">
          <CheckForm
            label="is Fluid"
            name="groupFluid"
            defaultChecked={headerFluid}
            type="checkbox"
            id="isFluid"
            onChange={handleFluidChange}
          />
        </div>
      </HeaderSwitcherWrapper>
    </div>
  );
};

export default HeaderSwitch;
