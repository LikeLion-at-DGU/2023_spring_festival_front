import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import NoticeCard from "components/notice/NoticeCard";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  z-index: 1;
`;

const TypeWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  font-family: 'ygotjalnanfont';
  font-weight: 700;
`;

const Type = styled.button`
  width: 20%;
  padding: 3% 2%;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props)=>props.isSelected ? '#FC8CAE' : '#979797'};
  color: ${(props)=>props.isSelected ? '#FC8CAE' : '#979797'};
  font-size: 18px;
  line-height: 19px;
  font-family: "yg-jalnan";
`;

const TypeBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 7% 0;
`;

export default function Notice(){

  // 타입
  const [currentType, setCurrentType] = useState('all');
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
          "type": "main",
          "content": "글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때?",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": ["https://images.ctfassets.net",]
        },
        {
          "id": 2,
          "title": "festival",
          "type": "festival",
          "content": "festival!!Ds!",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 3,
          "title": "event",
          "type": "event",
          "content": "글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때? 글이 길면 어때?",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 4,
          "title": "etc",
          "type": "etc",
          "content": "etc test",
          "created_at": "2023-05-13T07:47:07.687842+09:00",
          "images": []
        },
        {
          "id": 5,
          "title": "etc",
          "type": "etc",
          "content": "etc test",
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

  const typeNotices = 
    currentType === 'all' ? notice : notice.filter(
      (notice)=>notice.type === currentType);

  // 애니메이션
  const trail = useTrail(typeNotices.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { mass: 1, tension: 300, friction: 20 }
  });

  return(
    <Container>
      <TypeWrapper>
        {typeArray.map((type)=>{
          return(
            <Type
              key={type.id}
              onClick={()=>selectTypeHandler(type.type)}
              isSelected={type.type===currentType}
            >
              {type.content}
            </Type>
          )
        })}
      </TypeWrapper>
      <TypeBody isVisible={typeNotices.length > 0}>
        {/* {typeNotices.map((notice)=>( */}
        {trail.map((style, index) => (
          <animated.div key={typeNotices[index].id} style={style}>
            <NoticeCard 
              key={typeNotices[index].id}
              id={typeNotices[index].id}
              notice={typeNotices[index]}
            />
          </animated.div>
        ))}
          {/* <NoticeCard 
            key={notice.id}
            id={notice.id}
            notice={notice}
          /> */}
        {/* ))} */}
        
      </TypeBody>
    </Container>
  )
}