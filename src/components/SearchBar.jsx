import { useState } from "react"
import {SearchBarContainer} from './SearchBarStyle'


export default function SearchBar() {
  const [search, setSearch] = useState('')

  const handleSearchEvent = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log("검색바 : ", e.target.value)
  }
  return (
    <SearchBarContainer>
      <form>
        <input type="text" 
        id="search" 
        value={search} 
        onChange={handleSearchEvent}
        placeholder="상품명을 입력해주세요."
        />
        <label htmlFor="search">검색😎</label>
      </form>
    </SearchBarContainer>
  )
}



