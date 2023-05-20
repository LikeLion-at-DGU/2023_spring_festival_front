import { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeCard from "components/notice/NoticeCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  z-index: 1;
`;

const TypeWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Type = styled.button`
  width: 20%;
  padding: 3% 3%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props)=>props.isSelected ? '#FC8CAE' : '#979797'};
  color: ${(props)=>props.isSelected ? '#FC8CAE' : '#979797'};
  font-size: 18px;
  line-height: 19px;
`;

const TypeBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 7% 0;
`;

export default function Booth(){

  // 타입
  const [currentType, setCurrentType] = useState('전체');
  const type = ['전체', '주요', '축제', '이벤트', '기타'];
  const selectTypeHandler = (type) => {
    setCurrentType(type);
    console.log(currentType);
  };

  // notice list fetch
  const [notice, setNotice] = useState([]);
  const fetchNotice = async() => {
    try {
      // dummy
      const noticeData = [
        {
          "id": 1,
          "title": "main",
          "type": "주요",
          "content": "글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때?",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 2,
          "title": "festival",
          "type": "축제",
          "content": "festival ㅅㅂ!",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 3,
          "title": "event",
          "type": "이벤트",
          "content": "글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때?",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 4,
          "title": "etc",
          "type": "기타",
          "content": "etc ㅅㅂ!",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
      ];

      setNotice(noticeData);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // notice list 불러오기
  useEffect(()=>{
    fetchNotice();
  }, []);

  const typeNotices = notice.filter((notice)=>{
    if(currentType === '전체') {
      return true;
    } else {
      return notice.type === currentType;
    }
  });

  return(
    <Container>
      <TypeWrapper>
        {type.map((type)=>{
          return(
            <Type
              key={type}
              onClick={()=>selectTypeHandler(type)}
              isSelected={type===currentType}
            >
              {type}
            </Type>
          )
        })}
      </TypeWrapper>
      <TypeBody>
        {typeNotices.map((notice)=>(
          <NoticeCard 
            title={notice.title}
            content={notice.content}
            created_at={notice.created_at}
            images={notice.images}
          />
        ))}
        
      </TypeBody>
    </Container>
  )
}