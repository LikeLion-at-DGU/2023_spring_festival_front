import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BoxDate,
  BoxDay,
  Container,
  DateContainer,
  DayBox,
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

  // Function 관리---------------------------------
  const handleMap = () => {
    setGuideMessage("원하시는 위치의 핀을 선택해주세요.");
  };

  return (
    <Container>
      <RankingSection>
        <RankingLeftSection>
          <RankingHotButton>HOT</RankingHotButton>
        </RankingLeftSection>
        <RankingRightSection></RankingRightSection>
      </RankingSection>
      <MapSection onClick={handleMap}>
        <Image src={map} alt="campus_map" fill />
        <Pin1>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin1>
        <Pin2>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin2>
        <Pin3>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin3>
        <Pin4>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin4>
        <Pin5>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin5>
        <Pin6>
          <Image src={pin} alt="pin" fill style={{ objectFit: "cover" }} />
        </Pin6>
      </MapSection>
      <GuideMessage>{guideMessage}</GuideMessage>
    </Container>
  );
}

{
  /* <DateContainer>
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
</DateContainer>; */
}
