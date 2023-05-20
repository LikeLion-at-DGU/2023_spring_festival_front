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
  GuestToggleBox,
  IconBox,
  ImgBox,
  LocationHeader,
  PerfToggleBox,
  SubItem1,
  SubItem2,
  SubItem3,
  TableBand,
  TableClock,
  TableIndex,
  TableSection,
  TimeTableBox,
  ToggleHeader,
  ToggleSub,
} from "./style";
import {
  Guest24Array,
  Guest25Array,
  dayArray,
  performance24Array,
  performance25Array,
} from "./staticData";
import Performance404 from "components/timetable/Performance404";

export default function TimeTable() {
  // DATE 관리-----------------------------------------
  const day = new Date();
  const date = day.getDate();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const nowTime = parseInt(
    `${hours.toString().padStart(2, "0")}${minutes.toString().padStart(2, "0")}`,
    10
  );
  let nowPerformance24 = false;
  let nowPerformance25 = false;

  // State 관리----------------------------------------
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [specialGuest, setSpecialGuest] = useState(false);
  const [clickedDate, setClickedDate] = useState(date);

  // ComponentDidMount--------------------------------
  useEffect(() => {
    setTimeout(() => setSpecialGuest(true), 500);
  }, []);

  // Function 관리-------------------------------------
  const handleFirstDate = useCallback(() => {
    if (!firstDate) {
      setFirstDate(true);
      setSecondDate(false);
      setClickedDate(dayArray[0].date);
    }
  }, [firstDate]);

  const handleSecondDate = useCallback(() => {
    if (!secondDate) {
      setFirstDate(false);
      setSecondDate(true);
      setClickedDate(dayArray[1].date);
    }
  }, [secondDate]);

  const handleShrink = useCallback(() => {
    setPerformance(!performance);
  }, [performance]);

  const handleGrow = useCallback(() => {
    setSpecialGuest(!specialGuest);
  }, [specialGuest]);

  const Performance24Thumbnail = performance24Array.map((perf) => {
    const start = parseInt(perf.startTime.replace(":", ""), 10);
    const end = parseInt(perf.endTime.replace(":", ""), 10);
    if (start <= nowTime && nowTime <= end) {
      nowPerformance24 = true;
      return (
        <ToggleSub isOpen={performance} key={perf.index}>
          <SubItem1>NOW</SubItem1>
          <SubItem2>{perf.startTime + "-" + perf.endTime}</SubItem2>
          <SubItem3>{perf.name}</SubItem3>
        </ToggleSub>
      );
    }
  });

  const Performance25Thumbnail = performance25Array.map((perf) => {
    const start = parseInt(perf.startTime.replace(":", ""), 10);
    const end = parseInt(perf.endTime.replace(":", ""), 10);
    if (start <= nowTime && nowTime <= end) {
      nowPerformance25 = true;
      return (
        <ToggleSub isOpen={performance} key={perf.index}>
          <SubItem1>NOW</SubItem1>
          <SubItem2>{perf.startTime + "-" + perf.endTime}</SubItem2>
          <SubItem3>{perf.name}</SubItem3>
        </ToggleSub>
      );
    }
  });

  const Performance24Data = [
    performance24Array.map((perf) => {
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

  const Performance25Data = [
    performance25Array.map((perf) => {
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

  const Guest24Data = [
    Guest24Array.map((img) => (
      <Card key={img.id}>
        <Image src={img.src} alt={img.name} fill placeholder="blur" />
      </Card>
    )),
  ];

  const Guest25Data = [
    Guest25Array.map((img) => (
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
            <DateNum>{dayArray[0].date} </DateNum>
            <DateWeek>{dayArray[0].day}</DateWeek>
          </DateBox>
          <DateBox date={secondDate} onClick={handleSecondDate}>
            <DateNum>{dayArray[1].date}</DateNum>
            <DateWeek>{dayArray[1].day}</DateWeek>
          </DateBox>
        </DateSection>
        <br /> <br />
        {/* PERFORMANCE-------------------------------------- */}
        <PerfToggleBox isOpen={performance} onClick={handleShrink} className="fadeIn">
          <ToggleHeader>
            <IconBox>{performance ? "▼" : "▶"} </IconBox>
            PERFORMANCE
          </ToggleHeader>
          {clickedDate <= dayArray[0].date ? Performance24Thumbnail : Performance25Thumbnail}
          <Performance404
            nowPerf24={nowPerformance24}
            nowPerf25={nowPerformance25}
            clickedDate={clickedDate}
            isOpen={performance}
          />
          <LocationHeader isOpen={performance}>
            <ImgBox>
              <Image src={Pin} alt="pin" fill style={{ objectFit: "cover" }} />
            </ImgBox>
            대운동장
          </LocationHeader>
          <br />
          <TimeTableBox>
            {clickedDate <= dayArray[0].date ? [...Performance24Data] : [...Performance25Data]}
          </TimeTableBox>
        </PerfToggleBox>
        <br />
        {/* SPECIAL GUEST------------------------------------ */}
        <GuestToggleBox isOpen={specialGuest} onClick={handleGrow} className="fadeIn">
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
          <CardSection isOpen={specialGuest}>
            {clickedDate <= dayArray[0].date ? [...Guest24Data] : [...Guest25Data]}
          </CardSection>
        </GuestToggleBox>
      </Container>
      {/* <style jsx>{`
        * {
          font-family: "yg-jalnan";
        }
      `}</style> */}
    </>
  );
}
