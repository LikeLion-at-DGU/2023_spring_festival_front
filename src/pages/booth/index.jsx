import { React, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BoothFilterSection,
  BoxDate,
  BoxDay,
  Container,
  DateContainer,
  DateSection,
  DayBox,
  FilterSectionSub1,
  FilterSectionSub2,
  FilterSectionSub3,
  GuideMessage,
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
} from "./style";
import { DateNum, DateWeek } from "../timetable/style";
import Image from "next/image";
import map from "../../../components/image/booth/campus_map.svg";
import pin from "../../../components/image/booth/pin.png";
import { BoothCardGridWrapper } from "./search_style";
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
  // 23일 -> 1, 24일 -> 2, 25일 -> 3 인덱싱--------
  const todate = day.getDate() === 24 ? 2 : day.getDate() === 25 ? 3 : 1;
  const [isToday, setIsToday] = useState(todate);

  // State 관리------------------------------------
  const [guideMessage, setGuideMessage] = useState("시작을 위해 지도를 클릭해주세요.");
  const [firstScene, setFirstScene] = useState(true);
  const [secondScene, setSecondScene] = useState(false);
  const [isFocus, setIsFocus] = useState(0);

  const FirstMoved = useMemo(() => {
    return firstScene;
  }, [firstScene]);

  // Function 관리---------------------------------
  const handleMap = () => {
    setGuideMessage("원하시는 위치의 핀을 선택해주세요.");
    setFirstScene(false);
    setSecondScene(true);
  };

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
      {/* MapSection----------------------------- */}
      <MapSection onClick={handleMap} firstMoved={FirstMoved}>
        <Image src={map} alt="campus_map" fill />
        <Pin1 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin1>
        <Pin2 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin2>
        <Pin3 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin3>
        <Pin4 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin4>
        <Pin5 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin5>
        <Pin6 secondScene={secondScene}>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin6>
      </MapSection>
      <GuideMessage>{guideMessage}</GuideMessage>
      {/* GridSection---------------------------- */}
      <BoothFilterSection>
        <FilterSectionSub1 isFocus={isFocus} onClick={() => setIsFocus(0)}>
          전체
        </FilterSectionSub1>
        <FilterSectionSub2 isFocus={isFocus} onClick={() => setIsFocus(1)}>
          주간부스
        </FilterSectionSub2>
        <FilterSectionSub3 isFocus={isFocus} onClick={() => setIsFocus(2)}>
          야간부스
        </FilterSectionSub3>
      </BoothFilterSection>
      <BoothCardGridWrapper>
        <BoothCard name="코오오딩주점" operator="멋쟁이사자처럼" location="학생회관" />
      </BoothCardGridWrapper>
    </Container>
  );
}
