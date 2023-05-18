import styled from "styled-components";
import Image from 'next/image';
import da from "../image/main_da.svg";
import si from "../image/main_si.svg";
import bom from "../image/main_bom.svg";


const Container = styled.div`
    width: 100%;
    height: 85%;
    //border: 1.5px solid black;
    position: relative;
`

const Img1 = styled(Image)`
    width: 75%;
    position: absolute;
    top : -5%;
    right : 0;
`

const Img2 = styled(Image)`
    width: 70%;
    position: absolute;
    top : 21%;
    left: 3%;
`

const Img3 = styled(Image)`
    width: 68%;
    position: absolute;
    bottom : 3%;
    right: -5%;
`



export default function First(){
    return(
        <Container>
            <Img1 src={da}/>
            <Img2 src={si}/>
            <Img3 src={bom}/>
        </Container>
    )
}