import styled, {keyframes}from "styled-components";
import Image from 'next/image';
import da from "../image/main/main_da.svg";
import si from "../image/main/main_si.svg";
import bom from "../image/main/main_bom.svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef } from "react";


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

const move = keyframes`
	//단계 별로 변화를 주는 코드
	0% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
  }
  50% {
    -webkit-transform: translateZ(100px) translateX(-24px) translateY(-24px);
            transform: translateZ(100px) translateX(-24px) translateY(-24px);
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
  }
`;

const move2 = keyframes`
    0% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
  }
  50% {
    -webkit-transform: translateZ(100px) translateX(24px) translateY(-24px);
            transform: translateZ(100px) translateX(24px) translateY(-24px);
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
  }
`;

const move3 = keyframes`
  0% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
  }
  50% {
    -webkit-transform: translateZ(100px) translateY(-24px);
            transform: translateZ(100px) translateY(-24px);
  }
  100% {
    -webkit-transform: translateZ(0) translateX(0) translateY(0);
            transform: translateZ(0) translateX(0) translateY(0);
  }
`;

const Img1 = styled(Image)`
position: absolute;
    top : -20px;
    right : 0;
    min-width: 220px;
    width: 74%;
    -webkit-animation: ${move} 20s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: ${move}  20s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation-delay: 1s;
    animation-iteration-count : infinite;
    will-change: opacity;
`


const Img2 = styled(Image)`
    min-width: 69%;
    width: 205px;
    position: absolute;
    top : 130px;
    left: 2%;
    -webkit-animation: ${move2} 24s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: ${move2} 24s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation-delay: 2s;
    animation-iteration-count : infinite;
    will-change: opacity;
`

const Img3 = styled(Image)`
    min-width: 210px;
    width: 68%;
    position: absolute;
    top : 340px;
    right: -5%;
    animation-delay: 3s;
    -webkit-animation: ${move3} 18s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: ${move3} 18s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation-delay: 5s;
    animation-iteration-count : infinite;
    will-change: opacity;
`

const Menu = styled(motion.div)`
    position: absolute;
    font-size: 26px;
    line-height: 1.25;
    top: 100px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media (max-device-height:680px) {
        top:16%;
        font-size: 23px;
    }
`

const MenuItem = styled(motion.div)`
    font-family: "yg-jalnan";
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

const tmove = keyframes`
    0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 0.1px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 0.2px 0 #cccccc, 0 2.5px 1.5px rgba(0, 0, 0, 0.3);
  }

`

const Title = styled.div`
    animation: ${tmove} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation-delay: 2s;
    position: absolute;
    top:480px;
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
        margin-bottom:20px;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 1.4rem;
    }
`

const boxVariants = {
    start: {
      opactiy: 0,
      scale: 0.5
    },
    end : {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.6,
        delayChildren: 0.6,  
        staggerChildren: 0.3,   

      },
    }
  }
  
  const circleVariants = {
    start : {
      opacity: 0,
      x : -15      
    },
    end : {
      opacity: 1,
      x : 0
    }
  }



export default function First(){
    const router = useRouter();
    const biggerBoxRef = useRef(null);

    return(
        <Container ref={biggerBoxRef}>
            <Menu variants={boxVariants} initial="start" animate="end">
                <MenuItem variants={circleVariants} onClick = {()=>router.push("/")}>main</MenuItem>
                <MenuItem variants={circleVariants} onClick = {()=>router.push("/notice")}>notice</MenuItem>
                <MenuItem variants={circleVariants} onClick = {()=>router.push("/timetable")}>timetable</MenuItem>    
                <MenuItem variants={circleVariants} onClick = {()=>router.push("/booth")}>booth</MenuItem>
                <MenuItem variants={circleVariants} onClick = {()=>router.push("/about")}>about</MenuItem>
            </Menu>
            <Date >
                <div>
                    23-25
                </div>
                <div>
                    MAY.2023
                </div>
            </Date>
            
              <Img1 
                src={da} alt="다" id="da"/>

            <Img2
          
              src={si} alt="사" id="si"/>
            <Img3 
              
              src={bom} alt="봄" id="bom"/>
            <Title>
                <h6>동국대학교 <br></br> 2023 봄 백상 대동제</h6>
                <h1>RE:SPRING</h1>
            </Title>
        </Container>
    )
}