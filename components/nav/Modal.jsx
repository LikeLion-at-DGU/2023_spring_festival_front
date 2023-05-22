import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ModalFooter,
} from "./styled";

export default function Modal({ setModalOpen }) {
  // 모달창 애니메이션
  const [isVisible, setIsVisible] = useState(false);
  // 모달 처음 마운트 됨을 설정
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
  }, []);

  // 모달창 닫기
  const closeModal = () => {
    setIsVisible(false);
    document.body.style.overflow = 'auto';

    setTimeout(() => {
      setModalOpen(false);
    }, 500);
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

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    });
  };

  useOnClickOutside(outSection, closeModal);

  // router
  const router = useRouter();
  const currentPage = router.pathname.split('/')[1];
  const boothSearch = router.pathname.split('/')[2];

  // 모달이 완전히 열린 후 렌더링
  if (!isMounted) {
    return null;
  }

    return(
        <>
            <ModalOverlay />
            <ModalWrapper ref={outSection} isVisible={isVisible}>
                <ModalButton icon={faArrowLeftLong} onClick={closeModal} />
                <ModalHeader>
                    <ModalTitle>동국대학교<br/>봄 백상대동제</ModalTitle>
                    <ModalTitle><Image src={nav_logo} alt="nav_logo"/></ModalTitle>
                </ModalHeader>
                <ModalPages>
                    <Link href="/" passHref>
                        <ModalPageSection
                            is_active = {currentPage === ''}
                            onClick={closeModal}
                            >main</ModalPageSection>
                    </Link>
                    <Link href="/notice" passHref>
                        <ModalPageSection
                            is_active = {currentPage === 'notice'}
                            onClick={closeModal}
                            >notice</ModalPageSection>
                    </Link>
                    <Link href="/timetable" passHref>
                        <ModalPageSection
                            is_active = {currentPage === 'timetable'}
                            onClick={closeModal}
                            >timetable</ModalPageSection>
                    </Link>
                    <Link href="/booth" passHref>
                        <ModalPageSection
                            is_active = {currentPage === 'booth' && boothSearch != 'search'}
                            onClick={closeModal}
                            >booth</ModalPageSection>
                    </Link>
                    <Link href="/booth/search" passHref>
                        <ModalPageSection
                            is_active = {currentPage === 'booth' && boothSearch === 'search'}
                            onClick={closeModal}
                            style={{
                                fontSize: '20px',
                                color: currentPage === 'booth' && boothSearch === 'search' ? '#fc8cae' : '#979797'
                            }}
                            >booth search</ModalPageSection>
                    </Link>
                    <Link href="/about" passHref>
                        <ModalPageSection
                            is_active = {currentPage === 'about'}
                            onClick={closeModal}
                            >about</ModalPageSection>
                    </Link>
                </ModalPages>
                <ModalFooter>©DGU LIKELION. All rights reserved.</ModalFooter>
            </ModalWrapper>
        </>
        
    );
}