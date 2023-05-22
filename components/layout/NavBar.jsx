import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Modal from "../nav/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import notice_page_logo from "../image/common/notice.svg";
import booth_page_logo from "../image/common/booth.svg";
import Booth from "@/pages/about";

const Container = styled.div`
  background: transparent;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled(Link)`
  font-family: "TmonMonsori";
  font-size: 25px;
  cursor: pointer;
  width: 25%;
  @media all and (max-width: 400px) {
    font-size: 20px;
  }
`;

const BackButton = styled(FontAwesomeIcon)`
  color: #525252;
  font-size: 25px;
  width: 5%;
  margin-right: 15%;
  cursor: pointer;
`;

const ImgLink = styled(Link)`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled(Image)`
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
`;

const NavToggle = styled.div`
  width: 25%;
  font-size: 25px;
  text-align: right;
  display: flex;
  gap: 20%;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  z-index: 100;
`;

const BoothButton = styled(FontAwesomeIcon)`
  padding-right: 40px;
`;

const SideButton = styled(FontAwesomeIcon)`
  position: fixed;
`;

export default function HeadBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen((i) => !i);
    document.body.style.overflow = "hidden";
  };

  // 디테일 페이지 구분을 위한 변수
  const router = useRouter();

  return (
    <Container>
      {!router.query.id && router.pathname.split("/")[2] != "search" ? (
        <Title href="/">다시, 봄</Title>
      ) : (
        <>
          <BackButton icon={faChevronLeft} onClick={() => router.back()} />
          {router.pathname.split("/")[1] === "notice" && (
            <ImgLink href="/">
              <Img src={notice_page_logo} alt="notice_page_logo" />
            </ImgLink>
          )}
          {router.pathname.split("/")[1] === "booth" && (
            <ImgLink href="/">
              <Img src={booth_page_logo} alt="booth_page_logo" />
            </ImgLink>
          )}{" "}
        </>
      )}
      <NavToggle>
        {router.pathname.split("/")[1] === "booth" &&
          router.pathname.split("/")[2] != "search" && (
            <Link href="/booth/search">
              <BoothButton
                icon={faMagnifyingGlass}
                style={{ color: "#FC8CAE" }}
              />
            </Link>
          )}
        <SideButton icon={faBars} onClick={() => showModal()} />
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </NavToggle>
    </Container>
  );
}
