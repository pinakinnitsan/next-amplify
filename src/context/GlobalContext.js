import React, { useEffect, useState } from "react";

const GlobalContext = React.createContext();

const initThemeSwitcher = {
  sideBarVisible: false,
  primary: "#473bf0",
  layout: "wide",
  fontFamilyLink: "",
  fontFamilyName: "",
};

const GlobalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [themeDark, setThemeDark] = useState(false);
  const [menuItems, setMenuItems] = useState(null);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [videoModalURL, setVideoModalURL] = useState(null);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [themeSwitcher, setThemeSwitcher] = useState(initThemeSwitcher);
  const [cookie, setCookie] = useState(null);
  const [header, setHeader] = useState({
    theme: "light",
    align: "right",
    isFluid: false,
    variant: "primary",
    height: null,
    button: null,
    buttonText: "Get In Touch",
  });
  const [footer, setFooter] = useState({
    theme: "dark",
    height: null,
    style: "Footer_default",
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth);
    }
  };

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  return (
    <GlobalContext.Provider
      value={{
        windowWidth,
        themeDark,
        toggleTheme,
        videoModalVisible,
        setVideoModalURL,
        videoModalURL,
        toggleVideoModal,
        visibleOffCanvas,
        toggleOffCanvas,
        header,
        setHeader,
        footer,
        setFooter,
        menuItems,
        setMenuItems,
        themeSwitcher,
        setThemeSwitcher,
        languages,
        setLanguages,
        cookie,
        setCookie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
