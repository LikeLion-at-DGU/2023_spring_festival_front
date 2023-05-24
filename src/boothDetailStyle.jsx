import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BoothDetailCotainer = styled.div`
margin-top: 25px;
width: 336px;
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
        return '#71D86F'; 
      case '야간부스':
        return '#579AFF'; 
      case '외부부스':
        return '#DF8CFC'; 
      case '학교부스':
        return "#FFA665"
      default:
        return '#FFADDB'; 
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

export const BoothDetailSeparator = styled.hr`
  width: 334px;
  border: 1px solid #D2D2D2;
  margin: 24px 0px;
`;




export const BoothDetailLocation = styled.div`
margin-top: 20px;
  color:#656565;
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
`

export const BoothDetailTime = styled.div`
  color: #656565;
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
  
`
export const BoothDetailMenuWrapper = styled.div`
  
`
export const BoothDetailMenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 30px;
`
export const BoothDetailMenuTitle = styled.p`
  font-family: "yg-jalnan";
  font-size: 18px;
  

`
export const BoothDetailMenuAllSee = styled.p`
color:#656565;
font-weight: 500;
`
export const BoothMenuImage = styled(Image)`
  display: flex;
  flex: 0 0 auto;
  margin-right: 10px;
  scroll-snap-align: start;
  margin: 20px 5px;
  width: 250px;
  border-radius: 10px;
  height: 250px;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
`
export const BoothImageWrapper = styled.div`
  display: flex;
`

export const BoothImageSlider = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
  }
`

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
 `

 export const CommentInputWrapper = styled.form`
  display: flex;
  margin-top: 15px;
  color: #6B6B6B;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
 `

export const CommentInfWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`
export const CommentId = styled.p`
flex-grow: 1;
`
export const CommentPassword = styled.p`
margin-left: 10px;
flex-grow: 1;
  
`
export const CommentContent = styled.p`
  display: flex;
  align-items: center;
  position: relative;
`

export const CommentInput = styled.input`
  margin-left: 10px;
  height: 30px;
  width: 100px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  padding-left: 10px;

  &::placeholder {
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #CBCBCB;
  }
  
`
export const CommentContentInput = styled.input`
  margin-top: 10px;
  padding: 7px;
  width: 333px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  height: 30px;
  resize: none;
  padding-left: 13px;
  overflow-y: hidden; /* Add this line to remove horizontal scroll */


  &::placeholder {
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #CBCBCB;
  }
`

export const CommentBtn = styled.button`
position: absolute;
  right: 20px;
  top: 65%;
  transform: translateY(-50%);
  background: white;
  border: none;
  color : #FC8CAE;
  font-weight: 500;
  font-size: 14px;

`

export const CommentWran = styled.span`
margin-top: 10px;
margin-left: 3px;
margin-bottom: 24px;
font-weight: 400;
font-size: 12px;
`
export const CommentHr = styled.hr`

  width: 334px;

  border: 1px solid #F5F5F5;
`

export const CommentListWrapper = styled.div`
`
export const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const CommentCardFirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`
export const NameDate = styled.div`
  color : #808080;
  font-weight: 400;
  
  font-size: 12px;

`
export const CommentCardSecondRow = styled.div`
  font-size: 14px;
  background: #FFE9F0;
  border-radius: 10px;
  height: 64px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 10px;
  
  
`

export const ReplyDelete = styled.div`
  display: flex;
  color: #FC8CAE;
`

export const ReplyContent = styled.div`

`

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`
export const ReplyFrist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ReplySecond = styled.div`
  display: flex;
  margin-top: 7px;
  flex-grow:1;
`

export const ReplyInputContent = styled.input`
  display: flex;
  border: 1px solid #C4C4C4;
  margin-top: 10px;
  padding: 7px;
  width: 320px;
  border-radius: 20px;
  height: 30px;
  resize: none;
  margin-right: 10px;
  &::placeholder {
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #CBCBCB;
    padding-left: 13px;
  }
`
export const ReplyContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
export const ReplyInputContentBtn = styled.button`
  width: 40px;
  margin-right: 10px;
  height: 28px;
  background: #FC8CAE;
  color:#FFFFFF;
/* Main */

  border: 1px solid #FC8CAE;
  border-radius: 20px;
  font-size:12px;
`
export const ReplyForm = styled.form`
margin-top: 10px;
background: #FFE9F0;
border-radius: 10px;
height: 86px;
zoom: 0.8;
padding-left: 20px;
`
export const ReplyCommentId = styled.p`
  color : #808080;
  font-size: 12px;
  
`
export const ReplyCommentInfWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top : 10px;
`
export const ReplyFromContainer = styled.div`
display: flex;
flex-direction: row;
`

export const ModalDelWrapper = styled.div`
padding-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ModalDelHeader = styled.h1`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  font-family: "yg-jalnan";

`

export const ModalDelDes = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  
`

export const ModalDelInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  padding-left: 10px;
  margin-bottom: 20px;
`

export const ModalDelBtnWrapper = styled.div`

`
export const MdoalBtn = styled.button`
background-color: #FC8CAE;
border: 1px solid #FC8CAE;
font-size: 14px;
color : white;
border-radius: 10px;
font-weight: 500;
padding : 5px 10px;
margin: 10px;

`