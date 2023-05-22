import {
  BoothCardDetailDes,
  BoothCardDetailHeartWrapper,
  BoothCardDetailWrapper,
  BoothCardImage,
  BoothCardWrapper,
  CardDetailHeartCntWrapper,
  CardDetailHeartIcon,
  Ribbon,
} from "@/search_style";
import DeafultImage from "../image/common/booth_deafault.png";
import {
  RankBoothDetailLocation,
  RankBoothDetailTitle,
  RannkBoothDetailOperator,
} from "@/boothStyle";
import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

function BoothCard({
  id,
  name,
  type,
  operator,
  logo_image,
  is_liked,
  like_cnt,
  start_at,
  end_at,
  location,
  section
}) {
  const router = useRouter();
  const { pathname } = router;

  // Determine the page type based on the pathname
  const pageType = pathname === "/booth/search" ? "booth/search" : "booth";
  return (
    <div
      onClick={() => {
        sessionStorage.setItem("id", id);
        router.push(`/booth/detail/${id}`);
      }}
    >
      <BoothCardWrapper>
        <BoothCardImage
          src={logo_image == undefined ? DeafultImage : logo_image}
          alt="부스 이미지"
          width={160}
          height={160}
        />
        <BoothCardDetailWrapper>
          <Ribbon pageType={pageType} type={type}>
            {type}
          </Ribbon>
          <BoothCardDetailDes>
            <RankBoothDetailTitle>
              {String(name).length < 8
                ? name
                : `${String(name).slice(0, 7)}...`}
            </RankBoothDetailTitle>
            <RannkBoothDetailOperator>{operator}</RannkBoothDetailOperator>
            <RankBoothDetailLocation>{location}</RankBoothDetailLocation>
          </BoothCardDetailDes>

          <BoothCardDetailHeartWrapper>
            {/* 하트 어떻게..? */}
            <CardDetailHeartIcon icon={is_liked ? faHeart : emptyHeart} />
            <CardDetailHeartCntWrapper>{like_cnt}</CardDetailHeartCntWrapper>
          </BoothCardDetailHeartWrapper>
        </BoothCardDetailWrapper>
      </BoothCardWrapper>
    </div>
  );
}

export default BoothCard;
