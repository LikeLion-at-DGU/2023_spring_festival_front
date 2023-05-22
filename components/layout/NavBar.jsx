import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Modal from "../nav/Modal";
import { useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import notice_page_logo from '../image/common/notice.svg';
import booth_page_logo from '../image/common/booth.svg';
import Booth from "@/pages/about";

const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 26px;
`

const Title = styled(Link)`
    font-family: 'TmonMonsori';
    font-size: 24px;
    z-index: 100;
`


const BackButton = styled(FontAwesomeIcon)`
    color: #525252;
    top : 10px;
    left: 0;
    font-size: 20px;
    width: 15px;
    z-index: 100;
    cursor: pointer;
`

const Img = styled(Image)`
    margin: 0 auto;
    padding-right: 5%;
`;

const ImgLink = styled(Link)`
    margin: 0 auto;
    display: flex;
    
`;

const NavToggle = styled.div`
    font-size: 25px;
    position: fixed;
    right: 0;
    margin-right: 25px;
    z-index: 100;
    cursor: pointer;
    display: flex;
    gap: 20px;

    @media (min-width: 430px) {
        position: absolute;
    }
`

const BoothSearch = styled(FontAwesomeIcon)`
    font-size: 20px;
    margin-right: 30%;
    display: flex;
`;

const ButtonSection =styled.div`
    display: flex;
    align-items: center;
`;

export default function HeadBar(){

    const [modalOpen, setModalOpen] = useState(false);
    
    const showModal = () => {
        setModalOpen(i=>!i);
    };

    // 디테일 페이지 구분을 위한 변수
    const router = useRouter();

    return(
        <Container>
            { !router.query.id && (router.pathname.split('/')[2] != 'search') ? 
            <Title href="/">
                    다시, 봄
            </Title> : <>
                <BackButton 
                    icon={faChevronLeft} 
                    style={{color: "#000000",}}
                    onClick={()=>router.back()} />
                { router.pathname.split('/')[1] === 'notice' &&
                    <ImgLink href="/"><Img src={notice_page_logo} alt="notice_page_logo"/></ImgLink>}
                { (router.pathname.split('/')[1] === 'booth') &&
                    <ImgLink href="/"><Img src={booth_page_logo} alt="booth_page_logo"/></ImgLink>}
            </>}
            <NavToggle>
                { (router.pathname.split('/')[1] === 'booth') && (router.pathname.split('/')[2] != 'search') &&
                <Link href='/booth/search'>
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </Link>}
                <FontAwesomeIcon icon={faBars} onClick={()=>showModal()}/>
            </NavToggle>
            {modalOpen && <Modal setModalOpen={setModalOpen}/>}
        </Container>
    )
};