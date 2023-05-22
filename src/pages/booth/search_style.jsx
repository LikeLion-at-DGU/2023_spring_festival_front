import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchContentWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
  color: #525252;
  font-size: 20px;
  font-weight: 600;
  z-index: 1;
  text-align: center;
`;
export const SearchContentHeader = styled.h1`
  font-size: 20px;
  color: #525252;
  margin-bottom: 25px;
`;
export const SearchNoResult = styled.h2`
  color: #979797;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const BoothCardWrapper = styled.div`
  position: relative; /* Add position relative */
  width: 160px;
  height: 200px;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
  margin: 10px auto;
  z-index: 1;
  overflow: hidden;
  transition: all 0.5s;
  /* 자식 요소 같이 반응형 적용 필요 */
  /* @media all and (max-width: 430px) {
    width: 128px;
    height: 160px;
  } */

  /* &::before {
    content: '';
    position: absolute;
    width: 96.13px;
height: 26.01px;
top : 9px;
left: -20px;
    background: #FFADDB;
    transform: rotate(-45deg);
    z-index: 2;
  } */
`;
export const Ribbon = styled.div`
  position: absolute;
  width: 96.13px;
  height: 26.01px;
  top: -110px;
  left: -30px;
  padding: 7px 0px 0px 13px;
  box-shadow: 1px 1px 2px rgba(41, 39, 39, 0.4);
  transform: rotate(-45deg);
  z-index: 2;
  color: #ffffff;
  font-family: yg-jalnan;
  font-size: 12px;

  padding-left: ${(props) =>
    props.pageType === 'booth' ? '31px' : '13px'};

  background-color: ${(props) => {
    switch (props.type) {
      case "푸드트럭":
        return "#71d570"; // Green color for 푸드트럭
      case "주간부스":
        return "#6b6bf9"; // Blue color for 주간부스
      case "플리마켓":
        return "#c782f8"; // Purple color for 플리마켓
      case "학교부스":
        return "#FFA665"; // Purple color for 플리마켓
      default:
        return "#FFADDB"; // Default color
    }
    
  }};
`;
export const BoothCardImage = styled(Image)`
  width: 160px;
  height: 160px;
  border-radius: 10px; /* Add border radius to match the wrapper */
`;

export const BoothCardGridWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px 10px;
  display: ${(props) => (props.firstMoved ? "none" : "grid")};
`;

export const BoothCardDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 125px; /* Adjust the top position as needed */
  left: 0px; /* Adjust the left position as needed */
  width: 160px;
  height: 75px;
  background: #ffffff;

  border-radius: 0px 0px 10px 10px;
  z-index: 1;
`;

export const BoothCardDetailDes = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-left: 12px;
  align-self: center;
  align-items: self-start;
  flex-grow: 1; /* 추가 */
`;

export const BoothCardDetailHeartWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-left: 30px;

  position: absolute; /* 추가 */
  top: 35%; /* 추가 */
  right: 10px; /* 추가 */
  transform: translateY(-50%); /* 추가 */
`;

export const CardDetailHeartIcon = styled(FontAwesomeIcon)`
  width: 30px;
  margin-bottom: 3px;
  margin-top: 5px; /* 수정 */
  color: #fc8cae;
`;
export const CardDetailHeartCntWrapper = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 400;
  color: #979797;
`;

export const RecomandBoothWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  padding: 0px 10px;
`;
export const RecommandBoothTitle = styled.h1`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #fc8cae;
`;
export const SearchContainer = styled.div`
  z-index: 1;
`;
