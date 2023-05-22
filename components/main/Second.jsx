import styled from "styled-components";
import Card from "./Card";


const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    @media (max-device-height:820px) {
        margin-top: 15px;
    }
    justify-content: flex-end;
`

const Title = styled.h1`
    font-family: "yg-jalnan";
    font-size: 2rem;
    margin-top: 50px ;
    color : #525252;

    span{
        font-family: "yg-jalnan";
        color : #FC8CAE;
    }
`

const MinTitle = styled.h6`
    span{
        color : #FFBACF;
        font-family: 'Noto Sans KR', sans-serif;
    }
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5rem;
    color : #979797;
    font-weight: 600;
    margin-top: 10px;
    @media (max-device-width:340px) {
        font-size: 1.3rem;
    }
`

const DayNow = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 3vh;
    margin-bottom: 1vh;
    @media (max-device-width:380px) {
        width: 60%;
    }
`

const DateBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 900;
  transition: all 0.5s;
  color: ${(props) => (props.date == true  ? "#FC8CAE" : "#FFE9F0")};
`;

const DateNum = styled.span`
  font-size: 38px;
  text-shadow: ${(props) => (props.date == true  ? "2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15)" : "none")};
  font-family: "yg-jalnan";
`;

const DateWeek = styled.span`
  font-size: 16px;
  font-family: "yg-jalnan";
  text-shadow: ${(props) => (props.date == true  ? "2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15)" : "none")};
`;

const Content = styled.div`
    width: 100%;
    height: 64%;
    min-height: 370px;
    margin-bottom: 30px;
`




export default function Second(){
    const day = new Date();
    // todate는 24일에 24, 25일에 25, 그 외(28일)에는 23
    const todate = day.getDate() - 23 === 2 ? 25 : day.getDate() - 23 === 1 ? 30 : 23;
    return(
        <Container>
            <Title>
                축제 <span>한눈에</span> 보기
            </Title>
            <MinTitle>
                <span>축제사이트</span>로 400% 즐겨요!
            </MinTitle>
            <DayNow>
                <DateBox date={todate == 23}>
                    <DateNum date={todate == 23}>23</DateNum>
                    <DateWeek date={todate == 23}>TUE</DateWeek>
                </DateBox>
                <DateBox date={todate == 24}>
                    <DateNum date={todate == 24}>24 </DateNum>
                    <DateWeek date={todate == 24}>WED</DateWeek>
                </DateBox>
                <DateBox date={todate == 25}>
                    <DateNum date={todate == 25}>25</DateNum>
                    <DateWeek date={todate == 25}>THR</DateWeek>
                </DateBox>
            </DayNow>
            <Content>
                <Card/>
            </Content>
        </Container>
    )
}