import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import nav_logo from "../image/common/nav_logo.svg";
import {
    ModalWrapper,
    ModalOverlay,
    ModalButton,
    ModalHeader,
    ModalTitle,
    ModalPages,
    ModalPageSection,
    ModalFooter
} from './styled';
// import { motion } from "framer-motion";

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