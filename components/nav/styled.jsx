import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

export const slideIn = keyframes`
    
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const slideOut = keyframes`
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(100%);
    }
`;

export const ModalWrapper = styled.div`
    font-family: "yg-jalnan";
    background: #FFFFFF;
    z-index: 150;
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
    animation-name: ${(props) => (props.isVisible ? slideIn : slideOut) };
    animation-duration: 0.5s;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #101010CC;
    z-index: 149; 
`;

export const ModalButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 5vh;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  padding: 3.5vh 0 4vh 0;
`;

export const ModalTitle = styled.ul`
  line-height: 3vh;
  color: #525252;
  font-weight: 500;
  font-size: 55%;
  text-align: left;
`;

export const Img = styled(Image)`
  width: 40%;
`;

export const ModalPages = styled.div`
    padding: 8vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4vh;
    font-size: 100%;
`;

export const ModalPageSection = styled.span`
    font-family: "yg-jalnan";
    width: 100%;
    display: flex;
    color: ${ ({is_active}) => ( !is_active ? '#525252' : '#FC8CAE') };

  &:hover {
    color: #fc8cae;
  }
`;

export const ModalPageSearchSection = styled.span`
  margin-top: 0;
  font-family: "yg-jalnan";
  align-items: center;
  font-weight: 0;
  padding-left: 15px;
  width: 100%;
  display: flex;
  &:hover {
    color: #fc8cae;
  }
`;

export const ModalFooter = styled.footer`
  padding: 3vh 0;
  display: flex;
  font-weight: 500;
  font-size: 8%;
  color: #bbbbbb;
`;
