import { RankText, RankWrapper, RecomandRowCardWrapper } from "@/pages/booth/style";
import Image from "next/image";
import styled from "styled-components";



function RecomandRowCard() {
    return (
        <RecomandRowCardWrapper>
            <RankWrapper>
                <RankText>
                    TOP1
                </RankText> 
            </RankWrapper>                
        </RecomandRowCardWrapper>
        
    );
}

export default RecomandRowCard;