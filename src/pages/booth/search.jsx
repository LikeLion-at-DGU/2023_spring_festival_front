import SearchHeader from "components/booth/SearchHeader";
import { useState } from "react";

function search() {

    // 부스데이터는 list에서 넘겨받음
    const [boothData, setBoothData] = useState([]);
    
    // 검색어 저장받음 
    const [searchValue, setSearchValue] = useState('');

    
      return (
        <>
          <SearchHeader
          searchValue={searchValue}
          setSearchValue={setSearchValue}
            />
        
        </>
    );
}

export default search;