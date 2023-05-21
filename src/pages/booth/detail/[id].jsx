import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DeafultImage from "../../../../components/image/common/booth_deafault.png"
import { BoothDetailContent, BoothDetailCotainer, BoothDetailHeader, BoothDetailHeaderWrapper, BoothDetailLoveShareWrapper, BoothDetailOperator, BoothDetailTitle, BoothLogoImage, BoothLogoWrapper, DetailHeart, DetailHeartCnt, DetailHeartWrapper, DetailRibbon, DetailShareIcon, ShareIcon } from './style';
import { BoothCardDetailHeartWrapper, CardDetailHeartCntWrapper, CardDetailHeartIcon, Ribbon } from '../search_style';
import Booth from '..';
import { faHeart, faShareNodes  } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";




const BoothDetailPage = () => {

    const [booth, setBooth] = useState(
        {
            id: 1,
            name: "으아아앙악..",
            type: "주간부스",
            operator: "멋쟁이사자처럼",
            logo_image: [],
            like_cnt: 18,
            start_at: "2023-05-23",
            end_at: "2023-05-23",
            location: "원흥관 9번",
            section: "1",
            description: "나는 ㅋㅋ너",
            menu: {
                "메뉴1":2000,
                "메뉴2":3000,
                "메뉴3":4000,
                },
            menu_image: [],
            is_liked: false
        }
    );
    

  const router = useRouter();
  const { id } = router.query;

//   링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('지금 있는 페이지의 링크가 복사되었습니다.');
  };



  return (
    <BoothDetailCotainer>
        <BoothLogoWrapper>
            <DetailRibbon type={booth.type}>{booth.type}</DetailRibbon>
            <BoothLogoImage src={DeafultImage}/>
        </BoothLogoWrapper>
        <BoothDetailHeader>
            <BoothDetailHeaderWrapper>
                <BoothDetailOperator>
                    {booth.operator}
                </BoothDetailOperator>
                <BoothDetailTitle>
                    {booth.name}
                </BoothDetailTitle>
            </BoothDetailHeaderWrapper>
            <BoothDetailLoveShareWrapper>
                <DetailHeartWrapper>
                    <DetailHeart icon={booth.is_liked ? faHeart : emptyHeart} size='lg'/>
                    <DetailHeartCnt>{booth.like_cnt}</DetailHeartCnt>
                </DetailHeartWrapper>
                
                <ShareIcon icon={faShareNodes} size='lg' onClick={handleCopyLink}/>
            </BoothDetailLoveShareWrapper>

        </BoothDetailHeader>
        <BoothDetailContent>
            {booth.description}
        </BoothDetailContent>

    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;
