import { useState } from "react";
import { SearchBarContainer } from "./SearchBarStyle";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearchEvent = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log("검색바 : ", e.target.value);
  };
  return (
    <SearchBarContainer>
      <form>
        <div className="input-wrap">
          <input type="text" id="search" name="search" value={search} onChange={handleSearchEvent} placeholder="상품명을 입력해주세요." />
          <FaSearch />
        </div>
      </form>
    </SearchBarContainer>
  );
}
