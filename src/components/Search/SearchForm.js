import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { Button } from "react-bootstrap";
import InputGroup from "../Core/InputGroup";
import GlobalContext from "../../context/GlobalContext";

const SearchFormIn = styled.form`
  position: relative;
  label {
    display: none;
  }
  input {
    padding: 12px 45px 12px 12px;
    border-radius: 0;
    box-shadow: none !important;
  }
`;

const CustomButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 1px;
  bottom: 0;
  padding: 10px;
  border-radius: 0;
`;

const SearchForm = ({ setShowSearchForm }) => {
  const gContext = useContext(GlobalContext);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);
  const stopPropagation = (e) => e.stopPropagation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm && !searchTerm.trim()) return;
    if (gContext.visibleOffCanvas) {
      gContext.toggleOffCanvas();
    }

    setShowSearchForm(false);
    router.push(`/search?search_query=${searchTerm}`);
  };

  return (
    <div className="search-box py-5" onClick={stopPropagation}>
      <SearchFormIn onSubmit={handleSubmit}>
        <InputGroup
          label=""
          placeholder="Search"
          name="search"
          type="text"
          handleChange={handleChange}
          value={searchTerm}
          isFocused={true}
        />
        <CustomButton type="submit">
          <BsSearch></BsSearch>
        </CustomButton>
      </SearchFormIn>
    </div>
  );
};

export default SearchForm;
