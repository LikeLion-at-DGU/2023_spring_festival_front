import SearchHeader from "components/booth/SearchHeader";
import { useState } from "react";
import { RecommandHeader, RecommandTitle, SearchWrapper } from "./style";
import RecomandRowCard from "components/booth/RecomandRowCard";





function search() {

    // 부스데이터는 list에서 넘겨받음
    const [boothData, setBoothData] = useState([]);
    
    // 검색어 저장받음 
    const [searchValue, setSearchValue] = useState('');


    const renderTopBooth = () => {
        return boothData.length === 0 ? (
        <>
        <RecommandHeader>
            <RecommandTitle>실시간 인기 부스</RecommandTitle>
            {/* 추천 행 카드 */}
            <RecomandRowCard/>
            <RecomandRowCard/>
            <RecomandRowCard/>
        </RecommandHeader>
        </>
        ) : (
        <>

        </>    
        );
    }
    
      return (
        <>
        {/* 검색 header */}
        <SearchHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
            />
            {renderTopBooth()}







        </>


    );
}

export default search;