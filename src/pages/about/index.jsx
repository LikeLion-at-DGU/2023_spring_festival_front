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
margin-top: 30px;
margin: 20px;
`
const Text4 = styled.div`
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
const SmallText = styled.div`
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
position: relative;
left: 55%;
`
const ProfileImg2 = styled(Image)`
position: relative;
left: 5%;
`
const ProfileImg3 = styled(Image)`
position: relative;
left: 12%;
`
const ProfileImg4 = styled(Image)`
position: relative;
left: 47%;
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
margin-top: 90px;
margin-left: 80px;
`

export default function Booth() {
  return (
    <Container>
      <Text1>
        안녕하세요 동국대학교 <Text1_border>멋쟁이사자처럼</Text1_border>입니다. <br/> 
        4년 만에 돌아온 동국대학교 봄 <Text1_border>백상대동제</Text1_border>를 위하여<br/> 
        <Text1_border>축제기획단</Text1_border>과 협력한 웹사이트를 개발하였습니다.<br/> <br/>
        오랜만에 열리는 봄 축제인 만큼<br/> 
        즐겁고 행복한 축제가 되었으면 좋겠습니다! <br/> 
        여러분의 청춘을 응원합니다 :)
      </Text1>
      <br/>
      <Img1 src={about_da} />
      <Img2 src={about_si} />
      <Img3 src={about_bom} />
      
      <LargeText>DONGGUK<br/>LIKELION</LargeText>
      <LogoImg src={dgu} />
      <Text2>멋쟁이사자처럼은 <br/>
아이디어를 현실로 구현할 수 있는 <br/>
IT 창업동아리입니다.</Text2>
      <Text3>100만 이상 유저가 사용한 크리스마스 '진저호텔' 서비스, <br/>
2022 동국대학교 가을 축제 사이트 등 일상과 밀접한 의미가 있는 서비스를 다수 배출하고 있습니다.</Text3>
<Text4>동대 멋사 홈페이지 가기 </Text4>

    <LargeText2>COLLABORATION</LargeText2>
    <Gradation2/>

    <Box2>
      <Box>
        <SmallTitle>축제 기획단</SmallTitle>
        <SmallText>@donggukstuco</SmallText>
      </Box>
      <LogoImg2 src={dstuco}/>
      </Box2>
      <Box2>
      <LogoImg2 src={bamboo}/>
      <Box>
        <SmallTitle>동대 대나무 숲</SmallTitle>
        <SmallText>@dgu_bamboo</SmallText>
      </Box>
    </Box2>
    <SmallTitle2>후원사</SmallTitle2>
    <LogoImg3 src={devocean}/>
    <SmallTitle3>DEVOCEAN</SmallTitle3>
    <SmallText2>@skdevocean</SmallText2>
    <LargeText2>CONTRIUBUTER</LargeText2>

    <RoleText>PRODUCT DESIGN</RoleText>
    <Gradation2/>
    <Line src={line1} />
    <ProfileImg src={leeyungnseo}/>    <br/>
    <ProfileImg2 src={yeowon}/>
    <RoleText2>FRONT-END</RoleText2>
    <Gradation3/>
    <Line src={line2} />
    <ProfileImg src={sangdon2}/>    <br/>
    <ProfileImg3 src={heechan}/>    <br/>
    <ProfileImg4 src={seulgi}/>    <br/>
    <ProfileImg2 src={junseo}/>    <br/>
    <ProfileImg src={yeowon2}/>    <br/>
    <RoleText2>BACK-END</RoleText2>
    <Gradation4/>
    <Line src={line3} />
    <ProfileImg2 src={yuseong}/>    <br/>
    <ProfileImg src={sangjoon}/>    <br/>
    <ProfileImg3 src={jenny}/>    <br/><br/><br/><br/>
    <ProfileImg2 src={youngsin}/>    <br/>
    <RoleText2>CORPORATE RELATIONS</RoleText2>
    <Gradation2/>
    <Line src={line4} />
    <ProfileImg3 src={sooyoung}/>    <br/>
    <ProfileImg4 src={sangdon}/>    <br/>
    <ProfileImg2 src={yoonyoungseo}/>    <br/>
    <Box />
    </Container>
  );
}