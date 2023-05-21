import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 90%;
    @media (max-device-height:840px) {
        margin-top: 60px;
    }
`

export default function Second(){
    return(
        <Container>
            여기는 2번째 페이지
        </Container>
    )
}