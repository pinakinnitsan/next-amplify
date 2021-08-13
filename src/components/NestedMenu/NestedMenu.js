import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import SearchForm from "../Search/SearchForm";

const NestedMenuContainer = styled.div`
  a,
  .title {
    color: ${({ dark, theme }) => theme.colors.heading}!important;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const MenuItem = ({
  title,
  isExternal = false,
  link,
  children,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(children);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className="d-flex align-items-center justify-content-between"
        >
          <span className="title py-3">{title}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${link}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
              className=" py-3"
            >
              {title}
            </a>
          ) : (
            <Link href={`${link}`}>
              <a
                onClick={() => {
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
                className=" py-3"
              >
                {title}
              </a>
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {children.map((subItem) => (
              <MenuItem
                key={subItem.title}
                depth={depth + 1}
                depthStep={depthStep}
                title={subItem.title}
                link={subItem.link}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = ({ menuItems, setShowSearchForm }) => {
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems &&
          menuItems["data"]["navigation"][0]["children"].map(
            (menuItem, index) => (
              <MenuItem
                key={`${menuItem.title}${index}`}
                depthStep={20}
                depth={0}
                {...menuItem}
              />
            )
          )}
        <ListGroup.Item>
          <SearchForm setShowSearchForm={setShowSearchForm} />
        </ListGroup.Item>
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
