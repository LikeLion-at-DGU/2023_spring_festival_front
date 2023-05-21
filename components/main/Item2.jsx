import Image from "next/image";
import styled from "styled-components";
import img from "./item2.svg";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    height: 330px;
`

const Content = styled.div`
    
    width: 80%;
    height: 110px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Now = styled.div`
    color : white;
    h1{
        font-family: "yg-jalnan";
        font-size: 30px;
    }
    h6{
        font-family: 'Noto Sans KR', sans-serif;
        margin-top: 2px;
        font-size: 20px;
        text-shadow: 0px 4px 4px #C68EFF;
        font-weight: 500;
    }
`

const NowFooter = styled.div`
    color : white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FooterLeft = styled.div`
    span:first-child{
        font-family: "yg-jalnan";
    }
    span:last-child{
        font-family: 'Noto Sans KR', sans-serif;
        margin-left: 4px;
        text-shadow: 0px 4px 4px #C68EFF;
    }
`

const FooterGo = styled.div`
    border-radius: 50%;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
`

export default function Item2(){
    const router = useRouter();
    return(
        <Container>
            <Border>
                <InnerItem>
                    <Img src={img} alt="item2"/>
                    <Content>
                        <Now>
                            <h1>Now</h1>
                            <h6>뭉게구름</h6>
                        </Now>
                        <NowFooter>
                            <FooterLeft>
                                <span>Coming Next</span>
                                <span>야간부스</span>
                            </FooterLeft>
                            <FooterGo onClick={()=>{router.push("/timetable")}}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </FooterGo>
                        </NowFooter>
                    </Content>
                </InnerItem>
            </Border>
        </Container>
    )
}