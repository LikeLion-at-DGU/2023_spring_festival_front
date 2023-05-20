import SearchHeader from "components/booth/SearchHeader";
import { useState } from "react";
import { RecommandHeader, RecommandTitle } from "./style";
import RecomandRowCard from "components/booth/RecomandRowCard";
import { useTrail, useSpring, animated } from 'react-spring';
import BoothCard from "components/booth/BoothCard";
import { SearchContentHeader, SearchContentWrapper } from "./search_style";

function Search() {
  const [booth, setBooth] = useState([
    {
      id: 1,
      name: "서희찬..",
      type: "야간부스",
      operator: "멋쟁이사자처럼",
      logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "3",
      is_liked: true
    },
    {
      id: 2,
      name: "으아아악..",
      type: "야간부스",
      operator: "멋쟁이사자처럼",
      logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "3",
      is_liked: true
    },
  ]);

  const [recomandBooth, setRecomandBooth] = useState([
    {
      id: 1,
      name: "코딩주점",
      type: "야간부스",
      operator: "멋쟁이사자처럼",
      logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "1",
      is_liked: true
    },
    {
      id: 2,
      name: "히찬부스",
      type: "야간부스",
      operator: "서희찬",
      logo_image: null,
      like_cnt: 120,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "2",
      is_liked: false
    },
    {
      id: 3,
      name: "집가고싶다..",
      type: "야간부스",
      operator: "멋쟁이사자처럼",
      logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "3",
      is_liked: true
    },
    {
      id: 4,
      name: "집가고싶다..",
      type: "야간부스",
      operator: "멋쟁이사자처럼",
      logo_image: "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "3",
      is_liked: true
    },
  ]);

  const [searchValue, setSearchValue] = useState('');

  const renderTopBooth = () => {
    const trail = useTrail(3, {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: 200,
    });
  
    const fadeOut = useSpring({
      opacity: searchValue.length === 0 ? 1 : 0,
      config: { duration: 300 },
    });
  
    return (
      <>
        <animated.div style={fadeOut}>
          {searchValue.length === 0 && (
            <RecommandHeader>
              <RecommandTitle>실시간 인기 부스</RecommandTitle>
              {trail.map((props, idx) => (
                <animated.div key={idx} style={props}>
                  <RecomandRowCard
                    ranking={idx}
                    booth={recomandBooth[idx].id}
                    logoImage={recomandBooth[idx].logo_image}
                    boothName={recomandBooth[idx].name}
                    boothOperator={recomandBooth[idx].operator}
                    boothLocation={recomandBooth[idx].location}
                    likeCnt={recomandBooth[idx].like_cnt}
                    is_liked={recomandBooth[idx].is_liked}
                  />
                </animated.div>
              ))}
            </RecommandHeader>
          )}
        </animated.div>
        {searchValue.length > 0 && renderSearchBooth()}
      </>
    );
  };

  // SearchBooth Redner function
  const renderSearchBooth = () => {
    const filteredBooths = booth.filter((b) =>
    b.name.includes(searchValue) ||
    b.type.includes(searchValue) ||
    b.operator.includes(searchValue) ||
    b.location.includes(searchValue)
  );
  
    return (
      <SearchContentWrapper>
        <SearchContentHeader>
          {searchValue} 검색결과
        </SearchContentHeader>
        {filteredBooths.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          filteredBooths.map((b) => (
            <div key={b.id}>
              <BoothCard booth={b} />
              <p>{b.name}</p>
              <p>{b.operator}</p>
              {/* Render other booth information */}
            </div>
          ))
        )}
      </SearchContentWrapper>
    );
  };
  

  return (
    <>
      <SearchHeader
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {renderTopBooth()}
    </>
  );
}

export default Search;
