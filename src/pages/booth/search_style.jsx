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
  width: 160px;
  height: 200px;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
  margin: 10px 12px 10px 12px;
`;
export const BoothCardImage = styled(Image)`
  position: relative; /* Add position relative */
  width: 160px;
  height: 200px;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
  margin: 10px 12px 10px 12px;
`;

export const BoothCardGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  border: 1px solid pink;
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
