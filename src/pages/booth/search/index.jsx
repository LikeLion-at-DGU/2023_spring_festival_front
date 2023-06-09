import SearchHeader from "components/booth/SearchHeader";
import { useEffect, useState } from "react";
import { RecommandHeader, RecommandTitle } from "../../../boothStyle";
import RecomandRowCard from "components/booth/RecomandRowCard";
import { useTrail, useSpring, animated, useTransition } from "react-spring";
import BoothCard from "components/booth/BoothCard";
import {
  BoothCardGridWrapper,
  RecommandWrapper,
  SearchContentHeader,
  SearchContentWrapper,
  SearchNoResult,
} from "../../../search_style";
import { RecomandBoothWrapper } from "../../../search_style";
import { RecommandBoothTitle } from "../../../search_style";
import { SearchContainer } from "../../../search_style";
import { API } from "@/pages/api";

function Search() {
  const [booth, setBooth] = useState([
    {
      id: 1,
      name: "으아아앙악..",
      type: "주간부스",
      operator: "뭐리",
      logo_image:
        "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "멋쟁이",
      section: "3",
      is_liked: true,
    },
    {
      id: 2,
      name: "서희찬..",
      type: "푸드트럭",
      operator: "멋쟁이사자처럼",
      logo_image:
        "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 100,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "학생회관",
      section: "3",
      is_liked: true,
    },
    {
      id: 3,
      name: "멋쟁이!",
      type: "학교부스",
      operator: "대나무숲",
      logo_image:
        "https://www.pngplay.com/wp-content/uploads/3/Apple-Siri-Logo-Download-Free-PNG.png",
      like_cnt: 130,
      start_at: "2023-05-23T18:00:07.687842+09:00",
      end_at: "2023-05-23T23:00:07.687842+09:00",
      location: "명진관",
      section: "3",
      is_liked: false,
    },
  ]);

  // 좋아요 탑 10중 3개 추천, 매번 다르값 불러옴
  const [recomandBooth, setRecomandBooth] = useState([
  ]);
  // 랜덤 추천, 매 호출 마다 다르값 불러옴
  const [randomBooth, setRandomBooth] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  // 부스 정보 가져오기
  // useEffect(() => {
  //   fetchBooths();
  //   fetchRecomandBooths();
  //   featchRandmonBooths();
  // }, []);

  useEffect(() => {
    if (searchValue === "") {
      fetchRecomandBooths();
      featchRandmonBooths();
    }
  }, [searchValue]);

  useEffect(() => {
    fetchBooths();
  }, []);

  const fetchRecomandBooths = async () => {
    try {
      const response = await API.get(`/store/top`);
      const recomandBoothData = response.data;
      setRecomandBooth(recomandBoothData);

    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const featchRandmonBooths = async () => {
    try {
      const response = await API.get(`/store/random`);
      const randomBoothData = response.data;
      setRandomBooth(randomBoothData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchBooths = async () => {
    try {
      const response = await API.get(`/store/list`);
      const postData = response.data;
      setBooth(postData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const renderTopBooth = () => {
    const trail = useTrail(3, {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(20px)" },
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
             
          {recomandBooth && recomandBooth.length > 0 ? (
            trail.map((props, idx) => (
              <animated.div key={idx} style={props}>
                <RecomandRowCard
                  ranking={idx}
                  id={recomandBooth[idx].id}
                  logoImage={recomandBooth[idx].logo_image}
                  boothName={recomandBooth[idx].name}
                  boothOperator={recomandBooth[idx].operator}
                  boothLocation={recomandBooth[idx].location}
                  likeCnt={recomandBooth[idx].like_cnt}
                  is_liked={recomandBooth[idx].is_liked}
                />
              </animated.div>
                ))
          ) : (
            <p style={{marginTop:"30px", fontWeight:"500"}}>현재 인기 부스가 없습니다.</p>
          )}
            </RecommandHeader>
          )}
        </animated.div>
        {searchValue.length > 0 && renderSearchBooth()}
      </>
    );
  };

  // SearchBooth Redner function
  const filteredBooths = booth.filter((b) => {
    const nameMatch = isPartialMatch(b.name, searchValue);
    const typeMatch = isPartialMatch(b.type, searchValue);
    const operatorMatch = isPartialMatch(b.operator, searchValue);
    const locationMatch = isPartialMatch(b.location, searchValue);

    return nameMatch || typeMatch || operatorMatch || locationMatch;
  });

  function isPartialMatch(value, search) {
    if (!search) return true;
    let regex = "";

    for (let i = 0; i < search.length; i++) {
      regex += `(?=.*${search[i]})`;
    }

    return value.toLowerCase().match(new RegExp(regex));
  }

  const trail = useTrail(randomBooth.slice(0, 2).length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },

    delay: 200,
  });

  const transition = useTransition(filteredBooths, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 300 },
    keys: filteredBooths.map((b) => b.id),
  });

  const renderSearchBooth = () => {

    if(!randomBooth || !randomBooth)
    {
      return (
        <>
        로딩중ㅋ
        </>
      )
    }


    
    return (
      <SearchContentWrapper>
        <SearchContentHeader>'{searchValue}' 검색결과</SearchContentHeader>
        {filteredBooths.length === 0 ? (
          <SearchNoResult>검색 결과가 없습니다.</SearchNoResult>
        ) : (
          <BoothCardGridWrapper>
            {transition((style, item) => (
              <animated.div style={style}>
                <BoothCard
                key={item.id}
                id={item.id}
                name={item.name} // string
                type={item.type} // string
                operator={item.operator} // string
                logo_image={item.logo_image} // string
                is_liked={item.is_liked} // boolean
                like_cnt={item.like_cnt} // number
                start_at={item.start_at} // string
                end_at={item.end_at} // string
                location={item.location} // string
                section={item.section} // num || null
                />
              </animated.div>
            ))}
          </BoothCardGridWrapper>
        )}
        <RecommandBoothTitle>이런 부스는 어때요?</RecommandBoothTitle>
        <RecomandBoothWrapper>
          {trail.map((style, index) => (
            <animated.div key={index} style={style}>
              
              <BoothCard
                id={randomBooth[index].id}
                name={randomBooth[index].name}
                operator={randomBooth[index].operator}
                logo_image={randomBooth[index].logo_image}
                like_cnt={randomBooth[index].like_cnt}
                is_liked={randomBooth[index].is_liked}
                location={randomBooth[index].location}
                type={randomBooth[index].type}
              />
            </animated.div>
          ))}
        </RecomandBoothWrapper>
      </SearchContentWrapper>
    );
  };

  return (
    <SearchContainer>
      <SearchHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      {renderTopBooth()}
    </SearchContainer>
  );
}

export default Search;
