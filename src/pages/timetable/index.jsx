import { useState } from "react";
import styled from "styled-components";

const primaryColor = "#FC8CAE";
const secondaryColor = "#525252";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const DateSection = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
`;

const DateBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 900;
`;

const DateNum = styled.span`
  font-size: 36px;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
  color: ${primaryColor};
  font-family: "yg-jalnan";
`;

const DateWeek = styled.span`
  font-size: 14px;
  font-family: "yg-jalnan";
`;

const IconBox = styled.section`
  margin: 0 10px;
  font-size: 24px;
`;

const ToggleHeader = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-family: "yg-jalnan";
`;

const ToggleBox = styled.section`
  width: 100%;
  height: ${(props) => (props.isOpen ? "45vh" : "60px")};
  display: flex;
  box-shadow: 3px 3px 20px -10px rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  background-color: #fff;
  color: ${primaryColor};
  font-weight: 700;
  padding-left: 15px;
  transition: all 0.5s;
  cursor: pointer;
`;

export default function TimeTable() {
  // State 관리----------------------------------------
  const [performance, setPerformance] = useState(false);
  const [specialGuest, setSpecialGuest] = useState(true);

  // Function 관리-------------------------------------
  const handleShrink = () => {
    setPerformance(!performance);
  };
  const handleGrow = () => {
    setSpecialGuest(!specialGuest);
  };

  //
  return (
    <>
      <Container>
        <DateSection>
          <DateBox>
            <DateNum>24</DateNum>
            <DateWeek>WED.</DateWeek>
          </DateBox>
          <DateBox>
            <DateNum>25</DateNum>
            <DateWeek>THR.</DateWeek>
          </DateBox>
        </DateSection>
        <br /> <br />
        <ToggleBox onClick={handleShrink} isOpen={performance}>
          <ToggleHeader>
            <IconBox>▶</IconBox>
            PERFORMANCE
          </ToggleHeader>
        </ToggleBox>
        <br />
        <ToggleBox onClick={handleGrow} isOpen={specialGuest}>
          <ToggleHeader>
            <IconBox>▼</IconBox>
            SPECIAL GUEST
          </ToggleHeader>
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
