import React, { useEffect, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const headerConfigDefault = {
  theme: "light",
  variant: "primary",
  align: "right",
  isFluid: false,
  button: null, // trial, cart, cta, account, null
  buttonText: "Get In Touch", // trial, cart, cta, account, null
};

const footerConfigDefault = {
  theme: "dark",
  style: "style2", //style1, style2, style3
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  return <>{children}</>;
};

export default PageWrapper;
