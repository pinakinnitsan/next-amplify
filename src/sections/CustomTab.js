import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Container, Fade } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const TabsWrapper = styled.div`
  .nav-tabs .nav-link {
    color: var(--color-headings);
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: var(--primary);
  }
`;

const CustomTab = ({ data }) => {
  const [active, setActive] = useState(
    data.accordions && Object.values(data.accordions).length
      ? Object.values(data.accordions)[0].question
      : ""
  );

  const renderLinks = (links) => {
    return links.map((link, id) => {
      return (
        <a
          href="/"
          className={`nav-item nav-link gr-text-7 font-weight-bold ${
            active === link.question ? "active" : ""
          }`}
          role="tab"
          aria-selected={active === link.question}
          onClick={(e) => {
            e.preventDefault();
            setActive(link.question);
          }}
          key={link.question}
        >
          {link.question}
        </a>
      );
    });
  };

  const renderTabs = (tabs) => {
    return tabs.map((tab, id) => {
      return (
        <Fade
          in={active === tab.question}
          role="tabpanel"
          className={`tab-pane ${active === tab.question ? "active" : ""}`}
          key={tab.answer}
        >
          <div>
            <ReactMarkdown escapeHtml={false} source={tab.answer} />
          </div>
        </Fade>
      );
    });
  };

  if (!data) return <>No data found!</>;

  return (
    <div className="pt-20">
      <Container>
        <nav className="pb-12">
          <div className="nav gr-nav-tabs " id="nav-tab" role="tablist">
            {data.accordions && Object.values(data.accordions).length
              ? renderLinks(Object.values(data.accordions))
              : ""}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {data.accordions && Object.values(data.accordions).length
            ? renderTabs(Object.values(data.accordions))
            : ""}
        </div>
      </Container>
    </div>
  );
};

export default CustomTab;
