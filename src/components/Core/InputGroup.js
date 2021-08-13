import { useRef, useState, useEffect } from "react";
import {
  validateEmail,
  validateText,
  validateNumber,
} from "../../utils/validation";
import styled from "styled-components";

const ErrorBox = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CustomTextarea = styled.textarea`
  resize: none;
  height: 100px;
`;

const InputGroup = ({
  label,
  placeholder,
  name,
  type,
  handleChange,
  value,
  handleBlur,
  error,
  textarea,
  isFocused = false,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form-group mb-7">
      {label && (
        <label
          htmlFor={`${name}`}
          className="gr-text-11 font-weight-bold text-blackish-blue"
        >
          {label}
        </label>
      )}
      {textarea ? (
        <CustomTextarea
          className="form-control gr-text-11 border"
          type={`${type}`}
          id={`${name}`}
          name={`${name}`}
          placeholder={`${placeholder ? placeholder : ""}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      ) : (
        <input
          ref={inputRef}
          className="form-control gr-text-11 border"
          type={`${type}`}
          id={`${name}`}
          name={`${name}`}
          placeholder={`${placeholder ? placeholder : ""}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      )}
      {error && <ErrorBox>{error}</ErrorBox>}
    </div>
  );
};

InputGroup.defaultProps = {
  textarea: false,
};

export default InputGroup;
