import {
  HeartCntWrapper,
  HeartIcon,
  HeartWrapper,
  RankBoothDetail,
  RankBoothDetailLocation,
  RankBoothDetailTitle,
  RankBoothHeartWrapper,
  RankBoothImage,
  RankText,
  RankWrapper,
  RannkBoothDetailOperator,
  RecomandRowCardWrapper,
} from "@/boothStyle";
import Image from "next/image";
import styled from "styled-components";
import DeafultImage from "../image/common/booth_deafault.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

// 부스정보 props로 받아서 사용하기
function RecomandRowCard({
  ranking,
  id,
  logoImage,
  boothName,
  boothOperator,
  boothLocation,
  likeCnt,
  is_liked,
}) {
  const handleClick = () => {
  };

  // 이미지 적용 어떻게?
  const DetailLogoImage = logoImage ? logoImage : DeafultImage;

  return (
    <Link href={`/booth/detail/${id}`}>
      <RecomandRowCardWrapper>
        {/* 랭킹 글자  */}
        <RankWrapper>
          <RankText>TOP{ranking + 1}</RankText>
        </RankWrapper>
        {/* 랭킹 부스 이미지 */}
        <RankBoothImage src={DetailLogoImage} alt="부스이미지" width={80} height={80}/>
        {/* 랭킹 부스 세부 내용 */}
        <RankBoothDetail>
          <RankBoothDetailTitle>{boothName}</RankBoothDetailTitle>
          <RannkBoothDetailOperator>{boothOperator}</RannkBoothDetailOperator>
          <RankBoothDetailLocation>{boothLocation}</RankBoothDetailLocation>
        </RankBoothDetail>
        <RankBoothHeartWrapper>
          {/* 하트 어떻게..? */}
          <HeartIcon
            icon={is_liked ? faHeart : emptyHeart}
            onClick={handleClick}
          />
          <HeartCntWrapper>{likeCnt}</HeartCntWrapper>
        </RankBoothHeartWrapper>
      </RecomandRowCardWrapper>
    </Link>
  );
}

export default RecomandRowCard;
