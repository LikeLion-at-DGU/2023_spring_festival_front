import {
  BoothCardDetailDes,
  BoothCardDetailHeartWrapper,
  BoothCardDetailWrapper,
  BoothCardImage,
  BoothCardWrapper,
  CardDetailHeartCntWrapper,
  CardDetailHeartIcon,
  Ribbon,
} from "@/pages/booth/search_style";
import DeafultImage from "../image/common/booth_deafault.png";
import {
  RankBoothDetailLocation,
  RankBoothDetailTitle,
  RannkBoothDetailOperator,
} from "@/pages/booth/style";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";


function BoothCard({ id, name, operator, logoImage, likeCnt, isLike, location, type }) {
  const router = useRouter();
  const { pathname } = router;

  // Determine the page type based on the pathname
  const pageType = pathname === '/booth/search' ? 'booth/search' : 'booth';

  return (
    <div onClick={()=>{
      sessionStorage.setItem("id",id)
      router.push(`/booth/detail/${id}`)
    }}>
      <BoothCardWrapper>
        <BoothCardImage src={DeafultImage} alt="부스 이미지" />
        <BoothCardDetailWrapper>
          <Ribbon pageType={pageType} type={type}>{type}</Ribbon>
          <BoothCardDetailDes>
            <RankBoothDetailTitle>{String(name).length < 8 ? name : `${String(name).slice(0,7)}...`}</RankBoothDetailTitle>
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
    </div>
  );
}

export default BoothCard;
