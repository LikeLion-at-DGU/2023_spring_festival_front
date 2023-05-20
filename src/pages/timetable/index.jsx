import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import Pin from "../../../components/image/timetable/pin.png";
import {
  Card,
  CardSection,
  Container,
  DateBox,
  DateNum,
  DateSection,
  DateWeek,
  IconBox,
  ImgBox,
  LocationHeader,
  TableBand,
  TableClock,
  TableIndex,
  TableSection,
  TimeTableBox,
  ToggleBox,
  ToggleHeader,
} from "./style";
import { ImgArray, performance24, performance25 } from "./staticData";

export default function TimeTable() {
  // State 관리----------------------------------------
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [specialGuest, setSpecialGuest] = useState(false);

  // DATE 관리-----------------------------------------
  const day = new Date();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const nowTime = parseInt(
    `${hours.toString().padStart(2, "0")}${minutes.toString().padStart(2, "0")}`,
    10
  );
  // 20일 오늘 기준 오늘이면 0, 하루 지났으면 1, 이틀 지났으면 2
  const todate = day.getDate() - 20 === 0 ? 0 : day.getDate() - 20 === 1 ? 1 : 2;
  const [isToday, setIsToday] = useState(todate);
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

  // Function 관리-------------------------------------
  const handleFirstDate = useCallback(() => {
    if (!firstDate) {
      setFirstDate(true);
      setSecondDate(false);
    }
  }, [firstDate]);

  const handleSecondDate = useCallback(() => {
    if (!secondDate) {
      setFirstDate(false);
      setSecondDate(true);
    }
  }, [secondDate]);

  const handleShrink = useCallback(() => {
    setPerformance(!performance);
  }, [performance]);

  const handleGrow = useCallback(() => {
    setSpecialGuest(!specialGuest);
  }, [specialGuest]);

  // ComponentDidMount--------------------------------
  useEffect(() => {
    setTimeout(() => setSpecialGuest(!specialGuest), 500);
  }, []);

  const Performance24Data = [
    performance24.map((perf) => {
      const start = parseInt(perf.startTime.replace(":", ""), 10);
      const end = parseInt(perf.endTime.replace(":", ""), 10);
      let isNow = false;
      if (start <= nowTime && nowTime <= end) {
        isNow = true;
      }
      return (
        <TableSection key={perf.index} isOpen={performance} isNow={isNow}>
          <TableIndex>{perf.index} </TableIndex>
          <TableClock isNow={isNow}>{perf.startTime + " - " + perf.endTime}</TableClock>
          <TableBand>{perf.name} </TableBand>
        </TableSection>
      );
    }),
  ];

  const ImgData = [
    ImgArray.map((img) => (
      <Card key={img.id}>
        <Image src={img.src} alt={img.name} fill placeholder="blur" />
      </Card>
    )),
  ];
  //
  return (
    <>
      <Container>
        <DateSection>
          <DateBox date={firstDate} onClick={handleFirstDate}>
            <DateNum>{dayArray[1].date} </DateNum>
            <DateWeek>{dayArray[1].day}</DateWeek>
          </DateBox>
          <DateBox date={secondDate} onClick={handleSecondDate}>
            <DateNum>{dayArray[2].date}</DateNum>
            <DateWeek>{dayArray[2].day}</DateWeek>
          </DateBox>
        </DateSection>
        <br /> <br />
        {/* PERFORMANCE-------------------------------------- */}
        <ToggleBox isOpen={performance} onClick={handleShrink} className="fadeIn">
          <ToggleHeader>
            <IconBox>{performance ? "▼" : "▶"} </IconBox>
            PERFORMANCE
          </ToggleHeader>
          <LocationHeader isOpen={performance}>
            <ImgBox>
              <Image src={Pin} alt="pin" fill style={{ objectFit: "cover" }} />
            </ImgBox>
            대운동장
          </LocationHeader>
          <br />
          <TimeTableBox>{[...Performance24Data]}</TimeTableBox>
        </ToggleBox>
        <br />
        {/* SPECIAL GUEST------------------------------------ */}
        <ToggleBox isOpen={specialGuest} onClick={handleGrow} className="fadeIn">
          <ToggleHeader>
            <IconBox>{specialGuest ? "▼" : "▶"}</IconBox>
            SPECIAL GUEST
          </ToggleHeader>

          <LocationHeader isOpen={specialGuest}>
            <ImgBox>
              <Image src={Pin} alt="pin" fill style={{ objectFit: "cover" }} />
            </ImgBox>
            대운동장
          </LocationHeader>
          <CardSection isOpen={specialGuest}>{[...ImgData]}</CardSection>
        </ToggleBox>
      </Container>
      {/* <style jsx>{`
        * {
          font-family: "yg-jalnan";
        }
      `}</style> */}
    </>
  );
}
