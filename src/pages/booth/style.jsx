import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
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
export const RankingSection = styled.section`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const MapSection = styled.section`
  width: 100%;
  height: 40vh;
  border: 1px solid black;
`;

export const GuideBox = styled.h3``;

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
  margin-top: 30px;
  margin-bottom: 10px;
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
  width: 20px;
  margin-bottom: 3px;
`;
