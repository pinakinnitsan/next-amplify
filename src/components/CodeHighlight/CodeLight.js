import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeLight = ({ language, children }) => {
  return (
    <SyntaxHighlighter style={docco} language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeLight;
