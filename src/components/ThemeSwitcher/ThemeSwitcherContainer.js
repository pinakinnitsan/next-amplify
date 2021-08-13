import styled from "styled-components";

const ThemeSwitcherContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 10000;
  transform: translateX(-330px);
  transition: all 0.5s;
  color: #151b2c;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    color: #151b2c;
  }
  &.active {
    transform: translateX(0);
  }
`;

export default ThemeSwitcherContainer;
