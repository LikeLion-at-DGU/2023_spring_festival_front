import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import nav_logo from "../image/nav_logo.svg";
// import { motion } from "framer-motion";

const slideIn = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

const ModalWrapper = styled.div`
    background: #FFFFFF;
    z-index: 100;
    height: 100vh;
    top: 0;
    position: absolute;
    border-radius: 20px 0px 0px 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    right: 0;
    animation-name: ${(props) => props.isVisible ? slideIn : slideOut };
    animation-duration: 3;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #101010CC;
    z-index: 99; 
`;

const ModalButton = styled(FontAwesomeIcon)`
    width: 20px;
    height: 5vh;
`;

const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D2D2D2;
    padding: 3.5vh 0 4vh 0;
`;

const ModalTitle = styled.ul`
    line-height: 2.5vh;
    color: #525252;
`;

const ModalPages = styled.div`
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4vh;
    font-weight: 700;
    font-size: 32px;
`;

const ModalPageSection = styled.a`
    width: 100%;
    display: flex;
    color: ${ ({is_active}) => ( !is_active ? '#525252' : '#FC8CAE') };

    &:hover {
        color: #FC8CAE;
    }
`;

const ModalFooter = styled.footer`
    padding: 7vh 0;
    display: flex;
    font-weight: 500;
    font-size: 12px;
    color: #BBBBBB;
`;

export default function Modal({setModalOpen}) {

    // 모달창 애니메이션
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); 
      }, []);

    
      // 모달창 닫기
    const closeModal = () => {
        setIsVisible(false);
        setTimeout(()=>{
            setModalOpen(false);
        }, 300);
    };


    // 모달창 밖에 눌렀을 때
    const outSection = useRef();

    const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler();
        };
    
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      });
};

    useOnClickOutside(outSection, closeModal);

    // router
    const router = useRouter();

    return(
        <>
            <ModalOverlay />
            <ModalWrapper ref={outSection}>
                <ModalButton icon={faArrowLeftLong} onClick={closeModal} />
                <ModalHeader>
                    <ModalTitle>동국대학교<br/>봄 백상대동제</ModalTitle>
                    <ModalTitle><Image src={nav_logo} alt="nav_logo"/></ModalTitle>
                </ModalHeader>
                <ModalPages>
                    <Link href="/" passHref>
                        <ModalPageSection
                            is_active = {router.pathname === '/'}
                            onClick={closeModal}
                            >main</ModalPageSection>
                    </Link>
                    <Link href="/notice" passHref>
                        <ModalPageSection
                            is_active = {router.pathname === '/notice'}
                            onClick={closeModal}
                            >notice</ModalPageSection>
                    </Link>
                    <Link href="/" passHref>
                        <ModalPageSection
                            is_active = {router.pathname === '/timeline'}
                            onClick={closeModal}
                            >timeline</ModalPageSection>
                    </Link>
                    <Link href="/booth" passHref>
                        <ModalPageSection
                            is_active = {router.pathname === '/booth'}
                            onClick={closeModal}
                            >booth</ModalPageSection>
                    </Link>
                    <Link href="/about" passHref>
                        <ModalPageSection
                            is_active = {router.pathname === '/about'}
                            onClick={closeModal}
                            >about</ModalPageSection>
                    </Link>
                    {/* <ModalPageSection href='/notice' onClick={closeModal}>notice</ModalPageSection>
                    <ModalPageSection href='/timeline' onClick={closeModal}>timeline</ModalPageSection>
                    <ModalPageSection href='/booth' onClick={closeModal}>booth</ModalPageSection>
                    <ModalPageSection href='/about' onClick={closeModal}>about</ModalPageSection> */}
                </ModalPages>
                <ModalFooter>©DGU LIKELION. All rights reserved.</ModalFooter>
            </ModalWrapper>
        </>
        
    );
}