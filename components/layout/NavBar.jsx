import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Modal from "../nav/Modal";
import { useState } from "react";

const Container = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 0 26px;
`

const Title = styled.div`
    font-family: 'TmonMonsori';
    font-size: 24px;
`


const NavToggle = styled(FontAwesomeIcon)`
    font-size: 25px;
    position: fixed;
    right: 0;
    margin-right: 26px;
    width: 25px;
    top : 18px;
    @media (min-width: 430px) {
        position: absolute;
    }
`



export default function HeadBar(){

    const [modalOpen, setModalOpen] = useState(false);
    
    const showModal = () => {
        setModalOpen(true);
    };

    return(
        <Container>
            <Title>
                다시, 봄
            </Title>
            <NavToggle icon={faBars} onClick={showModal}/>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </Container>
    )
};