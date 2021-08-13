import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../context/GlobalContext";

const TextAreaWrapper = styled.div`
  textarea {
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 10px;
    padding: 7px;
    background-color: #f5f8f9;
    min-height: 135px;
    width: 100%;
    resize: none;
    outline: none;
    box-shadow: none;
  }
`;

const InputWrapper = styled.div`
  input {
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    outline: none;
  }
`;

const SearchForLink = styled.a`
  color: #473bf0 !important;
`;

const FontFamilySwitch = () => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    if (
      gContext.themeSwitcher.fontFamilyLink &&
      gContext.themeSwitcher.fontFamilyName
    ) {
      document.body.style.fontFamily = `${gContext.themeSwitcher.fontFamilyName.replace(
        ";",
        ""
      )}`;
    } else {
      document.body.style.removeProperty("font-family");
    }
  }, [gContext.themeSwitcher.fontFamilyName]);

  return (
    <div className="mb-12">
      <h3 className="title gr-text-7 mb-6">Theme Fonts</h3>
      <div className="textarea-wrapper">
        <h5 className="name gr-text-10 mb-4 text-break font-weight-light">
          Google Font (Without https://fonts.googleapis.com/css2)
        </h5>
        <TextAreaWrapper>
          <textarea
            name="fonts link"
            className="border px-4 py-4"
            value={gContext.themeSwitcher.fontFamilyLink}
            placeholder="?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            onChange={(e) =>
              gContext.setThemeSwitcher({
                ...gContext.themeSwitcher,
                fontFamilyLink: e.target.value,
              })
            }
          />
        </TextAreaWrapper>
        <InputWrapper className="form-group mb-7">
          <label
            htmlFor="fonts-link"
            className="gr-text-11 font-weight-bold text-blackish-blue"
          >
            CSS rules to specify families (Without "font-family:" )
          </label>
          <input
            type="text"
            className="border px-4 py-4"
            name="fonts-link"
            value={gContext.themeSwitcher.fontFamilyName}
            placeholder="'Work Sans', sans-serif"
            onChange={(e) =>
              gContext.setThemeSwitcher({
                ...gContext.themeSwitcher,
                fontFamilyName: e.target.value
                  ? e.target.value.replace(";", "")
                  : e.target.value,
              })
            }
          />
        </InputWrapper>
        <SearchForLink
          target="_blank"
          className="gr-text-9 btn-link with-icon text-blue mt-auto"
          href="https://fonts.google.com/"
        >
          Select From Google Fonts{" "}
          <i className="icon icon-tail-right font-weight-bold"></i>
        </SearchForLink>
      </div>
    </div>
  );
};

export default FontFamilySwitch;
