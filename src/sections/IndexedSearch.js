import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Container, Button, Spinner } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import InputGroup from "../components/Core/InputGroup";

const CustomForm = styled.form`
  position: relative;
  .form-group {
    margin-bottom: 0;
    input {
      padding-right: 70px;
    }
  }
`;

const CustomButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 1px;
  bottom: 0;
  padding: 10px 20px;
  border-radius: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const IndexedSearch = () => {
  const router = useRouter();
  let initialSearchTerm = router.asPath.split("=")[1];
  if (initialSearchTerm) {
    initialSearchTerm = initialSearchTerm.replaceAll("+", " ");
  }
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchData, setSearchData] = useState([]);
  const [resultSearchTerm, setResultSearchTerm] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchResults = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}search/score/desc/0/1/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      );

      setLoading(false);
      if (
        data &&
        data.content &&
        data.content.colPos0 &&
        data.content.colPos0.length &&
        data.content.colPos0[1].content &&
        data.content.colPos0[1].content.data
      ) {
        setResultSearchTerm(searchTerm);
        setSearchData(data.content.colPos0[1].content.data.resultrows);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchResults();
  }, []);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm && !searchTerm.trim()) return;

    searchResults();
  };

  const renderMarkdown = (str) => {
    const withoutRNT = str
      .replaceAll("\r", "")
      .replaceAll("\n", "")
      .replaceAll("\t", "");
    return (
      <ReactMarkdown
        className="gr-text-9 gr-text-color-opacity"
        escapeHtml={false}
        source={withoutRNT}
      />
    );
  };

  return (
    <>
      <div className="pt-24 pb-20 bg-default-2">
        <Container>
          <h3 className="title text-center gr-text-3 mb-7">Search</h3>
          <CustomForm
            className="search-form"
            onSubmit={handleSubmit}
            data-aos="fade-up"
          >
            <InputGroup
              label=""
              placeholder="Search"
              name="search"
              type="text"
              handleChange={handleChange}
              value={searchTerm}
            />
            <CustomButton type="submit">
              <BsSearch></BsSearch>
            </CustomButton>
          </CustomForm>
        </Container>
      </div>
      {!loading ? (
        <div className="search-results-wrapper pt-15 pb-20">
          <Container>
            <h3 className="title gr-text-7 mb-14">
              {searchData.length} results for {resultSearchTerm}
            </h3>
            <div className="search-results">
              {searchData && searchData.length ? (
                <>
                  {searchData.map((s, id) => (
                    <div
                      className="search-result-box  mb-10"
                      key={s.title_text + id}
                      data-aos="fade-up"
                    >
                      {s.title_text && (
                        <h3 className="title gr-text-7 mb-5">{s.title_text}</h3>
                      )}
                      {s.teaser && renderMarkdown(s.teaser)}
                      <Link href={`${s.url}`}>
                        <a className="gr-text-9 btn-link with-icon mt-auto">
                          Read More{" "}
                          <i className="icon icon-tail-right font-weight-bold"></i>
                        </a>
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </Container>
        </div>
      ) : (
        <div className="spinner-wrapper pt-25 pb-25 d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default IndexedSearch;
