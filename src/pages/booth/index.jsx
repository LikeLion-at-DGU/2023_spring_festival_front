import { React, useCallback, useEffect, useMemo, useState } from "react";
import {
  BoothFilterSection,
  BoxDate,
  BoxDay,
  Container,
  DateContainer,
  DateSection,
  DayBox,
  EmptyFilteredBooth,
  EmptyFilteredIcon,
  EmptyFilteredSection,
  FilterSectionInput,
  FilterSectionSub1,
  FilterSectionSub2,
  FilterSectionSub3,
  GuideMessage,
  LocationTextSection,
  MapContainer,
  MapModalButton,
  MapModalSection,
  MapSection,
  Pin1,
  Pin2,
  Pin3,
  Pin4,
  Pin5,
  Pin6,
  RankingHotButton,
  RankingLeftSection,
  RankingRightSection,
  RankingSection,
  SelectedLocation,
} from "../../boothStyle";
import { DateNum, DateWeek } from "../../timeTable";
import Image from "next/image";
import map from "../../../components/image/booth/campus_map.svg";
import pin from "../../../components/image/booth/pin.png";
import elephant from "../../../components/image/booth/elephant.svg";
import { BoothCardGridWrapper } from "../../search_style";
import { boothSectorArray } from "./testData";
import FilteredBooth from "components/booth/FilteredBooth";
import { API } from "../api";
import BoothTop10 from "components/booth/BoothTop10";

// 날짜 배열
const dayArray = [
  {
    id: 1,
    date: 23,
    day: "TUE",
  },
  {
    id: 2,
    date: 24,
    day: "WED",
  },
  {
    id: 3,
    date: 25,
    day: "THR",
  },
];

export default function Booth() {
  // DATE 관리-------------------------------------
  const day = new Date();
  const todate = day.getDate() === 24 ? 24 : day.getDate() === 25 ? 25 : 23;
  const [isToday, setIsToday] = useState(todate);
  // State 관리------------------------------------
  const [guideMessage, setGuideMessage] =
    useState("시작을 위해 지도를 클릭해주세요.");
  const [firstScene, setFirstScene] = useState(true);
  const [secondScene, setSecondScene] = useState(false);
  const [thirdLeftScene, setThirdLeftScene] = useState(false);
  const [thirdRightScene, setThirdRightScene] = useState(false);
  const [boothList, setBoothList] = useState(null);
  // ===========
  // Booth Modal 디폴트 -> 가운데 핀 index
  const [boothSector, setBoothSector] = useState(2);
  // Booth Modal Button 디폴트 -> 전체
  const [boothSectorDetail, setBoothSectorDetail] = useState(null);
  // ===========
  // 디폴트 -> 전체 부스 / 낮 -> 1 / 밤 -> 2
  const [dayOrNight, setDayOrNight] = useState("전체");
  const FirstMoved = useMemo(() => {
    return firstScene;
  }, [firstScene]);

  // ComponentDidMount----------------------------
  const fetchBooths = async () => {
    try {
      const getBoothList = await API.get(`/store/list`);
      setBoothList(getBoothList.data);
      const boothTop10 = await API.get(`/store/top`);
      // console.log("boothTop10", boothTop10);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    fetchBooths();
  }, []);

  // Function 관리---------------------------------
  const handleMap = () => {
    if (firstScene && !secondScene) {
      setGuideMessage("원하는 위치의 핀을 선택해주세요!");
      setFirstScene(false);
      setSecondScene(true);
    }
  };

  // 핀 핸들링 코드 축약---------------------------
  const leftPinHandling = useCallback(() => {
    setGuideMessage("전체 보기");
    setThirdLeftScene(true);
    setThirdRightScene(false);
    if (boothSectorArray[boothSector].length > 1) {
      setBoothSectorDetail(null);
    } else {
      setBoothSectorDetail(1);
    }
  }, [thirdLeftScene, thirdRightScene]);
  const rightPinHandling = useCallback(() => {
    setGuideMessage("전체 보기");
    setThirdRightScene(true);
    setThirdLeftScene(false);
    if (boothSectorArray[boothSector].length > 1) {
      setBoothSectorDetail(null);
    } else {
      setBoothSectorDetail(1);
    }
  }, [thirdLeftScene, thirdRightScene]);

  // 좌측 핀 클릭 핸들링----------------------------
  const handlePinLeft1 = useCallback(() => {
    leftPinHandling();
    setBoothSector(0);
  }, [thirdLeftScene, thirdRightScene]);
  const handlePinLeft2 = useCallback(() => {
    leftPinHandling();
    setBoothSector(1);
  }, [thirdLeftScene, thirdRightScene]);
  const handlePinLeft3 = useCallback(() => {
    leftPinHandling();
    setBoothSector(2);
  }, [thirdLeftScene, thirdRightScene]);
  // 우측 핀 클릭 핸들링----------------------------
  const handlePinRight1 = useCallback(() => {
    rightPinHandling();
    setBoothSector(3);
  }, [thirdLeftScene, thirdRightScene]);
  const handlePinRight2 = useCallback(() => {
    rightPinHandling();
    setBoothSector(4);
  }, [thirdLeftScene, thirdRightScene]);
  const handlePinRight3 = useCallback(() => {
    rightPinHandling();
    setBoothSector(5);
  }, [thirdLeftScene, thirdRightScene]);

  const handlePinCenter = () => {
    if (secondScene && (thirdLeftScene || thirdRightScene)) {
      setThirdLeftScene(false);
      setThirdRightScene(false);
      setBoothSector(2);
      setBoothSectorDetail(null);
      setGuideMessage("원하는 위치의 핀을 선택해주세요!");
    }
  };

  const boothSectorData = boothSectorArray[boothSector]?.map((sec, idx) => {
    let clickedLocation = false;
    if (sec.id === boothSectorDetail) {
      clickedLocation = true;
      return (
        <MapModalButton
          key={sec.id}
          clickedLocation={clickedLocation}
          onClick={() => setBoothSectorDetail(sec.id)}
        >
          {sec.location}
        </MapModalButton>
      );
    } else {
      clickedLocation = false;
      return (
        <MapModalButton
          key={sec.id}
          clickedLocation={clickedLocation}
          onClick={() => setBoothSectorDetail(sec.id)}
        >
          {sec.location}
        </MapModalButton>
      );
    }
  });

  const locationList = boothSectorArray[boothSector]?.map((loc) => {
    const selectedLocation = (
      <SelectedLocation
        key={loc.id}
        secondLeftMoved={thirdLeftScene}
        secondRightMoved={thirdRightScene}
      >
        {loc.location}
      </SelectedLocation>
    );
    if (loc.id === boothSectorDetail) {
      return selectedLocation;
    } else if (boothSectorDetail === null) {
      return selectedLocation;
    }
  });

  //
  return (
    <Container>
      {/* RankingSection------------------------- */}
      <RankingSection firstMoved={FirstMoved}>
        <RankingLeftSection>
          <RankingHotButton>HOT</RankingHotButton>
        </RankingLeftSection>
        <RankingRightSection>
          <BoothTop10 boothList={boothList} />
        </RankingRightSection>
      </RankingSection>
      {/* DateSection---------------------------- */}
      <DateSection firstMoved={FirstMoved} className="fadeIn">
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.date)}>
            <BoxDate isActive={isToday === i.date}>
              <DateNum>{i.date}</DateNum>
            </BoxDate>
            <BoxDay isActive={isToday === i.date}>
              <DateWeek>{i.day}</DateWeek>
            </BoxDay>
          </DayBox>
        ))}
      </DateSection>
      <MapContainer
        firstMoved={FirstMoved}
        onClick={handleMap}
        className="fadeIn"
      >
        {/* MapModalSection------------------------ */}
        <MapModalSection
          firstMoved={FirstMoved}
          secondScene={secondScene}
          secondLeftMoved={thirdLeftScene}
          secondRightMoved={thirdRightScene}
          className="fadeIn"
        >
          {/* {boothSectorArray[boothSector]?.length === 1 ? (
            boothSectorData
          ) : (
            <>
              <MapModalButton
                clickedLocation={boothSectorDetail === 0}
                onClick={() => setBoothSectorDetail(0)}
              >
                전체
              </MapModalButton>
              {boothSectorData}
            </>
          )} */}
          {boothSectorData}
        </MapModalSection>
        {/* MapSection----------------------------- */}
        <MapSection
          secondScene={secondScene}
          secondLeftMoved={thirdLeftScene}
          secondRightMoved={thirdRightScene}
        >
          <Image src={map} alt="campus_map" fill />
          <Pin1 onClick={handlePinLeft1} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin1>
          <Pin2 onClick={handlePinLeft2} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin2>
          <Pin3 onClick={handlePinLeft3} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin3>
          <Pin4 onClick={handlePinRight1} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin4>
          <Pin5 onClick={handlePinRight2} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin5>
          <Pin6 onClick={handlePinRight3} secondScene={secondScene}>
            <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
          </Pin6>
        </MapSection>
      </MapContainer>
      <br />
      {/* GuideLine------------------------------ */}
      <GuideMessage
        secondLeftMoved={thirdLeftScene}
        secondRightMoved={thirdRightScene}
        onClick={handlePinCenter}
      >
        {guideMessage}
      </GuideMessage>
      <br />
      <LocationTextSection>{locationList}</LocationTextSection>
      {/* GridSection---------------------------- */}
      <BoothFilterSection firstMoved={FirstMoved} className="fadeIn">
        <FilterSectionSub1
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("전체")}
        >
          전체
        </FilterSectionSub1>
        <FilterSectionSub2
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("주간부스")}
        >
          주간부스
        </FilterSectionSub2>
        <FilterSectionSub3
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("야간부스")}
        >
          야간부스
        </FilterSectionSub3>
        {/* 희찬 검색어 작업 연결------------------ */}
        {/* <FilterSectionInput placeholder="검색어를 입력해주세요" /> */}
      </BoothFilterSection>
      <BoothCardGridWrapper firstMoved={FirstMoved} className="FadeIn">
        <FilteredBooth
          boothList={boothList}
          dayOrNight={dayOrNight}
          isToday={isToday}
          boothSector={boothSector}
          boothSectorDetail={boothSectorDetail}
        />
        <EmptyFilteredSection>
          <EmptyFilteredIcon>
            <Image
              src={elephant}
              alt="elephant"
              fill
              style={{ objectFit: "cover" }}
            />
          </EmptyFilteredIcon>
          <EmptyFilteredBooth>조건에 맞는 부스가 없어요!</EmptyFilteredBooth>
        </EmptyFilteredSection>
      </BoothCardGridWrapper>
    </Container>
  );
}
