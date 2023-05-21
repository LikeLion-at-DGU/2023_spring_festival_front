import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";
import styled from "styled-components";
import PageTitle from "components/common/PageTitle";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  position: relative;
`;

const Content = styled.div`
  min-height: 78.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 25px; */
`;

const Gradation = styled.div`
  width: 100%;
  margin-top: 60px;
  height: 270px;
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(255, 233, 240, 0) 0%,
    rgba(255, 233, 240, 0.892708) 47.83%,
    rgba(255, 233, 240, 0) 100%
  );
`;

export default function Layout({ children }) {
  const router = useRouter();
  // 랜더링시 사이즈 맞게하는 코드였지만.. 일단 주석처리만
  //useEffect(()=>{
  //    document.getElementById("outWrapper").style.minHeight = `${window.innerHeight - 56 - 100}px`;
  //}, [])

  return (
    <Wrapper>
      <HeadTitle />
      <NavBar />
      {router.pathname !== "/" ? <Gradation /> : null}
      <Content id="outWrapper">
        <PageTitle />
        {children}
      </Content>
      <Footer />
    </Wrapper>
  );
}
