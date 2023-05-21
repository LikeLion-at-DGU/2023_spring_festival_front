import styled from "styled-components";
import Image from 'next/image';
import { useRouter } from "next/router";

// test용 사진
import test from '../image/about/about_seulgi.svg';

const Container = styled.div`
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.15);
    z-index: 5;
    background: #FFF;
    border-radius: 10px;
    padding: 25px;
    margin: 3% 0;
    font-family: 'AppleSDGothicNeoM00';
    cursor: pointer;
`;

const LinkBox = styled.a`
  width  : 100%;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    color: #525252;
    font-weight: 600;
    font-style: normal;
    font-size: 20px;
    font-family: 'AppleSDGothicNeoB00';
`;

const Date = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #979797;
`;

const Body = styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #525252;
    margin: 5% 0;
    line-height: 120%;
`;

const ImgBox = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    height: 100px;
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

const NoticeCard = ({id, notice}) => {
    
    const date = notice.created_at.slice(0,10);

    const router = useRouter();

    return(
        <Container
            onClick = {()=>router.push(`notice/${id}`)}
        >
                <LinkBox>
                    <Header>
                        <Title>{notice.title}</Title>
                        <Date>{date}</Date>
                    </Header>
                    <Body>
                        { notice.content.length <= 60 ? 
                            <>{notice.content}</> : <>{notice.content.slice(0,60)}...</>
                        }
                    </Body>
                    { ( notice.images && notice.images.length > 0 ) &&
                    <ImgBox>
                        {notice.images.map((image)=>{
                            <Image
                                key={image.id}
                                src={image.url}
                                alt={image.alt}
                            />
                        })}
                        <Img src={test} alt="test"/>
                        <Img src={test} alt="test"/>
                        <Img src={test} alt="test"/>
                        <Img src={test} alt="test"/>
                        <Img src={test} alt="test"/>
                    </ImgBox>
                    }
                </LinkBox>
            
        </Container>
    );
};

export default NoticeCard;