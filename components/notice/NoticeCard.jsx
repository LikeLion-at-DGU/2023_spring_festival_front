import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';

const Container = styled.div`
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.15);
    z-index: 5;
    background: #FFF;
    border-radius: 10px;
    padding: 25px;
    margin: 3% 0;
    font-family: 'AppleSDGothicNeoM00';
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
`;

const NoticeCard = ({id, title, content, created_at, images}) => {

    const date = created_at.slice(0,10);

    console.log(images)

    return(
        <Container>
            <Link href="/notice/detail">
                <LinkBox>
                    <Header>
                        <Title>{title}</Title>
                        <Date>{date}</Date>
                    </Header>
                    <Body>
                        { content.length <= 60 ? 
                            <>{content}</> : <>{content.slice(0,60)}...</>
                        }
                    </Body>
                    { ( images && images.length > 0 ) &&
                    <ImgBox>
                        {images.map((image)=>{
                            <Image
                                key={image.id}
                                src={image.url}
                                alt={image.alt}
                            />
                        })}
                    </ImgBox>
                    }
                </LinkBox>
            </Link>
        </Container>
    );
};

export default NoticeCard;