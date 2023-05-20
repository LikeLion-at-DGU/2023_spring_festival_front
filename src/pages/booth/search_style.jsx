import styled from "styled-components";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const SearchContentWrapper = styled.div`
margin-top: 60px;
margin-bottom: 30px;
color:#525252;
font-size: 20px;
font-weight: 600;
z-index: 1;
text-align: center;

`
export const SearchContentHeader = styled.h1`
    font-size: 20px;
    color : #525252;
    margin-bottom: 25px;

    
`
export const SearchNoResult = styled.h2`
    
    color:#979797;
    font-size: 16px;
    margin-bottom: 30px;
`

export const BoothCardWrapper = styled.div`
    width: 160px;
    height : 200px;
    background: #FFFFFF;
    box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
    border-radius: 10px;
    margin : 10px 12px 10px 12px;
`
export const BoothCardImage = styled(Image)`
    width: 160px;
    height : 160px;
`

export const BoothCardGridWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
    
`