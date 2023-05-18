import styled from "styled-components";

const primaryColor = "#FC8CAE";
const secondaryColor = "#525252";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  z-index: 1;
`;

const DateSection = styled.section`
  width: 100%;
  height: 120px;
  border: 1px solid black;
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
`;

const DateWeek = styled.span`
  font-size: 14px;
`;

export default function TimeTable() {
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
      </Container>
      <style jsx>{`
        * {
          font-family: "yg-jalnan";
        }
      `}</style>
    </>
  );
}
