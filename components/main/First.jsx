import styled, {keyframes}from "styled-components";
import Image from 'next/image';
import da from "../image/main/main_da.svg";
import si from "../image/main/main_si.svg";
import bom from "../image/main/main_bom.svg";
import Link from 'next/link';


const Container = styled.div`
    width: 100%;
    height: 85%;
    //border: 1.5px solid black;
    position: relative;
    /* @media (max-device-height:690px) {
        margin-top: -60px;
    }
    @media (max-device-height:690px) and (min-device-height:800px) {
        margin-top: -40px;
    }
    @media (min-device-height:800px) {
        margin-top: 30px;
    } */
`

const Img1 = styled(Image)`
    min-width: 220px;
    width: 74%;
    position: absolute;
    top : -20px;
    right : 0;
`

const Img2 = styled(Image)`
    min-width: 69%;
    width: 205px;
    position: absolute;
    top : 130px;
    left: 2%;
`

const Img3 = styled(Image)`
    min-width: 210px;
    width: 68%;
    position: absolute;
    top : 340px;
    right: -5%;
`

const Menu = styled.div`
    position: absolute;
    font-size: 26px;
    line-height: 1.25;
    top:100px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media (max-device-height:680px) {
        top:16%;
        font-size: 23px;
    }
    a{
        font-family: "yg-jalnan";
    }
`

const Date = styled.div`
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    text-align: right;
    position: absolute;
    right: 0;
    top:60px;
    z-index: 10;
    div{
        font-family: "yg-jalnan";
        font-size: 68px;
    }

`

const Title = styled.div`
    position: absolute;
    top:490px;
    h1{
        font-family: "yg-jalnan";
        width: 100%;
        font-size: 4rem;
        @media (max-device-width:347px) {
        font-size: 2.9rem;
        }
        @media (min-device-width:347px) and (max-device-width:361px) {
        font-size: 3.3rem;
        }
        @media (min-device-width:361px) and (max-device-width:391px) {
        font-size: 3.5rem;
        }
        @media (min-device-width:392px) and (max-device-width:425px) {
        font-size: 3.8rem;
        }
    }
    h6{
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 2rem;
    }
`



export default function First(){
    return(
        <Container>
            <Menu>
                <Link href="/" passHref>main</Link>
                <Link href="/notice" passHref>notice</Link>
                <Link href="/timetable" passHref>timetable</Link>    
                <Link href="/booth" passHref>booth</Link>
                <Link href="/about" passHref>about</Link>
            </Menu>
            <Date>
                <div>
                    23-25
                </div>
                <div>
                    MAY.2023
                </div>
            </Date>
            <Img1 src={da} alt="다"/>
            <Img2 src={si} alt="사"/>
            <Img3 src={bom} alt="봄"/>
            <Title>
                <h6>동국대학교 <br></br> 2023 봄 대동제</h6>
                <h1>RE:SPRING</h1>
            </Title>
        </Container>
    )
}