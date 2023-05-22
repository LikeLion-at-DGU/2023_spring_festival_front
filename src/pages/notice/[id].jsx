import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation, BrowserRouter as Router } from 'react-router-dom';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';

// test용 사진
import test from '../../../components/image/about/about_seulgi.svg';
import { useRouter } from "next/router";
import { API } from "../api";
import Loading from "components/common/Loading";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 5%;
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
    font-weight: 500;
    font-size: 24px;
`;

const Share = styled(FontAwesomeIcon)`
    color: #FC8CAE;
    cursor: pointer;
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
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    height: 140px;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
    }
`;

const Img = styled(Image)`
    height: 90%;
    margin-right: 2%;
`;


export async function getServerSideProps(context) {
    const {id} = context.query;
    // 데이터를 가져오기 위한 비동기 작업을 수행합니다.
    const fetchNotice = async(id) => {
        try{
            const res = await API.get(`/alarm/${id}`)
            const noticeData = res.data;
            return noticeData;
        }catch(err){
            console.log(err)
            return null;
        }
    }

    const noticeData = await fetchNotice(id);

    return {
      props: {
        myData: noticeData,
      },
    };
  }



export default function Detail(myData){


    const router = useRouter();
    const [notice, setNotice] = useState(null);
const fetchNotice = async() => {
    const sId = router.query.id
    try {
        // const response = await axios.get(`posts/${id}`);
        // const postData = response.data;
        const response = await API.get(`/alarm/${sId}`);
        const noticeDetailData = response.data;
        setNotice(noticeDetailData);
    } catch (error) {
        console.error('Error: ', error);
    }
};

useEffect(() => {
    fetchNotice();
}, [router.query.id]);


if (!notice) {
    return <Loading />; // 로딩 중이라면 로딩 표시를 보여줍니다.
  }
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

  return(
    <Container>
        <Header>
            <Notice>
                {content}공지
            </Notice>
            <Date>
            {notice && notice.created_at.slice(0, 10)}

            </Date>
        </Header>
        <Body>
            <BodyHeader>
                <Title>{notice.title}</Title>
                    {/* <Share
                        icon={faPaperPlane}
                        onClick={()=>handleCopy(`${location.pathname}`)}
                        ></Share> */}
            </BodyHeader>
            <Content>
            {notice.content}
            </Content>
            { ( notice.images && notice.images.length > 0 ) &&
                <ImgBox>
                    {notice.images.map((image)=>{
                        <Img
                            key={image.id}
                            src={image.url}
                            alt={image.alt}
                        />
                    })}
                    {/* <Img src={test} alt="test"/>
                    <Img src={test} alt="test"/>
                    <Img src={test} alt="test"/>
                    <Img src={test} alt="test"/>
                    <Img src={test} alt="test"/> */}
                </ImgBox>
            }
        </Body>
    </Container>
  )
}