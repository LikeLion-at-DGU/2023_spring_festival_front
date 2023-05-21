import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const FooterWrapper = styled.footer`
    background: linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, #EAEAEA 99.94%, rgba(255, 240, 245, 0.892708) 99.95%, #DFDFDF 99.96%);
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10%;
    color: #BBBBBB;
    font-size: 12px;
    min-height: 90px;
`;

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const FooterInsta = styled.div`
    flex-direction: row;
    font-size: 20px;
    gap: 30%;
    display: flex;
    text-align: right;
    justify-content: right;
`;

const LinkTag = styled.span`
    color: #F0C3D1;
    padding-top: 3%;
    font-size: 10px;
`;

export default function Footer(){
    const router = useRouter();

    return(
        <FooterWrapper>
            <FooterText>
            ©DGU Likelion. All rights reserved.
            <LinkTag>special thanks to <span onClick={()=>router.push("/skdevocean")}>@skdevocean</span></LinkTag>
            </FooterText>
            <FooterInsta>
                <FontAwesomeIcon onClick={()=>router.push("/dgu-likelion-instar")} icon={faInstagram} />
                <FontAwesomeIcon onClick={()=>router.push("/dgu-likelion-github")} icon={faGithub} />
            </FooterInsta>
        </FooterWrapper>
    )
}