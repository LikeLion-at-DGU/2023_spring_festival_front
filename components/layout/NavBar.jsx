import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Modal from "../nav/Modal";
import { useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import notice_page_logo from '../image/common/notice.svg';
import booth_page_logo from '../image/common/booth.svg';

const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 26px;
`

const Title = styled.div`
    font-family: 'TmonMonsori';
    font-size: 24px;
`


const BackButton = styled(FontAwesomeIcon)`
    color: #525252;
    top : 10px;
    left: 0;
    font-size: 20px;
    width: 15px;
`

const Img = styled(Image)`
    margin: 0 auto;
    padding-right: 5%;
`;

const NavToggle = styled(FontAwesomeIcon)`
    font-size: 25px;
    position: fixed;
    right: 0;
    margin-right: 26px;
    width: 25px;
    @media (min-width: 430px) {
        position: absolute;
    }
`

export default function HeadBar(){

    const [modalOpen, setModalOpen] = useState(false);
    
    const showModal = () => {
        setModalOpen(i=>!i);
    };

    // 디테일 페이지 구분을 위한 변수
    const router = useRouter();
    console.log(router.pathname.split('/')[2]);

    return(
        <Container>
            { !router.query.id && (router.pathname.split('/')[2] != 'search') ? 
            <Title>
                다시, 봄
            </Title> : <>
                <BackButton 
                    icon={faChevronLeft} 
                    style={{color: "#000000",}}
                    onClick={()=>router.back()} />
                { router.pathname.split('/')[1] === 'notice' &&
                    <Img src={notice_page_logo} alt="notice_page_logo"/>}
                { (router.pathname.split('/')[1] === 'booth') &&
                    <Img src={booth_page_logo} alt="booth_page_logo"/>}
            </>}
            <NavToggle icon={faBars} onClick={()=>showModal()}/>
            {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        </Container>
    )
};