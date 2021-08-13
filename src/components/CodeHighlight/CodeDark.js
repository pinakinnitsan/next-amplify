import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeDark = ({ language, children }) => {
  return (
    <SyntaxHighlighter style={atelierCaveDark} language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeDark;
