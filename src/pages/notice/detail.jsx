import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import NoticeCard from "components/notice/NoticeCard";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  z-index: 1;
  padding: 25px 0;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #FFD8E4;
    padding: 2% 0;
`;

const Notice = styled.ul`
    color: #FC8CAE;
    font-weight: 400;
    font-size: 16px;
    font-family: 'AppleSDGothicNeoEB00';
`;

const Date = styled.ul`
    color: #525252;
    font-weight: 400;
    font-size: 14px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5% 0;
`;

const BodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 0 2% 0;
`;

const Title = styled.div`
    color: #525252;
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`;

const Share = styled(FontAwesomeIcon)`
    color: #FC8CAE;
`;

const Author = styled.div`
    font-family: 'AppleSDGothicNeoB00';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #A0A0A0;
    padding: 1% 0;
`;

const Content = styled.div`
    font-family: 'AppleSDGothicNeoM00';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #525252;
    padding: 5% 0;
`;

const ImgBox = styled.div`
    
`;


export default function Detail(){

  return(
    <Container>
        <Header>
            <Notice>
                주요공지
            </Notice>
            <Date>
                2023-05-10
            </Date>
        </Header>
        <Body>
            <BodyHeader>
                <Title>축제 일정 안내</Title>
                <Share icon={faPaperPlane}>공유버튼</Share>
            </BodyHeader>
            <Author>멋쟁이사자처럼 축제사이트 TF 팀</Author>
            <Content>
            이번 축제에서는 부스와 주점이 운영됩니다 우와와 이번 축제에서는 부스와 주점이 운영됩니다 우와와와와이번 축제에서는 부스와 주점이 운영됩니다 우와와 이번 축제에서는 부스와 주점이 운영됩니다 우와와와와이번 축제에서는 부스와 주점이 운영됩니다 우와와 이번 축제에서는 부스와 주점이 운영됩니다 우와와와와이번 축제에서는 부스와 주점이 운영됩니다 우와와 이번 축제에서는 부스와 주점이 운영됩니다 우와와와와이번 축제에서는 부스와 주점이 운영됩니다 우와와 이번 축제에서는 부스와 주점이 운영됩니다 우와와와와
            </Content>
            <ImgBox>사진자리~</ImgBox>
        </Body>
    </Container>
  )
}