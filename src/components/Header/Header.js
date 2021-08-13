import React, { useRef, useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import SearchForm from "../Search/SearchForm";
import Select from "../Core/Select";

const SiteHeader = styled.header`
  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  &.dark-mode-texts {
    background-color: #000;
  }
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) =>
        dark ? theme.colors.heading : theme.colors.light};
    }
  }
`;

const ToggleButton = styled.button`
  &.is-dark {
    color: rgba(252, 253, 254, 0.7) !important;
    border-color: rgba(252, 253, 254, 0.7) !important;
  }
  &.is-light {
    color: rgb(22, 28, 45) !important;
    border-color: rgb(22, 28, 45) !important;
  }
`;

const Search = styled.li`
  span {
    cursor: pointer;
  }
`;

const SearchFormWrapper = styled.div`
  position: absolute;
  min-width: 300px;
  right: 0;
  top: 100%;
  transform: translateY(-4%);
  box-shadow: 0 12px 34px -11px rgb(65, 62, 101, 0.1);
  .search-box {
    padding-bottom: 0 !important;
    .form-group {
      margin-bottom: 0 !important;
    }
  }
`;

const CustomSelect = styled(Select)`
  width: 75px;
  .custom-select__control {
    cursor: pointer;
    padding: 4px 10px;
    width: 100%;
    border-color: var(--primary) !important;
  }
  .custom-select__option {
    color: var(--primary);
    cursor: pointer;
  }
  .custom-select__indicator {
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  const router = useRouter();
  const gContext = useContext(GlobalContext);
  const headerEl = useRef(null);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  useEffect(() => {
    if (typeof document !== undefined) {
      document.addEventListener("click", function (e) {
        setShowSearchForm(false);
      });
    }

    gContext.setHeader({
      ...gContext.header,
      height: headerEl.current.getBoundingClientRect().height,
    });
  }, []);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  const handleLanguageChange = (value) => {
    localStorage.setItem("locale", value);
    router.push(
      `${value === "en" ? "" : value}${router.asPath}`,
      `${value === "en" ? "" : value}${router.asPath}`,
      {
        locale: false,
      }
    );
  };

  return (
    <>
      <SiteHeader
        className={`site-header  site-header--absolute py-0 sticky-header ${
          gContext.header.align === "left"
            ? "site-header--menu-left "
            : gContext.header.align === "right"
            ? "site-header--menu-right "
            : "site-header--menu-center "
        }
        ${gContext.header.theme === "dark" ? "dark-mode-texts" : " "} ${
          showScrolling ? "scrolling" : ""
        } ${
          showReveal && gContext.header.theme === "dark"
            ? "reveal-header bg-blackish-blue"
            : showReveal
            ? "reveal-header"
            : ""
        }`}
        ref={headerEl}
      >
        <Container
          fluid={gContext.header.isFluid}
          className={gContext.header.isFluid ? "pr-lg-9 pl-lg-9" : ""}
        >
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg px-0">
            <div className="brand-logo">
              <Logo white={gContext.header.theme === "dark"} />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <ul className="navbar-nav main-menu d-none d-lg-flex position-relative">
                  {gContext.menuItems &&
                    gContext.menuItems["data"]["navigation"][0]["children"].map(
                      (
                        {
                          link,
                          isExternal = false,
                          title,
                          children,
                          items,
                          ...rest
                        },
                        index
                      ) => {
                        const hasSubItems =
                          children && children.length ? true : false;
                        return (
                          <React.Fragment key={title + index}>
                            {hasSubItems ? (
                              <li className="nav-item dropdown" {...rest}>
                                <a
                                  className="nav-link dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  href="/"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {title}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu">
                                  {children.map((subItem, indexSub) => {
                                    const hasInnerSubItems = Array.isArray(
                                      subItem.items
                                    );
                                    return (
                                      <React.Fragment
                                        key={subItem.title + indexSub}
                                      >
                                        {hasInnerSubItems ? (
                                          <li className="drop-menu-item dropdown">
                                            <a
                                              className="dropdown-toggle gr-toggle-arrow"
                                              role="button"
                                              data-toggle="dropdown"
                                              aria-expanded="false"
                                              aria-haspopup="true"
                                              href="/"
                                              onClick={(e) =>
                                                e.preventDefault()
                                              }
                                            >
                                              {subItem.title}
                                              <i className="icon icon-small-down"></i>
                                            </a>
                                            <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                              {subItem.items.map(
                                                (itemInner, indexInnerMost) => (
                                                  <li
                                                    className="drop-menu-item"
                                                    key={
                                                      itemInner.link +
                                                      indexInnerMost
                                                    }
                                                  >
                                                    {itemInner.isExternal ? (
                                                      <a
                                                        href={`${itemInner.link}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                      >
                                                        {itemInner.title}
                                                      </a>
                                                    ) : (
                                                      <Link
                                                        href={`${itemInner.link}`}
                                                      >
                                                        <a>{itemInner.title}</a>
                                                      </Link>
                                                    )}
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </li>
                                        ) : (
                                          <li className="drop-menu-item">
                                            {subItem.isExternal ? (
                                              <a
                                                href={`${subItem.link}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {subItem.title}
                                              </a>
                                            ) : (
                                              <Link href={`${subItem.link}`}>
                                                <a>{subItem.title}</a>
                                              </Link>
                                            )}
                                          </li>
                                        )}
                                      </React.Fragment>
                                    );
                                  })}
                                </ul>
                              </li>
                            ) : (
                              <li className="nav-item" {...rest}>
                                {isExternal ? (
                                  <a
                                    className="nav-link"
                                    href={`${link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {title}
                                  </a>
                                ) : (
                                  <Link href={`${link}`}>
                                    <a
                                      className="nav-link"
                                      role="button"
                                      aria-expanded="false"
                                    >
                                      {title}
                                    </a>
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      }
                    )}
                  <Search
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSearchForm(!showSearchForm);
                    }}
                  >
                    <span className="nav-link">
                      <BsSearch></BsSearch>
                    </span>
                    {showSearchForm && (
                      <SearchFormWrapper>
                        <SearchForm setShowSearchForm={setShowSearchForm} />
                      </SearchFormWrapper>
                    )}
                  </Search>
                  <li className="nav-item d-none d-lg-flex align-items-center px-4">
                    {gContext.languages && (
                      <CustomSelect
                        isSearchable={false}
                        options={gContext.languages}
                        defaultValue={{
                          value: localStorage.getItem("locale")
                            ? localStorage.getItem("locale")
                            : router.locale,
                          label: localStorage.getItem("locale")
                            ? localStorage.getItem("locale").toUpperCase()
                            : router.locale.toUpperCase(),
                        }}
                        onChange={(e) => handleLanguageChange(e.value)}
                        // options={[
                        //   { value: "en", label: "EN" },
                        //   { value: "de", label: "DE " },
                        // ]}
                        name="lang"
                      />
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {gContext.header.button && (
              <div className="header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block">
                <Link href="/contact">
                  <a className={`btn btn-${gContext.header.variant}`}>
                    {gContext.header.buttonText}
                  </a>
                </Link>
              </div>
            )}

            {/* {gContext.header.button === "account" && (
              <div className="header-btns d-none d-xs-block  ml-auto ml-lg-3 mr-6 mr-lg-0">
                <Link href="/signin">
                  <a className="btn-link gr-text-11 font-weight-bold gr-text-color pl-lg-8 ml-lg-2 border-lg-left mr-9 mr-lg-0">
                    Sign In
                  </a>
                </Link>
                <Link href="/signup">
                  <a
                    className={`btn btn-${gContext.header.variant} px-9 py-5 ml-lg-9`}
                  >
                    Sign Up
                  </a>
                </Link>
              </div>
            )} */}
            <div className="d-flex">
              {gContext.languages && (
                <CustomSelect
                  className="d-flex d-lg-none"
                  isSearchable={false}
                  options={gContext.languages}
                  onChange={(e) => handleLanguageChange(e.value)}
                  // options={[
                  //   { value: "en", label: "EN" },
                  //   { value: "de", label: "DE " },
                  // ]}
                  name="lang"
                />
              )}
              <ToggleButton
                className={`navbar-toggler btn-close-off-canvas ml-5 ${
                  gContext.visibleOffCanvas ? "collapsed" : ""
                } ${gContext.header.theme === "dark" ? "is-dark" : "is-light"}`}
                type="button"
                data-toggle="collapse"
                data-target="#mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={gContext.toggleOffCanvas}
              >
                <i className="icon icon-menu-34 icon-burger d-block"></i>
              </ToggleButton>
            </div>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        className="site-offcanvas-menu"
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu
          setShowSearchForm={setShowSearchForm}
          menuItems={gContext.menuItems}
        />
      </Offcanvas>
    </>
  );
};

export default Header;
