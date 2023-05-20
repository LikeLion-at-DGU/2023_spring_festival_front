import { BoothCardDetailDes, BoothCardDetailHeartWrapper, BoothCardDetailWrapper, BoothCardImage, BoothCardWrapper, CardDetailHeartCntWrapper, CardDetailHeartIcon } from "@/pages/booth/search_style";
import DeafultImage from "../image/common/booth_deafault.png"
import { HeartCntWrapper, HeartIcon, RankBoothDetail, RankBoothDetailLocation, RankBoothDetailTitle, RankBoothHeartWrapper, RannkBoothDetailOperator } from "@/pages/booth/style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

function BoothCard({name,operator,logoImage,likeCnt,isLike,location}) {
    return (
        <BoothCardWrapper>
            <BoothCardImage src={DeafultImage}/>
            <BoothCardDetailWrapper>
                <BoothCardDetailDes>
                    <RankBoothDetailTitle>{name}</RankBoothDetailTitle>
                    <RannkBoothDetailOperator>{operator}</RannkBoothDetailOperator>
                    <RankBoothDetailLocation>{location}</RankBoothDetailLocation>
                </BoothCardDetailDes>
                
                <BoothCardDetailHeartWrapper>
                    {/* 하트 어떻게..? */}
                    <CardDetailHeartIcon icon={isLike ? faHeart : emptyHeart} />
                    <CardDetailHeartCntWrapper>{likeCnt}</CardDetailHeartCntWrapper>
                </BoothCardDetailHeartWrapper>
                

            </BoothCardDetailWrapper>

            
        </BoothCardWrapper>
    );
}

export default BoothCard;