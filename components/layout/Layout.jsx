import { useEffect } from "react";
import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 430px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
`

const Content = styled.div`
    min-height: 83vh;
    width: 100%;
    border: 1px solid black;
`

export default function Layout( {children} ){
    // 랜더링시 사이즈 맞게하는 코드였지만.. 일단 주석처리만
    //useEffect(()=>{
    //    document.getElementById("outWrapper").style.minHeight = `${window.innerHeight - 56 - 100}px`;
    //}, [])
    
        return(
            <Wrapper>
                <HeadTitle/>
                <NavBar />
                <Content id="outWrapper">{children}</Content>
                <Footer/>
            </Wrapper>
        )
}