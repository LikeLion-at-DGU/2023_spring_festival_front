import Image from "next/image";
import styled from "styled-components";
import about_da from '/components/image/about/about_da.svg';
import about_si from 'components/image/about/about_si.svg';
import about_bom from 'components/image/about/about_bom.svg';
import dgu from 'components/image/about/about_dgu.svg';
import dstuco from 'components/image/about/about_dstuco.svg';
import bamboo from 'components/image/about/about_bamboo_logo.svg';
import devocean from 'components/image/about/about_devocean.svg';
import leeyungnseo from 'components/image/about/about_leeyoungseo.svg';
import yeowon from 'components/image/about/about_yeowon.svg';
import yeowon2 from 'components/image/about/about_yeowon2.svg';
import sangdon from 'components/image/about/about_sangdon2.svg';
import sangdon2 from 'components/image/about/about_sangdon.svg';
import heechan from 'components/image/about/about_heechan.svg';
import seulgi from 'components/image/about/about_seulgi.svg';
import junseo from 'components/image/about/about_junseo.svg';
import yuseong from 'components/image/about/about_yuseong.svg';
import sangjoon from 'components/image/about/about_sangjoon.svg';
import jenny from 'components/image/about/about_jenny.svg';
import youngsin from 'components/image/about/about_youngsin.svg';
import sooyoung from 'components/image/about/about_sooyoung.svg';
import yoonyoungseo from 'components/image/about/about_yoonyoungseo.svg';
import line1 from 'components/image/about/about_line1.svg';
import line2 from 'components/image/about/about_line2.svg';
import line3 from 'components/image/about/about_line3.svg';
import line4 from 'components/image/about/about_line4.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';

const Container = styled.div`
  z-index: 10;
`

const Text1 = styled.div`
  font-family: 'AppleSDGothicNeoL00';
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #525252;

  margin-top: 80px;
`

const Text1_border = styled.div`
  color: #525252;
  font-family: 'AppleSDGothicNeoM00';
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;

  white-space: pre;
  display: inline;
  z-index: -1;
`

const Img1 = styled(Image)`
position: absolute;
left: 3%;
top: 370px;
`
const Img2 = styled(Image)`
position: absolute;
left: 56%;
top: 420px;
`
const Img3 = styled(Image)`
position: absolute;
left: 77%;
top: 410px;
`
const LargeText = styled.div`
font-family: 'ygotjalnanfont';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 48px;

letter-spacing: 0.125em;
color: #FFE9F0;
margin-top:300px;
margin-left: 20px;
`

const LogoImg = styled(Image)`
margin-top: 100px;
display: inline-block;
margin-right:10px;
margin-bottom: 10px;
margin-left:20px;
width: 30%;
`
const Text2 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
margin-bottom: 20px;
letter-spacing: -0.02em;
display: inline-block;
`
const Text3 = styled.div`
font-family: 'AppleSDGothicNeoL00';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #979797;
letter-spacing: -0.02em;
margin-top: 80px;
margin: 20px;
`
const Text4 = styled.a`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #FC8CAE;
letter-spacing: -0.02em;
text-decoration-line: underline;
margin-left: 20px;
`

const LargeText2 = styled.div`
font-family: 'ygotjalnanfont';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 44px;
color: #FFE9F0;
letter-spacing: 0.125em;
text-align: center;
margin-top: 200px;
margin-bottom: 80px;
`
const Gradation = styled.div`
width: 100%;
margin-left: -24px;
height: 300px;
background: linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, rgba(255, 233, 240, 0.892708) 3  0.83%, rgba(255, 233, 240, 0) 100%);
z-index:-10;
position: absolute;
`
const SmallTitle = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 29px;
letter-spacing: -0.447096px;
color: #525252;
padding-bottom:16px;

`
const SmallText = styled.a`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 19px;
color: #727272;
`
const Box = styled.div`
display: inline-block;
margin-bottom: 20px;
margin-left: 40px;
position: relative;

`
const Box2 = styled.div`
position: relative;
left: 5%;
z-index:10;
margin-top: 20px;
`
const Box3 = styled.div`
position: relative;
left: 5%;
z-index:10;
margin-bottom: 200px;
`
const SmallTitle2 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
color: #FC8CAE;
letter-spacing: -0.466392px;
text-align: center;
margin-top: 30px;
`
const LogoImg2 = styled(Image)`
display: inline-block;
margin-left:40px;
padding-top: 10px;
`
const LogoImg3 = styled(Image)`
position: relative;
left: 40%;
margin-top: 25px;
margin-bottom: 10px;
`
const SmallTitle3 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 29px;
letter-spacing: -0.447096px;
color: #525252;
text-align: center;
`
const SmallText2 = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 19px;
color: #727272;
text-align: center;
`
const RoleText = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.3px;
color: #525252;
text-align: center;
margin-top: 60px;
margin-bottom: 70px;
`
const RoleText2 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
letter-spacing: -0.3px;
color: #525252;
text-align: center;
margin-top: 100px;
margin-bottom: 70px;
`
const Gradation2 = styled.div`
width: 100%;
margin-left: -24px;
height: 300px;
background: linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, rgba(255, 233, 240, 0.892708) 50.83%, rgba(255, 233, 240, 0) 100%);
z-index:-1;
position: absolute;
`
const Gradation4 = styled.div`
width: 100%;
margin-left: -24px;
height: 300px;
background: linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, rgba(255, 233, 240, 0.892708) 40.83%, rgba(255, 233, 240, 0) 100%);
z-index:-1;
position: absolute;
`
const ProfileImg = styled(Image)`

`
const Name = styled.div`
position: relative;
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: #525252;
text-align: center;
margin-left: 200px;
`
const Name2 = styled.div`
position: relative;
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
color: #525252;
text-align: center;
margin-right: 200px;
`
const Name3 = styled.div`
position: relative;
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #525252;
margin-left: 120px;

`
const Name4 = styled.div`
position: relative;
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #525252;
margin-right: 150px;

`
const Name5 = styled.div`
position: relative;
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #525252;
`
const Gradation3 = styled.div`
width: 100%;
margin-left: -24px;
height: 600px;
background: linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, rgba(255, 233, 240, 0.892708) 50.83%, rgba(255, 233, 240, 0) 100%);
z-index:-1;
position: absolute;
`
const Line = styled(Image)`
position: absolute;
margin-top: 120px;
margin-left: 50px;

`
const Line2 = styled(Image)`
position: absolute;
margin-top: 80px;
margin-left: 50px;

`

export default function Booth() {
  useEffect(() => {
    AOS.init({duration:2000})
  },[]);

  //둥둥 애니메이션
  const floating1Ref = useRef(null);
  const floating2Ref = useRef(null);
  const floating3Ref = useRef(null);
  const floating4Ref = useRef(null);
  const floating5Ref = useRef(null);
  const floating6Ref = useRef(null);
  const floating7Ref = useRef(null);
  const floating8Ref = useRef(null);
  const floating9Ref = useRef(null);
  const floating10Ref = useRef(null);
  const floating11Ref = useRef(null);
  const floating12Ref = useRef(null);
  const floating13Ref = useRef(null);
  const floating14Ref = useRef(null);
  const floating15Ref = useRef(null);
  const floating16Ref = useRef(null);
  const floating17Ref = useRef(null);
  const floating18Ref = useRef(null);

  useEffect(() => {
    //gsap.to(요소, 시간, 옵션)
    const floatingObject = (selector, delay, size) => {
      gsap.to(selector, {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: random(0, delay),
      });
    };

    const random = (min, max) => {
      return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };

    floatingObject(floating1Ref.current, 1, 15);
    floatingObject(floating2Ref.current, 0.5, 15);
    floatingObject(floating3Ref.current, 1.5, 20);
    floatingObject(floating4Ref.current, 1.5, 15);
    floatingObject(floating5Ref.current, 1.5, 15);
    floatingObject(floating6Ref.current, 1.5, 15);
    floatingObject(floating7Ref.current, 1.5, 15);
    floatingObject(floating8Ref.current, 1.5, 15);
    floatingObject(floating9Ref.current, 1.5, 15);
    floatingObject(floating10Ref.current, 1.5, 15);
    floatingObject(floating11Ref.current, 1.5, 15);
    floatingObject(floating12Ref.current, 1.5, 15);
    floatingObject(floating13Ref.current, 1.5, 15);
    floatingObject(floating14Ref.current, 1.5, 15);
    floatingObject(floating15Ref.current, 1.5, 15);
    floatingObject(floating16Ref.current, 1.5, 15);
    floatingObject(floating17Ref.current, 1.5, 15);


  }, []);
  return (
    <Container >
      <Text1 data-aos="fade-up">
        안녕하세요 동국대학교 <Text1_border>멋쟁이사자처럼</Text1_border>입니다. <br/> 
        4년 만에 돌아온 동국대학교 봄 <Text1_border>백상대동제</Text1_border>를 위하여<br/> 
        <Text1_border>축제기획단</Text1_border>과 협력한 웹사이트를 개발하였습니다.<br/> <br/>
        오랜만에 열리는 봄 축제인 만큼<br/> 
        즐겁고 행복한 축제가 되었으면 좋겠습니다! <br/> 
        여러분의 청춘을 응원합니다 :)
      </Text1>
      <br/>
      <Img1 src={about_da} data-aos="fade-up" ref={floating1Ref} alt="about_da"/>
      <Img2 src={about_si} data-aos="fade-up" ref={floating2Ref} alt="about_si"/>
      <Img3 src={about_bom} data-aos="fade-up" ref={floating3Ref} alt="about_bom"/>
      
      <LargeText data-aos="fade-up">DONGGUK<br/>LIKELION</LargeText>
      <LogoImg src={dgu} data-aos="fade-up" alt="dgu"/>
      <Text2 data-aos="fade-up">멋쟁이사자처럼은 <br/>
아이디어를 현실로 구현할 수 있는 <br/>
IT 창업동아리입니다.</Text2>
      <Text3 data-aos="fade-up">100만 이상 유저가 사용한 크리스마스 '진저호텔' 서비스, <br/>
2022 동국대학교 가을 축제 사이트 등 일상과 밀접한 의미가 있는 서비스를 다수 배출하고 있습니다.</Text3>
<Text4 href="https://likeliondgu.oopy.io/" data-aos="zoom-in">동대 멋사 홈페이지 가기 </Text4>

    <LargeText2 data-aos="fade-up">COLLABORATION</LargeText2>
    <Gradation2/>

    <Box2 data-aos="zoom-in">
      <Box>
        <SmallTitle>축제 기획단</SmallTitle>
        <SmallText href="https://instagram.com/donggukstuco?igshid=MzRlODBiNWFlZA==">@donggukstuco</SmallText>
      </Box>
      <LogoImg2 src={dstuco} alt="dstuco"/>
      </Box2>
    <Box2 data-aos="zoom-in">
      <LogoImg2 src={bamboo} alt="bamboo"/>
      <Box>
        <SmallTitle>동대 대나무 숲</SmallTitle>
        <SmallText href="https://instagram.com/dgu_bamboo?igshid=MzRlODBiNWFlZA==">@dgu_bamboo</SmallText>
      </Box>
    </Box2>
    <div data-aos="zoom-in">
      <SmallTitle2>후원사</SmallTitle2>
      <LogoImg3 src={devocean} alt="devocean"/>
      <SmallTitle3>DEVOCEAN</SmallTitle3>
      <SmallText2 href="https://instagram.com/skdevocean?igshid=MzRlODBiNWFlZA==">@skdevocean</SmallText2>
    </div>
    <LargeText2 data-aos="fade-up">CONTRIBUTER</LargeText2>

    <RoleText>PRODUCT DESIGN</RoleText>
    <Gradation2/>
    <Line src={line1} />
    <Name ref={floating4Ref}>
      <ProfileImg src={leeyungnseo} alt="leeyungseo" /><br/> 이영서
    </Name>
    <Name2 ref={floating5Ref}>
      <ProfileImg src={yeowon} alt="yeowon"/><br/> 이여원
    </Name2>
    <RoleText2>FRONT-END</RoleText2>
    <Gradation3/>
    <Line src={line2} />
    <Name ref={floating6Ref}>
      <ProfileImg src={sangdon2} alt="sangdon2"/><br/>이상돈
    </Name>
    <Name4 ref={floating7Ref}>
      <ProfileImg src={heechan} alt="heechan"/><br/>서희찬
    </Name4>
    <Name3 ref={floating8Ref}>
      <ProfileImg src={seulgi} alt="seulgi"/><br/>류슬기
    </Name3>
    <Name2 ref={floating14Ref}>
      <ProfileImg src={junseo} alt="junseo"/><br/>오준서
    </Name2>
    <Name ref={floating9Ref}>
      <ProfileImg src={yeowon2} alt="yeowon2"/><br/>이여원
    </Name>
    <RoleText2>BACK-END</RoleText2>
    <Gradation3/>
    <Line2 src={line3} />
    <Name2 ref={floating10Ref}>
      <ProfileImg src={yuseong} alt="yuseong"/><br/>안유성
    </Name2>
    <Name ref={floating11Ref}>
      <ProfileImg src={sangjoon} alt="sangjoon"/><br/>박상준
    </Name>
    <Name5 ref={floating12Ref}>
      <ProfileImg src={jenny} alt="jenny"/><br/>김재니
    </Name5>
    <Name4 ref={floating13Ref}>
      <ProfileImg src={youngsin} alt="youngsin"/><br/>박영신
    </Name4>
    <RoleText2>CORPORATE RELATIONS</RoleText2>
    <Gradation2/>
    <Line2 src={line4} />
    <Name4 ref={floating15Ref}>
      <ProfileImg src={sooyoung} alt="sooyoung"/><br/>김수영
    </Name4>
    <Name ref={floating16Ref}>
      <ProfileImg src={sangdon} alt="sangdon"/><br/>이상돈
    </Name>
    <Name4 ref={floating17Ref}>
      <ProfileImg src={yoonyoungseo} alt="yoonyoungseo"/><br/>윤영서
    </Name4>
    <Box3 />
    </Container>
  );
}