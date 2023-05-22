import styled, { keyframes } from "styled-components";
import { primaryColor, subPinkColor, secondaryColor } from "../_app";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 30px;
`;

export const DateSection = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
`;

export const DateBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 900;
  transition: all 0.5s;
  color: ${(props) => (props.date ? `${primaryColor}` : `${secondaryColor}`)};
  cursor: pointer;
`;

export const DateNum = styled.span`
  font-size: 36px;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
  font-family: "yg-jalnan";
`;

export const DateWeek = styled.span`
  font-size: 14px;
  font-family: "yg-jalnan";
`;

export const IconBox = styled.section`
  margin: 0 10px;
  font-size: 24px;
`;

export const PerfToggleBox = styled.section`
  width: 100%;
  height: ${(props) => (props.isOpen ? "500px" : "120px")};
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 20px -10px rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  background-color: #fff;
  font-weight: 700;
  padding-left: 15px;
  animation-delay: ${(props) => (props.delay ? `1s` : ``)};
  transition: all 0.5s;
  cursor: pointer;
`;

export const GuestToggleBox = styled.section`
  width: 100%;
  height: ${(props) => (props.isOpen ? "500px" : "60px")};
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 20px -10px rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  background-color: #fff;
  font-weight: 700;
  padding-left: 15px;
  animation-delay: ${(props) => (props.delay ? `1s` : ``)};
  transition: all 0.5s;
  cursor: pointer;
`;

export const ToggleHeader = styled.section`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  font-family: "yg-jalnan";
  color: ${primaryColor};
`;

export const ToggleSub = styled.section`
  width: 95%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background-color: ${subPinkColor};
  padding-left: 15px;
  display: ${(props) => (props.isOpen ? "none" : "")};
`;

export const SubItem1 = styled.section`
  width: 60px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  background-color: ${primaryColor};
  color: #fff;
  border-radius: 30px;
`;

export const SubItem2 = styled.span`
  color: ${primaryColor};
`;

export const SubItem3 = styled.span`
  color: ${secondaryColor};
`;

export const SubItem404 = styled.span`
  width: 95%;
  color: ${primaryColor};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const LocationHeader = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${secondaryColor};
  padding-left: 15px;
  display: ${(props) => (props.isOpen ? "" : "none")};
`;

export const TimeTableBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TableSection = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 35px;
  padding-left: 30px;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => (props.isNow ? `${subPinkColor}` : "")};
  margin-bottom: 3px;
  display: ${(props) => (props.isOpen ? "" : "none")};
  transition: all 0.5s;
  @media all and (max-width: 495px) {
    font-size: 14px;
    gap: 40px;
  }
`;

export const TableIndex = styled.section`
  color: ${primaryColor};
  font-weight: 300;
  font-family: "Noto Sans KR", sans-serif;
`;

export const TableClock = styled.section`
  color: ${(props) => (props.isNow ? `${primaryColor}` : "")};
  font-weight: 500;
  font-family: "Noto Sans KR", sans-serif;
  opacity: 0.7;
`;

export const TableBand = styled.section`
  color: ${secondaryColor};
  font-family: "Noto Sans KR", sans-serif;
`;

export const CardSection = styled.section`
  width: 95%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 5px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${primaryColor};
    border-radius: 10px;
  }
  display: ${(props) => (props.isOpen ? "" : "none")};
`;

export const ImgBox = styled.section`
  width: 25px;
  height: 25px;
  position: relative;
`;

export const Card = styled.div`
  min-width: 220px;
  min-height: 275px;
  position: relative;
  object-fit: cover;
`;
