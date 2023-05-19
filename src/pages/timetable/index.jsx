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
  ToggleBox,
  ToggleHeader,
} from "./style";
import { ImgArray } from "./staticData";

export default function TimeTable() {
  const ImgData = [
    ImgArray.map((img) => (
      <Card key={img.id}>
        <Image src={img.src} alt={img.name} fill />
      </Card>
    )),
  ];

  // State 관리----------------------------------------
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [specialGuest, setSpecialGuest] = useState(true);
  const [mount, setMount] = useState(true);

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
    setTimeout(() => setMount(!mount), 500);
  }, []);

  //
  return (
    <>
      <Container>
        <DateSection>
          <DateBox date={firstDate} onClick={handleFirstDate}>
            <DateNum>24</DateNum>
            <DateWeek>WED.</DateWeek>
          </DateBox>
          <DateBox date={secondDate} onClick={handleSecondDate}>
            <DateNum>25</DateNum>
            <DateWeek>THR.</DateWeek>
          </DateBox>
        </DateSection>
        <br /> <br />
        <ToggleBox isOpen={performance} onClick={handleShrink}>
          <ToggleHeader>
            <IconBox>{performance ? "▼" : "▶"} </IconBox>
            PERFORMANCE
          </ToggleHeader>
        </ToggleBox>
        <br />
        <ToggleBox isOpen={specialGuest} delay={mount} onClick={handleGrow}>
          <ToggleHeader>
            <IconBox>{specialGuest ? "▼" : "▶"}</IconBox>
            SPECIAL GUEST
          </ToggleHeader>
          <LocationHeader isOpen={specialGuest}>
            <ImgBox>
              <Image src={Pin} alt="pin" fill />
            </ImgBox>
            대운동장
          </LocationHeader>
          <CardSection isOpen={specialGuest}>
            {[...ImgData]}
            {/* <Card>
              <Image src={Idle} alt="아이들" placeholder="blur" fill />
            </Card> */}
          </CardSection>
        </ToggleBox>
      </Container>
      <style jsx>{`
        * {
          font-family: "yg-jalnan";
        }
      `}</style>
    </>
  );
}
