import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BoothDetailCotainer = styled.div`
margin-top: 25px;
z-index: 1;
display: flex;
flex-direction: column;
`

export const BoothLogoImage = styled(Image)`
width: 334px;
height: 334px;
box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
border-radius: 10px;
`
export const BoothLogoWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 10px;
`
export const DetailRibbon = styled.div`
text-align: center;
    position: absolute;
    width: 147.83px;
    height: 40px;
    top : 10px;
    left: -40px;
    padding: 12px 10px 0px 5px;
    transform: rotate(-45deg);
    z-index: 2;
    color: #FFFFFF;
    font-family: yg-jalnan;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);

    background-color: ${(props) => {
    switch (props.type) {
      case '푸드트럭':
        return '#71d570'; // Green color for 푸드트럭
      case '주간부스':
        return '#6b6bf9'; // Blue color for 주간부스
      case '플리마켓':
        return '#c782f8'; // Purple color for 플리마켓
      default:
        return '#FFADDB'; // Default color
    }
  }};
`

export const BoothDetailHeader = styled.div`
margin-top: 31px;
display: flex;
flex-direction:  row;

`
export const BoothDetailOperator = styled.p`
  color:#656565;
  font-size: 14px;
  font-weight: 500;
  font-family: "Noto Sans KR";
  margin-bottom: 10px;
`

export const BoothDetailTitle = styled.h1`
  color:#545454;
  font-size: 28px;
  font-weight: 700;
  font-family: "yg-jalnan";
  margin-bottom: 5px;
  
`
export const BoothDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const BoothDetailLoveShareWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

export const DetailHeartWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const DetailHeart = styled(FontAwesomeIcon)`
  display: flex;
  color: #fc8cae;
  
`

export const DetailHeartCnt = styled.p`
color: #979797;
font-size: 12px;
margin-top: 5px;
text-align: center;
`

export const ShareIcon = styled(FontAwesomeIcon)`
display: flex;
margin-top: 10px;
align-self: flex-start;
margin-left: 13px;
color: #fc8cae;
`
export const BoothDetailContent = styled.div`

width: 334px;
padding: 10px 15px;
background: #FFF7F9;
border-radius: 10px;
margin-top: 13px;
font-family: "Noto Sans KR";
font-size: 14px;
font-family: 400;
line-height: 18.2px;

`