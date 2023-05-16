import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 425px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Content = styled.div`
    
`

export default function Layout( {children} ){
        return(
            <Wrapper>
                <HeadTitle/>
                <NavBar />
                <Content>{children}</Content>
                <Footer/>
            </Wrapper>
        )
}