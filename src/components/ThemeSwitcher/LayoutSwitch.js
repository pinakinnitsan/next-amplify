import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { theme as baseTheme } from "../../utils";
import GlobalContext from "../../context/GlobalContext";

const LayoutWrapper = styled.div`
  display: none;
  @media (min-width: 1240px) {
    display: block;
  }
`;

const ButtonSmall = styled(Button)`
  min-width: 1px;
`;

const LayoutSwitch = () => {
  const { themeSwitcher, setThemeSwitcher } = useContext(GlobalContext);

  const wideContainerVariant =
    themeSwitcher.layout === baseTheme.layouts.wide ? "info" : "dark";
  const boxedContainerVariant =
    themeSwitcher.layout === baseTheme.layouts.boxed ? "info" : "dark";

  const handleLayout = (type) => {
    setThemeSwitcher({ ...themeSwitcher, layout: type, sideBarVisible: false });
  };

  return (
    <LayoutWrapper className="mb-12">
      <h3 className="title gr-text-7 mb-6">Layout Switcher</h3>
      <div className="color-picker-wrapper">
        <div className="color-box-wrapper mb-5">
          <h3 className="name gr-text-9 mb-2 font-weight-light">
            Layout Style
          </h3>
          <div className="btn-wrapper">
            <ButtonSmall
              variant={wideContainerVariant}
              className="px-4 py-1 mr-3 rounded-0"
              onClick={(e) => handleLayout(baseTheme.layouts.wide)}
            >
              Wide
            </ButtonSmall>
            <ButtonSmall
              variant={boxedContainerVariant}
              className="px-4 py-1 rounded-0"
              onClick={(e) => handleLayout(baseTheme.layouts.boxed)}
            >
              Boxed
            </ButtonSmall>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default LayoutSwitch;
