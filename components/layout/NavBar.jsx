import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.nav`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 16px;
`

const Title = styled.div`
    font-family: 'TmonMonsori';
    font-size: 24px;
`

const NavToggle = styled(FontAwesomeIcon)`
    font-size: 25px;
    position: fixed;
    right: 0;
    margin-right: 16px;
    width: 25px;
    top : 11px;
    @media (min-width: 430px) {
        position: absolute;
    }
`



export default function HeadBar(){
    return(
        <Container>
            <Title>
                다시, 봄
            </Title>
            <NavToggle icon={faBars}  />
        </Container>
    )
}