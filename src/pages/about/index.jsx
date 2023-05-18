import Image from "next/image";
import styled from "styled-components";
import about_da from '/components/image/about_da.svg';
import about_si from 'components/image/about_si.svg';
import about_bom from 'components/image/about_bom.svg';
import dgu from 'components/image/about_dgu.svg';
import dstuco from 'components/image/about_dstuco.svg';
import bamboo from 'components/image/about_bamboo_logo.svg';
import leeyungnseo from 'components/image/about_leeyoungseo.svg';
import yeowon from 'components/image/about_yeowon.svg';
import yeowon2 from 'components/image/about_yeowon2.svg';
import sangdon from 'components/image/about_sangdon.svg';
import sangdon2 from 'components/image/about_sangdon.svg';
import heechan from 'components/image/about_heechan.svg';
import seulgi from 'components/image/about_seulgi.svg';
import junseo from 'components/image/about_junseo.svg';
import yuseong from 'components/image/about_yuseong.svg';
import sangjoon from 'components/image/about_sangjoon.svg';
import jenny from 'components/image/about_jenny.svg';
import youngsin from 'components/image/about_youngsin.svg';
import sooyoung from 'components/image/about_sooyoung.svg';
import yoonyoungseo from 'components/image/about_yoonyoungseo.svg'

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

  white-space: pre;
  display: inline-block;
  z-index: -1;
  margin-top: 80px;
  margin-left:50px;
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
left: 43.1px;
top: 370px;
`
const Img2 = styled(Image)`
position: absolute;
left: 210px;
top: 420px;
`
const Img3 = styled(Image)`
position: absolute;
left: 300px;
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
margin-right:20px;
margin-bottom: 10px;
margin-left:20px;
`
const Text2 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 16px;
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
`
const Gradation = styled.div`
    width: 113%;
    margin-left: -24px;
    height: 300px;
    align-items: center;
    background: linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, rgba(255, 233, 240, 0.892708) 50.83%, rgba(255, 233, 240, 0) 100%);
`
const SmallTitle = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 29px;
letter-spacing: -0.447096px;
color: #525252;

`
const SmallText = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 19px;
color: #727272;
display: inline-block;

`
const Box = styled.div`
display: inline-block;

`
const SmallTitle2 = styled.div`
font-family: 'AppleSDGothicNeoB00';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 19px;
color: #FC8CAE;
letter-spacing: -0.466392px;
`
const LogoImg2 = styled(Image)`
display: inline-block;
margin-left:10px;
`
const ProfileImg = styled(Image)`
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

    <LargeText2>CONTRIUBUTER</LargeText2>
    <Gradation/>
    <Box>
      <SmallTitle>축제 기획단</SmallTitle>
      <SmallText>@donggukstuco</SmallText>
    </Box>
    <LogoImg2 src={dstuco}/>

    <LogoImg2 src={bamboo}/>
    <Box>
      <SmallTitle>동대 대나무 숲</SmallTitle>
      <SmallText>@dgu_bamboo</SmallText>
    </Box>
    <SmallTitle2>협찬사</SmallTitle2>

    </Container>
  );
}
