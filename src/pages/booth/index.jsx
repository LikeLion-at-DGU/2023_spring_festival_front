import { React, useState} from "react";


import styled from "styled-components";
import { motion } from 'framer-motion';
import { DateNum, DateWeek } from "../timetable";
import { BoxDate, BoxDay, Container, DateContainer, DayBox } from "./style";


// 날짜 배열 
const dayArray = [
  {
    id: 1,
    date: 23,
    day: 'TUE',
  },
  {
    id: 2,
    date: 24,
    day: 'WED',
  },
  {
    id: 3,
    date: 25,
    day: 'THR',
  },
];

export default function Booth(){
  // DATE 관련 
  // 27일부터 30일까지
  const day = new Date();
  const todate = day.getDate() - 23 === 2 ? 2 : day.getDate() - 23 === 3 ? 3 : 1;
  
  const [isToday, setIsToday] = useState(todate);



  return(
    <Container>
       <DateContainer>
        {/* api호출 방법 :/api/booths?day={day}&location={location} */}
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            
            <BoxDate isActive={isToday === i.id}><DateNum>{i.date}</DateNum></BoxDate>
            <BoxDay isActive={isToday === i.id}><DateWeek>{i.day}</DateWeek></BoxDay>
          </DayBox>
        ))}
      </DateContainer>


      
    </Container>
  )
}