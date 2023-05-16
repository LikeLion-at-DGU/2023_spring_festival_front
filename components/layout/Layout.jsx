import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";
import styled from "styled-components";

const Conttent = styled.div`
`

export default function Layout( {children} ){
        return(
            <>
                <HeadTitle/>
                <NavBar />
                <Conttent>{children}</Conttent>
                <Footer/>
            </>
        )
}