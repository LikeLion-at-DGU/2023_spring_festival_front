import { HeartCntWrapper, HeartIcon, HeartWrapper, RankBoothDetail, RankBoothDetailLocation, RankBoothDetailTitle, RankBoothHeartWrapper, RankBoothImage, RankText, RankWrapper, RannkBoothDetailOperator, RecomandRowCardWrapper } from "@/pages/booth/style";
import Image from "next/image";
import styled from "styled-components";
import DeafultImage from "../image/common/booth_deafault.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'



// 부스정보 props로 받아서 사용하기 
function RecomandRowCard() {

    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        setIsLiked(!isLiked);
    }
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
                <HeartIcon icon={ isLiked ? faHeart: emptyHeart  } onClick={handleClick}/>

                
                <HeartCntWrapper>
                157
                </HeartCntWrapper>
            </RankBoothHeartWrapper>
            
        </RecomandRowCardWrapper>
        
    );
}

export default RecomandRowCard;