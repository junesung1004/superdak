import { useEffect, useState } from "react";
import { SearchBarContainer } from "./SearchBarStyle";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  const handleSearchEvent = (e) => {
    e.preventDefault();
    setText(e.target.value);
    //console.log("검색바 : ", e.target.value);
  };

  const enterChangePage = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/search?query=${text}`);
      // navigate(`/search?keyboard=${text}`);
    }
  };

  return (
    <SearchBarContainer>
      <form>
        <div className="input-wrap">
          <input type="text" id="search" name="search" value={text} onChange={handleSearchEvent} onKeyDown={enterChangePage} placeholder="상품명을 입력해주세요." />
          <FaSearch />
        </div>
      </form>
    </SearchBarContainer>
  );
}
