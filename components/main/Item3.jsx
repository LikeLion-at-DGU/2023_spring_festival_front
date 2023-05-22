import Image from "next/image";
import styled from "styled-components";
import img from "./item3.svg";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const Border = styled.div`
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`

const Img = styled(Image)`
    width: 100%;
    margin-top: 5px;
    position: absolute;
    top: -28px;
`

const InnerItem = styled.div`
    position: relative;
    width: 98%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    height: 320px;
`

const Content = styled.div`
    width: 82%;
    height: 120px;
    z-index: 20;
    display: flex;
    margin-top: -5px;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-device-width:370px) {
        width: 88%;
    }
`

const Now = styled.div`
    color : white;
    h1{
        font-family: "yg-jalnan";
        font-size: 30px;
        @media (max-device-width:380px) {
        font-size : 26px;
    }
    }
    h6{
        font-family: 'Noto Sans KR', sans-serif;
        margin-top: 7px;
        font-size: 20px;
        text-shadow: 0px 4px 4px #C9DEFF;
        font-weight: 500;
    }
`

export default function Item3(){
    const day = new Date();
    const date = day.getDate();

    return(
        <Container>
            <Border>
                <InnerItem>
                    <Img src={img} alt="item3"/>
                    <Content>
                        <Now>
                            <h1>{
                                date == 24 ? "Today's Line-Up" : date == 25 ? "Today's Line-Up" : "Coming Line-Up"
                                }</h1>
                            {date == 25 ? <>
                                <h6>YoungK</h6>
                                <h6>BE'O</h6>
                                <h6>BOL4</h6>
                                <h6>HIGHLIGHT</h6>
                            </> :
                            <>
                            <h6>(G)IDLE</h6>
                            <h6>GyeongSeo</h6>
                            <h6>PUNCH</h6>
                            <h6>YunDDanDDan</h6>
                            </>}
                        </Now>
                    </Content>
                </InnerItem>
            </Border>
        </Container>
    )
}