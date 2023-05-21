import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import NoticeCard from "components/notice/NoticeCard";
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
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

    // dummy
    const notice = 
        {
            "id": 1,
            "title": "main",
            "type": "main",
            "content": "글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때?",
            "created_at": "2023-05-13T07:47:07.687842+09:00",
            "images": ["https://images.ctfassets.net",]
        };
    
    // type 매칭
    const typeArray = [
            {
              id: 1,
              type: 'all',
              content: '전체'
            },
            {
              id: 2,
              type: 'main',
              content: '주요'
            },
            {
              id: 3,
              type: 'festival',
              content: '축제'
            },
            {
              id: 4,
              type: 'event',
              content: '이벤트'
            },
            {
              id: 5,
              type: 'etc',
              content: '기타'
            },
        ];
    
    const content = 
        typeArray.find((type)=>type.type === notice.type) ? typeArray.find((type)=>type.type === notice.type).content
        : ' ';

    // 현재 url
    //const location = useLocation();
    useEffect(()=>{
        console.log(location);
    }, [location])

    // 링크 복사 함수
    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("링크가 복사되었습니다.");
        } catch (err) {
            console.log('Error: '+err);
        }
    };

  return(
    <Container>
        <Header>
            <Notice>
                {content}공지
            </Notice>
            <Date>
                {notice.created_at.slice(0,10)}
            </Date>
        </Header>
        <Body>
            <BodyHeader>
                <Title>{notice.title}</Title>
                <Router>
                    <Share
                        icon={faPaperPlane}
                        onClick={()=>handleCopy(`${location.pathname}`)}
                        ></Share>
                </Router>
            </BodyHeader>
            <Content>
            {notice.content}
            </Content>
            <ImgBox>사진자리~</ImgBox>
        </Body>
    </Container>
  )
}