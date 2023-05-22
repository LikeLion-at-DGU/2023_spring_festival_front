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
    width: 82%;
    @media (max-device-width:360px) {
        width: 90%;
    }
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
    const day = new Date();
    const date = day.getDate();
    const hours = day.getHours();
    const minutes = day.getMinutes();

    const check24 = () => {
        if (hours < 16){
            return {
                now:"준비중",
                next:"만화열(밴드)"
            }
        }else if(hours == 16){
            if(minutes < 15){
                return {
                    now:"준비중",
                    next:"만화열(밴드)"
                }
            }else if(minutes < 40) {
                return {
                    now:"만화열(밴드)",
                    next:"쉽게 쓰여진 밴드"
                }
            }else{
                return {
                    now:"쉽게 쓰여진 밴드",
                    next:"잼잼"
                }
            }
        }else if(hours == 17){
            if(minutes < 20){
                return {
                    now:"잼잼",
                    next:"뭉게구름"
                }
            }else if(minutes < 40) {
                return {
                    now:"뭉게구름",
                    next:"렛츠무드"
                }
            }else{
                return {
                    now:"렛츠무드",
                    next:"목멱성"
                }
            }
        }else if(hours == 18){
            if(minutes < 5){
                return {
                    now:"렛츠무드",
                    next:"목멱성"
                }
            }else if(minutes < 30) {
                return {
                    now:"목멱성",
                    next:"피어리스던"
                }
            }else{
                return {
                    now:"피어리스던",
                    next:"두둠칫"
                }
            }
        }else if(hours == 19){
            if(minutes < 30){
                return {
                    now:"두둠칫",
                    next:"MC타임"
                }
            }else{
                return {
                    now:"MC타임",
                    next:"GyeongSeo"
                }
            }
        }else if(hours == 20){
            if(minutes < 30){
                return {
                    now:"GyeongSeo",
                    next:"YunDDanDDan"
                }
            }else{
                return {
                    now:"YunDDanDDan",
                    next:"PUNCH"
                }
            }
        }else if(hours == 21){
            if(minutes < 30){
                return {
                    now:"PUNCH",
                    next:"(G)IDLE"
                }
            }else{
                return {
                    now:"(G)IDLE",
                    next:"Next Day"
                }
            }
        }else if(hours >= 22){
            return{
                now:"Coming Soon...",
                next:"Next Day"
            }
        }
    }

    const check25 = () => {
        if (hours < 15){
            return {
                now:"준비중",
                next:"무풍"
            }
        }else if(hours == 15){
            if(minutes < 40){
                return {
                    now:"준비중",
                    next:"무풍"
                }
            }else if(minutes < 40) {
                return {
                    now:"무풍",
                    next:"ODC"
                }
            }else{
                return {
                    now:"쉽게 쓰여진 밴드",
                    next:"잼잼"
                }
            }
        }else if(hours == 16){
            if(minutes < 10){
                return {
                    now:"무풍",
                    next:"ODC"
                }
            }else if(minutes < 40) {
                return {
                    now:"ODC",
                    next:"아리랑"
                }
            }else{
                return {
                    now:"아리랑",
                    next:"AJAX"
                }
            }
        }else if(hours == 17){
            if(minutes < 10){
                return {
                    now:"아리랑",
                    next:"AJAX"
                }
            }else if(minutes < 40) {
                return {
                    now:"AJAX",
                    next:"음샘"
                }
            }else{
                return {
                    now:"음샘",
                    next:"백상"
                }
            }
        }else if(hours == 18){
                return {
                    now:"백상",
                    next:"MC타임"
                }
        }else if(hours == 19){
            if(minutes < 40){
                return {
                    now:"백상",
                    next:"MC타임"
                }
            }else{
                return {
                    now:"MC타임",
                    next:"Young K"
                }
            }
        }else if(hours == 20){
            if(minutes < 30){
                return {
                    now:"YoungK",
                    next:"BE'O"
                }
            }else{
                return {
                    now:"BE'O",
                    next:"BOL4"
                }
            }
        }else if(hours == 21){
            if(minutes < 10){
                return {
                    now:"BE'O",
                    next:"BOL4"
                }
            }else{
                return {
                    now:"BOL4",
                    next:"HIGHLIGHT"
                }
            }
        }else if(hours == 22){
            if(minutes < 40){
                return {
                    now:"HIGHLIGHT",
                    next:""
                }
            }else{
                return {
                    now:"See You Next Time",
                    next:""
                }
            }
        }else if(hours >= 23){
            return {
                now:"See You Next Time",
                next:""
            }
        }
    }
    
    
    return(
        <Container>
            <Border>
                <InnerItem>
                    <Img src={img} alt="item2"/>
                    <Content>
                        {
                            date == 24 ? 
                            /* 24 */
                            <>
                            <Now>
                                <h1>Now</h1>
                                <h6>{check24().now}</h6>
                            </Now>
                            <NowFooter>
                                <FooterLeft>
                                    <span>Coming Next</span>
                                    <span>{check24().next}</span>
                                </FooterLeft>
                                <FooterGo onClick={()=>{router.push("/timetable")}}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </FooterGo>
                            </NowFooter>
                            </>
                            :
                            date == 25 ? 
                            /* 25 */
                            <>
                            <Now>
                                <h1>Now</h1>
                                <h6>{check25().now}</h6>
                            </Now>
                            <NowFooter>
                                <FooterLeft>
                                    <span>Coming Next</span>
                                    <span>{check25().next}</span>
                                </FooterLeft>
                                <FooterGo onClick={()=>{router.push("/timetable")}}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </FooterGo>
                            </NowFooter>
                            </>
                            :
                            /* 23 */
                            <>
                            <Now>
                                <h1>Now</h1>
                                <h6>Coming Soon...</h6>
                            </Now>
                            <NowFooter>
                                <FooterLeft>
                                    <span>Coming Next</span>
                                    <span>Next Day</span>
                                </FooterLeft>
                                <FooterGo onClick={()=>{router.push("/timetable")}}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </FooterGo>
                            </NowFooter>
                            </>
                        }
                        
                    </Content>
                </InnerItem>
            </Border>
        </Container>
    )
}