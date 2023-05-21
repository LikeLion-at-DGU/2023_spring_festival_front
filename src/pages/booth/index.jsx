import { React, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BoothFilterSection,
  BoxDate,
  BoxDay,
  Container,
  DateContainer,
  DateSection,
  DayBox,
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
} from "./style";
import { DateNum, DateWeek } from "../timetable/style";
import Image from "next/image";
import map from "../../../components/image/booth/campus_map.svg";
import pin from "../../../components/image/booth/pin.png";
import { BoothCardGridWrapper } from "./search_style";
import { boothSectorArray, testBoothDataArray } from "./testData";
import FilteredBooth from "components/booth/FilteredBooth";
import BoothCard from "components/booth/BoothCard";

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
  // 23일 -> 1, 24일 -> 2, 25일 -> 3 --------------
  const todate = day.getDate() === 24 ? 2 : day.getDate() === 25 ? 3 : 1;
  const [isToday, setIsToday] = useState(todate);

  // State 관리------------------------------------
  const [guideMessage, setGuideMessage] = useState("시작을 위해 지도를 클릭해주세요.");
  const [firstScene, setFirstScene] = useState(true);
  const [secondScene, setSecondScene] = useState(false);
  const [thirdLeftScene, setThirdLeftScene] = useState(false);
  const [thirdRightScene, setThirdRightScene] = useState(false);
  // Booth Modal 디폴트 -> 가운데 핀 index
  const [boothSector, setBoothSector] = useState(2);
  // Booth Modal Button 디폴트 -> 전체
  const [boothSectorDetail, setBoothSectorDetail] = useState("");
  // 디폴트 -> 전체 부스 / 낮 -> 1 / 밤 -> 2
  const [dayOrNight, setDayOrNight] = useState("");
  const FirstMoved = useMemo(() => {
    return firstScene;
  }, [firstScene]);

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
  }, [thirdLeftScene, thirdRightScene]);
  const rightPinHandling = useCallback(() => {
    setGuideMessage("전체 보기");
    setThirdRightScene(true);
    setThirdLeftScene(false);
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
      setGuideMessage("원하는 위치의 핀을 선택해주세요!");
    }
  };

  const boothSectorData = boothSectorArray[boothSector]?.map((sec) => {
    let clickedLocation = false;
    if (sec.length === 1) {
      clickedLocation = true;
      return (
        <MapModalButton
          key={sec.id}
          clickedLocation={true}
          onClick={() => setBoothSectorDetail(sec.id)}
        >
          {sec.location}
        </MapModalButton>
      );
    } else if (sec.id === boothSectorDetail) {
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
    } else if (sec.id === 0) {
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
    if (loc.length > 1) {
      loc?.map((loc2) => {
        return (
          <SelectedLocation
            key={loc2.id}
            secondLeftMoved={thirdLeftScene}
            secondRightMoved={thirdRightScene}
          >
            {loc2.location}
          </SelectedLocation>
        );
      });
    } else {
      return (
        <SelectedLocation
          key={loc.id}
          secondLeftMoved={thirdLeftScene}
          secondRightMoved={thirdRightScene}
        >
          {loc.location}
        </SelectedLocation>
      );
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
        <RankingRightSection></RankingRightSection>
      </RankingSection>
      {/* DateSection---------------------------- */}
      <DateSection firstMoved={FirstMoved} className="fadeIn">
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}>
              <DateNum>{i.date}</DateNum>
            </BoxDate>
            <BoxDay isActive={isToday === i.id}>
              <DateWeek>{i.day}</DateWeek>
            </BoxDay>
          </DayBox>
        ))}
      </DateSection>
      <MapContainer firstMoved={FirstMoved} onClick={handleMap} className="fadeIn">
        {/* MapModalSection------------------------ */}
        <MapModalSection
          firstMoved={FirstMoved}
          secondScene={secondScene}
          secondLeftMoved={thirdLeftScene}
          secondRightMoved={thirdRightScene}
          className="fadeIn"
        >
          {boothSectorArray[boothSector]?.length === 1 ? (
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
          )}
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
        <FilterSectionSub1 dayOrNight={dayOrNight} onClick={() => setDayOrNight("")}>
          전체
        </FilterSectionSub1>
        <FilterSectionSub2 dayOrNight={dayOrNight} onClick={() => setDayOrNight("주간부스")}>
          주간부스
        </FilterSectionSub2>
        <FilterSectionSub3 dayOrNight={dayOrNight} onClick={() => setDayOrNight("야간부스")}>
          야간부스
        </FilterSectionSub3>
        {/* 희찬 검색어 작업 연결------------------ */}
        {/* <FilterSectionInput placeholder="검색어를 입력해주세요" /> */}
      </BoothFilterSection>
      <BoothCardGridWrapper firstMoved={FirstMoved} className="FadeIn">
        <FilteredBooth dayOrNight={dayOrNight} />
      </BoothCardGridWrapper>
    </Container>
  );
}
