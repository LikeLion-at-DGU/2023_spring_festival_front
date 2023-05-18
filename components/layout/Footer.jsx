import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const FooterWrapper = styled.footer`
    background: linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, #EAEAEA 99.94%, rgba(255, 240, 245, 0.892708) 99.95%, #DFDFDF 99.96%);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    color: #BBBBBB;
    font-weight: 500;
    font-size: 12px;
    min-height: 90px;
`;

const FooterText = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin: 3% 40%;
`;

export default function Footer(){
    const router = useRouter();

    return(
        <FooterWrapper>
            ©DGU Likelion. All rights reserved.
            <FooterText>
                <FontAwesomeIcon onClick={()=>router.push("/dgu-likelion-instar")} icon={faInstagram} />
                <FontAwesomeIcon onClick={()=>router.push("/dgu-likelion-github")} icon={faGithub} />
            </FooterText>
        </FooterWrapper>
    )
}