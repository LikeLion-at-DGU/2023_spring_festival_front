import { RankBoothDetail, RankBoothDetailLocation, RankBoothDetailTitle, RankBoothImage, RankText, RankWrapper, RannkBoothDetailOperator, RecomandRowCardWrapper } from "@/pages/booth/style";
import Image from "next/image";
import styled from "styled-components";
import DeafultImage from "../image/common/booth_deafault.png"



// 부스정보 props로 받아서 사용하기 
function RecomandRowCard() {
    return (
        <RecomandRowCardWrapper>
            {/* 랭킹 글자  */}
            <RankWrapper>
                <RankText>
                    TOP1
                </RankText> 
            </RankWrapper>        
            {/* 랭킹 부스 이미지 */}
            <RankBoothImage src={DeafultImage}/>
            {/* 랭킹 부스 세부 내용 */}
            <RankBoothDetail>
                <RankBoothDetailTitle>
                    코오오딩 주점
                </RankBoothDetailTitle>
                <RannkBoothDetailOperator>
                    멋쟁이사자처럼
                </RannkBoothDetailOperator>
                <RankBoothDetailLocation>
                    명진관 1번 부스
                </RankBoothDetailLocation>
            </RankBoothDetail>
                <RankBoothHeartWrapper>

                </RankBoothHeartWrapper>
        </RecomandRowCardWrapper>
        
    );
}

export default RecomandRowCard;