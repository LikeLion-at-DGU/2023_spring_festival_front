import styled from 'styled-components';
import Image from 'next/image';

export const BoothDetailCotainer = styled.div`
margin-top: 25px;
z-index: 1;
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

