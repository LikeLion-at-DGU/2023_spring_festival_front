import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BoxDate,
  BoxDay,
  Container,
  DateContainer,
  DayBox,
  MapSection,
  RankingSection,
} from "./style";
import { DateNum, DateWeek } from "../timetable/style";

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

  return (
    <Container>
      <RankingSection></RankingSection>
      <MapSection></MapSection>
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
