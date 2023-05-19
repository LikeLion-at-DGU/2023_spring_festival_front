import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0rem 9rem 0;
  z-index: 1;
  
`
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
`;

export const BoxDate = styled.span`
  opacity: ${(props) => (props.isActive ? 1 : 0.9)};
  transition: all 0.3s;
  margin-bottom: 5px;
  color: ${(props) => (props.isActive ? '#FC8CAE' : '#525252')};
`;

export const BoxDay = styled.span`
  font-size: 21px;
  margin-bottom: 7px;
  transition: all 0.3s;
  color: ${(props) => (props.isActive ? '#FC8CAE' : '#525252')};
`;

export const LocationImg = styled.img`
  margin-top: 1.8rem;
  margin-bottom: 10px;
  width: 90%;
`;
export const BuildingContainer = styled.div`
background-color: #ffffff;
border-radius: 20px;
margin-top: 10px;

`;

export const BuildingDetail = styled(motion.button)`
border: none;
align-items: center;
padding: 0px;
// 애플폰트
font-family: '';
font-size: 14px;
width: 71px;
height: 28px;
margin: 3px;
color: ${(props) => (props.isActive ? '#ffffff' : '#525252')};
background-color: ${(props) => (props.isActive ? '#525252' : '#ffffff')};

border-radius: 40px;


transition: 0.5s all;
`;


export const RecommandHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 70px;
  font-weight: bold;
  color: #FC8CAE;
`;
export const RecommandTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 12px;
`

// Search

export const SearchWrapper = styled.div`
background-color: #fff;
`

export const RecomandRowCardWrapper = styled.div`
  display: flex;
  width: 334px;
  height: 100px;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
  background-color: #FFFFFF;
  z-index: 1;
  flex-direction: row;
  padding : 10px 21px 10px 12px;
`

export const RankWrapper = styled.div`
display: flex;
align-items: center;
;
`
export const RankText = styled.h1`

`