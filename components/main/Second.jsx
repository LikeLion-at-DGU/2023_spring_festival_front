import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 90%;
    border: 1.5px solid blue;
`

export default function Second(){
    return(
        <Container>
            여기는 2번째 페이지
        </Container>
    )
}