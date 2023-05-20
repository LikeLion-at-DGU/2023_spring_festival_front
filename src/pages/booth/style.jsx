import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primaryColor } from "../_app";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  z-index: 1;
`;
// 날짜 컨테이너
export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const DayBox = styled.div`
  bottom: 0;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -2px;
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

export const TranslateToTop = keyframes`
  from {
    transform: translate(0, 0);
  } to {
    transform: translate(0, 15%);
  }
`;

export const RankingSection = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const RankingLeftSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid pink;
  padding-right: 10px;
`;

export const RankingRightSection = styled.section`
  width: 50%;
  height: 100%;
  border: 1px solid pink;
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

export const MapSection = styled.section`
  width: 100%;
  height: 30vh;
  cursor: pointer;
  position: relative;
`;

export const Pin1 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 20%;
  bottom: 15%;
`;

export const Pin2 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 25%;
  bottom: 35%;
`;

export const Pin3 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 45%;
  bottom: 45%;
  animation: ${FadeInOut} 1s infinite alternate;
`;

export const Pin4 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 65%;
  bottom: 45%;
`;

export const Pin5 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 73%;
  bottom: 53%;
`;

export const Pin6 = styled.section`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 78%;
  bottom: 40%;
`;

export const GuideMessage = styled.h3`
  width: 100%;
  text-align: center;
  color: ${primaryColor};
  font-weight: 700;
  font-size: 14px;
  animation: ${FadeInOut} 1s infinite alternate;
`;

// 희찬------------------------------------------------
export const BoxDate = styled.span`
  opacity: ${(props) => (props.isActive ? 1 : 0.9)};
  transition: all 0.3s;
  margin-bottom: 5px;
  color: ${(props) => (props.isActive ? "#FC8CAE" : "#525252")};
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
