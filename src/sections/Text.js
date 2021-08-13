import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Row, Col, Container } from "react-bootstrap";

const SingleBlock = styled.div`
  &:last-child {
    margin-bottom: 0 !important;
  }
  .header-wrapper {
    h2 {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .ce-bodytext {
    margin-top: 0 !important;
  }
`;

const Code = ({ mdText }) => {
  const [text, setText] = useState("");
  const reg = /(\<pre.*?\>)/gi;
  let decodeEntities = () => "lorem ipsum";
  var lang;

  useEffect(() => {
    lang = mdText.split("language-")[1].split(">")[0].slice(0, -1);

    decodeEntities = (function () {
      var element = document.createElement("div");

      function decodeHTMLEntities(str) {
        if (str && typeof str === "string") {
          // strip script/html tags
          str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
          str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
          element.innerHTML = str;
          str = element.textContent;
          element.textContent = "";
        }

        return str;
      }

      return decodeHTMLEntities;
    })();

    if (lang === "html") {
      setText(mdText.replace(reg, "").replace("</pre>", ""));
    } else {
      setText(decodeEntities(mdText.replace(reg, "").replace("</pre>", "")));
    }
  }, []);

  if (mdText.includes("code-dark")) {
    return (
      <SyntaxHighlighter style={atelierCaveDark} language={`${lang}`}>
        {text}
      </SyntaxHighlighter>
    );
  } else if (mdText.includes("code-light")) {
    return (
      <SyntaxHighlighter style={docco} language={`${lang}`}>
        {text}
      </SyntaxHighlighter>
    );
  }
};

const renderText = (mdText) => {
  if (mdText.includes("code-dark") || mdText.includes("code-light")) {
    return <Code mdText={mdText} />;
  } else {
    return (
      <ReactMarkdown
        escapeHtml={false}
        source={mdText}
        className="ce-bodytext"
      />
    );
  }
};

const Text = ({ data }) => {
  return (
    <>
      <div className="main-block pb-15">
        <Container>
          <Row>
            <Col lg="10" xl="10">
              <div className="px-lg-8 px-xl-3">
                <SingleBlock className="single-block mb-11">
                  {(data.header || data.subheader) && (
                    <div className="pt-25 pt-lg-25 header-wrapper">
                      {data.header && (
                        <h2 className="gr-text-3 mb-7 mb-lg-8">
                          {data.header}
                        </h2>
                      )}
                      {data.subheader && (
                        <p className="gr-text-8 mb-0">{data.subheader}</p>
                      )}
                    </div>
                  )}
                  {data.bodytext && renderText(data.bodytext)}
                </SingleBlock>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Text;
