import { useRef, useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";
import GlobalContext from "../../context/GlobalContext";
import ThemeSwitcherContainer from "./ThemeSwitcherContainer";
import HeaderSwitch from "./HeaderSwitch";
import LayoutSwitch from "./LayoutSwitch";
import FontFamilySwitch from "./FontFamilySwitch";
import TypographySwitch from "./TypographySwitch";
import ColorSwitch from "./ColorSwitch";

const SettingsBar = styled.div`
  width: 40px;
  height: 44px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 2px 0 7px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
`;

const ThemeSwitcherInner = styled.div`
  width: 330px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;
  .brand-wrapper {
    svg {
      width: 22px;
      height: 22px;
      color: #473bf0 !important;
    }
  }
  .brand-in {
    font-size: 22px;
    font-weight: 700;
    color: #473bf0 !important;
  }
`;

const ButtonIn = styled(Button)`
  min-width: 1px;
  &.blue-btn {
    background-color: #473bf0;
    border-color: #473bf0;
  }
`;

const ThemeSwitcher = ({ pageData }) => {
  const { menu_align, is_fluid, is_dark, is_button } =
    pageData.data.page.appearance;
  const { primaryColor, secondaryColor, tertiaryColor, textColor } =
    pageData.data.page.constants.ns_style;
  const { header, setHeader, themeSwitcher, setThemeSwitcher } =
    useContext(GlobalContext);

  const themeSwitcherContainer = useRef(null);
  const [primary, setPrimary] = useState({
    visible: false,
    color: primaryColor.value,
  });
  const [secondary, setSecondary] = useState({
    visible: false,
    color: secondaryColor.value,
  });
  const [tertiary, setTertiary] = useState({
    visible: false,
    color: tertiaryColor.value,
  });
  const [text, setText] = useState({
    visible: false,
    color: textColor.value,
  });
  const [typography, setTypography] = useState({
    fontSize: pageData.data.page.constants.ns_style.fontSize.value,
    lineHeight: pageData.data.page.constants.ns_style.lineHeight.value,
  });
  const [headerAlignment, setHeaderAlignment] = useState(menu_align);
  const [headerTheme, setHeaderTheme] = useState(
    parseInt(is_dark) ? "dark" : "light"
  );
  const [headerButton, setHeaderButton] = useState(parseInt(is_button));
  const [headerFluid, setHeaderFluid] = useState(parseInt(is_fluid));

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener("click", function (e) {
        setThemeSwitcher({ ...themeSwitcher, sideBarVisible: false });
      });
    }

    function getThemeVariable(themeVar) {
      const theme = JSON.parse(localStorage.getItem("theme"));

      if (theme && theme[themeVar]) {
        return theme[themeVar];
      } else {
        return false;
      }
    }

    setPrimary({
      ...primary,
      color: getThemeVariable("primary")
        ? getThemeVariable("primary")
        : primaryColor.value,
    });
    setSecondary({
      ...secondary,
      color: getThemeVariable("secondary")
        ? getThemeVariable("secondary")
        : secondaryColor.value,
    });
    setTertiary({
      ...tertiary,
      color: getThemeVariable("tertiary")
        ? getThemeVariable("tertiary")
        : tertiaryColor.value,
    });
    setText({
      ...text,
      color: getThemeVariable("text")
        ? getThemeVariable("text")
        : getComputedStyle(document.body).getPropertyValue("--color-headings"),
    });
    setTypography({
      ...typography,
      fontSize: getThemeVariable("fontSize")
        ? getThemeVariable("fontSize")
        : pageData.data.page.constants.ns_style.fontSize.value,
      lineHeight: getThemeVariable("lineHeight")
        ? getThemeVariable("lineHeight")
        : pageData.data.page.constants.ns_style.lineHeight.value,
    });
  }, []);

  useEffect(() => {
    setHeader({
      ...header,
      align: headerAlignment,
      theme: headerTheme,
      button: headerButton,
      isFluid: headerFluid,
    });
  }, [headerAlignment, headerTheme, headerButton, headerFluid]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-size",
      `${typography.fontSize}px`
    );
    document.documentElement.style.setProperty(
      "--line-height",
      `${typography.lineHeight}px`
    );
  }, [typography]);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", `${primary.color}`);
    document.documentElement.style.setProperty(
      "--secondary",
      `${secondary.color}`
    );
    document.documentElement.style.setProperty("--red", `${tertiary.color}`);
    document.body.style.setProperty("--color-headings", `${text.color}`);
  }, [primary, secondary, tertiary, text]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const theme = {
      primary: primary.color,
      secondary: secondary.color,
      tertiary: tertiary.color,
      text: text.color,
      fontSize: typography.fontSize,
      lineHeight: typography.lineHeight,
      fontFamilyLink: themeSwitcher.fontFamilyLink,
      fontFamilyName: themeSwitcher.fontFamilyName,
    };

    localStorage.setItem("theme", JSON.stringify(theme));

    handleSettingsBar();
  };

  const resetTheme = (e) => {
    localStorage.removeItem("theme");

    setPrimary({
      ...primary,
      color: primaryColor.value,
    });
    setSecondary({
      ...secondary,
      color: secondaryColor.value,
    });
    setTertiary({
      ...tertiary,
      color: tertiaryColor.value,
    });
    setText({
      ...text,
      color: textColor.value,
    });
    setTypography({
      ...typography,
      fontSize: pageData.data.page.constants.ns_style.fontSize.value,
      lineHeight: pageData.data.page.constants.ns_style.lineHeight.value,
    });
    setThemeSwitcher({
      ...themeSwitcher,
      fontFamilyLink: pageData.data.page.constants.ns_style.siteFonts.value,
      fontFamilyName: "",
      sideBarVisible: !themeSwitcher.sideBarVisible,
    });
  };

  const handleSettingsBar = () =>
    setThemeSwitcher({
      ...themeSwitcher,
      sideBarVisible: !themeSwitcher.sideBarVisible,
    });

  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    const regValue = value.replace(/[^\d]/, "");

    if (parseInt(regValue) !== 0) {
      setTypography({ ...typography, [name]: regValue });
    }
  };

  return (
    <ThemeSwitcherContainer
      ref={themeSwitcherContainer}
      className={`${
        themeSwitcher.sideBarVisible ? "active" : ""
      } d-none d-sm-flex`}
      onClick={(e) => e.stopPropagation()}
    >
      <ThemeSwitcherInner>
        <div className="px-10 py-7 d-flex brand-wrapper align-items-center">
          <BsFillGearFill className="mr-5" />
          <div className="brand-in">T3Shiva 2.0</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-inner px-10 py-10">
            <div className="mb-12">
              <h3 className="title gr-text-7 mb-6">Theme Color</h3>
              <div className="color-picker-wrapper">
                <div className="color-box-wrapper mb-5">
                  <ColorSwitch
                    title="Primary Color"
                    color={primary}
                    setColor={setPrimary}
                  />
                </div>
                <div className="color-box-wrapper mb-5">
                  <ColorSwitch
                    title="Secondary Color"
                    color={secondary}
                    setColor={setSecondary}
                  />
                </div>
                <div className="color-box-wrapper mb-5">
                  <ColorSwitch
                    title="Tertiary Color"
                    color={tertiary}
                    setColor={setTertiary}
                  />
                </div>
                <div className="color-box-wrapper">
                  <ColorSwitch
                    title="Text Color"
                    color={text}
                    setColor={setText}
                  />
                </div>
              </div>
            </div>
            <TypographySwitch
              typography={typography}
              handleTypographyChange={handleTypographyChange}
            />
            <LayoutSwitch />
            <HeaderSwitch
              setHeaderAlignment={setHeaderAlignment}
              headerAlignment={headerAlignment}
              headerTheme={headerTheme}
              setHeaderTheme={setHeaderTheme}
              headerButton={headerButton}
              setHeaderButton={setHeaderButton}
              headerFluid={headerFluid}
              setHeaderFluid={setHeaderFluid}
            />
            <FontFamilySwitch
            // fonts={fonts} setFonts={setFonts}
            />
            <div className="btn-wrapper">
              <ButtonIn
                type="submit"
                className="blue-btn mr-2"
                variant="primary"
              >
                Submit
              </ButtonIn>
              <ButtonIn type="button" variant="light" onClick={resetTheme}>
                Reset
              </ButtonIn>
            </div>
          </div>
        </form>
      </ThemeSwitcherInner>
      <SettingsBar onClick={handleSettingsBar}>
        <BsFillGearFill />
      </SettingsBar>
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;
