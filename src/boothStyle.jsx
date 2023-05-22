import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor, secondaryColor, subPinkColor } from "./pages/_app";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  z-index: 10;
  overflow: hidden;
`;
// 날짜 컨테이너
export const DateSection = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.firstMoved ? "none" : "")};
`;

export const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;
  cursor: pointer;
`;
// 준서------------------------------------------------
export const FadeInOut = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0.5;
  }
`;

export const RankingSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.firstMoved ? "" : "none")};
`;

export const RankingLeftSection = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

export const RankingRightSection = styled.section`
  width: 60%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const BoothTop10Box = styled.section`
  @keyframes moveBox {
    0% {
      top: -30px;
      opacity: 0;
      font-size: 0.3rem;
      font-weight: 100;
    }
    25% {
      top: 20px;
      opacity: 0.5;
      font-size: 0.6rem;
      font-weight: 300;
    }
    50% {
      top: 80px;
      opacity: 1;
      font-size: 1rem;
      font-weight: 900;
    }
    75% {
      top: 150px;
      opacity: 0.5;
      font-size: 0.6rem;
      font-weight: 300;
    }
    100% {
      top: 200px;
      opacity: 0.1;
      font-size: 0.3rem;
      font-weight: 100;
    }
  }
  width: 90%;
  height: 40px;
  position: absolute;
  display: flex;
  opacity: 0;
  justify-content: space-between;
  color: ${primaryColor};
  font-weight: 700;
  transition: all 0.5s;
  animation: moveBox 5s ease-in-out infinite;
  cursor: pointer;
`;

export const BoothTop10LeftBox = styled.section`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const BoothTop10RightBox = styled.section`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
`;

export const RankingHotButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: transparent;
  color: ${primaryColor};
  font-weight: 700;
  border: 1px solid ${primaryColor};
  border-radius: 30px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  transition: all 1s;
  margin-top: ${(props) => (props.firstMoved ? "0vh" : "-50px")};
  overflow: hidden;
`;

export const MapSection = styled.section`
  min-width: 100%;
  height: 300px;
  position: relative;
  transition: all 1s;
  margin-left: ${(props) =>
    props.secondLeftMoved && props.secondScene
      ? "80px"
      : props.secondRightMoved && props.secondScene
      ? "-110px"
      : ""};
  cursor: pointer;
  overflow: hidden;
`;

export const MapModalSection = styled.section`
  width: 90px;
  min-height: 50px;
  position: absolute;
  left: ${(props) =>
    !props.secondRightMoved && props.secondLeftMoved ? "3%" : "67%"};
  top: ${(props) =>
    !props.secondRightMoved && props.secondLeftMoved ? "33%" : "55%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: ${secondaryColor};
  border-radius: 30px;
  box-shadow: 3px 3px 20px -10px rgba(0, 0, 0, 0.7);
  padding: 5px;
  transition: all 1s;
  z-index: 10;
  display: ${(props) =>
    props.secondScene && (props.secondLeftMoved || props.secondRightMoved)
      ? "flex"
      : "none"};
  @media all and (max-width: 430px) {
    width: 80px;
    min-height: 30px;
  }
`;

export const MapModalButton = styled.button`
  width: 80px;
  min-height: 40px;
  border: none;
  border-radius: 30px;
  background-color: ${(props) =>
    props.clickedLocation ? `${secondaryColor}` : "transparent"};
  color: ${(props) => (props.clickedLocation ? "#fff" : `${secondaryColor}`)};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 10px;
  transition: all 0.5s;
  @media all and (max-width: 410px) {
    width: 60px;
    min-height: 30px;
  }
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Pin1 = styled.section`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 20%;
  bottom: 15%;
  animation: ${(props) =>
    props.secondScene
      ? css`
          ${FadeInOut} 2s infinite alternate 1s
        `
      : ""};
  &:hover {
    animation: "";
  }
`;

export const Pin2 = styled.section`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 25%;
  bottom: 35%;
  animation: ${(props) =>
    props.secondScene
      ? css`
          ${FadeInOut} 2s infinite alternate 2s
        `
      : ""};
  &:hover {
    animation: "";
  }
`;

export const Pin3 = styled.section`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 45%;
  bottom: 45%;
  animation: ${FadeInOut} 2s infinite alternate;
  &:hover {
    animation: "";
  }
`;

export const Pin4 = styled.section`
  /* 학생회관 4층 */
  width: 35px;
  height: 35px;
  position: absolute;
  left: 73%;
  bottom: 53%;
  animation: ${(props) =>
    props.secondScene
      ? css`
          ${FadeInOut} 2s infinite alternate 3s
        `
      : ""};
  &:hover {
    animation: "";
  }
`;

export const Pin5 = styled.section`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 62%;
  bottom: 45%;
  animation: ${(props) =>
    props.secondScene
      ? css`
          ${FadeInOut} 2s infinite alternate 4s
        `
      : ""};
  &:hover {
    animation: "";
  }
`;

export const Pin6 = styled.section`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 78%;
  bottom: 35%;
  animation: ${(props) =>
    props.secondScene
      ? css`
          ${FadeInOut} 2s infinite alternate 5s
        `
      : ""};
  &:hover {
    animation: "";
  }
`;

export const GuideMessage = styled.h3`
  width: 100%;
  text-align: center;
  color: ${primaryColor};
  font-weight: 700;
  font-size: 14px;
  animation: ${(props) =>
    props.secondLeftMoved || props.secondRightMoved
      ? ""
      : css`
          ${FadeInOut} 1s infinite alternate
        `};
  cursor: ${(props) =>
    props.secondLeftMoved || props.secondRightMoved ? "pointer" : ""};
`;

export const LocationTextSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 0 20px;
`;

export const SelectedLocation = styled.h1`
  font-size: 24px;
  color: ${secondaryColor};
  font-weight: 900;
  font-family: "Noto Sans KR", sans-serif;
  padding: 5px;
  display: ${(props) =>
    props.secondLeftMoved || props.secondRightMoved ? "inline" : "none"};
`;

export const BoothFilterSection = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: ${secondaryColor};
  margin-left: 15px;

  display: ${(props) => (props.firstMoved ? "none" : "flex")};
  @media all and (max-width: 420px) {
    font-size: 12px;
  }
`;

export const FilterSectionSub1 = styled.span`
  display: flex;
  align-items: center;
  height: 18px;
  border-right: 2px solid ${secondaryColor};
  padding: 10px;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) => (props.dayOrNight === "전체" ? `${primaryColor}` : "")};
`;

export const FilterSectionSub2 = styled.span`
  display: flex;
  align-items: center;
  height: 18px;
  border-right: 2px solid ${secondaryColor};
  padding: 10px;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) =>
    props.dayOrNight === "주간부스" ? `${primaryColor}` : ""};
`;

export const FilterSectionSub3 = styled.span`
  display: flex;
  align-items: center;
  height: 18px;
  padding: 10px;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  color: ${(props) =>
    props.dayOrNight === "야간부스" ? `${primaryColor}` : ""};
`;

export const FilterSectionInput = styled.input`
  width: 150px;
  height: 22px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  font-family: "Noto Sans KR", sans-serif;
  background-color: ${subPinkColor};
  margin-left: 5px;
`;

export const EmptyFilteredSection = styled.section`
  width: 100%;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const EmptyFilteredIcon = styled.section`
  width: 75px;
  height: 75px;
  position: relative;
  color: ${primaryColor};
`;

export const EmptyFilteredBooth = styled.p`
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  color: ${primaryColor};
`;

// 희찬------------------------------------------------
export const BoxDate = styled.span`
  color: ${(props) => (props.isActive ? "#FC8CAE" : "#525252")};
  margin-bottom: 5px;
  transition: all 0.3s;
  opacity: ${(props) => (props.isActive ? 1 : 0.9)};
`;

export const BoxDay = styled.span`
  font-size: 21px;
  margin-bottom: 7px;
  transition: all 0.3s;
  color: ${(props) => (props.isActive ? "#FC8CAE" : "#525252")};
`;

export const LocationImg = styled.img`
  margin-top: 1.8rem;
  margin-bottom: 10px;
  width: 90%;
`;

export const RecommandHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 70px;
  font-weight: bold;
  color: #fc8cae;
`;
export const RecommandTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 12px;
`;

// Search
export const SearchWrapper = styled.div`
  background-color: #fff;
`;

export const RecomandRowCardWrapper = styled.div`
  display: flex;
  width: 334px;
  height: 100px;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 1;
  flex-direction: row;
  padding: 10px 21px 10px 12px;
  margin-top: 14px;
  position: relative; /* 추가 */
`;

export const RankWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const RankText = styled.h1``;

export const RankBoothImage = styled(Image)`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 6px;
  margin-left: 10px;
  margin-right: 15px;
`;
export const RankBoothDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
  align-self: center;
  flex-grow: 1; /* 추가 */
`;

export const RankBoothDetailTitle = styled.h1`
  font-size: 14px;
  color: #525252;
  font-weight: 700;
  font-family: "yg-jalnan";
`;

export const RannkBoothDetailOperator = styled.p`
  font-size: 11px;
  font-family: "AppleSDGothicNeoM00";
  color: #979797;
  font-weight: 400;
  margin-top: 3px;
`;
export const RankBoothDetailLocation = styled.p`
  font-size: 11px;
  font-weight: 400;
  color: #fc8cae;
  margin-top: 5px;
`;
export const RankBoothHeartWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-left: 30px;

  position: absolute; /* 추가 */
  top: 50%; /* 추가 */
  right: 15px; /* 추가 */
  transform: translateY(-50%); /* 추가 */
`;

export const HeartWrapper = styled.div`
  display: flex;
`;
export const HeartCntWrapper = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 400;
  color: #979797;
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  width: 30px;
  margin-bottom: 3px;
  margin-top: 5px; /* 수정 */
`;
