import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DeafultImage from "../../../../components/image/common/booth_deafault.png"
import { BoothDetailCotainer, BoothLogoImage, BoothLogoWrapper, DetailRibbon } from './style';
import { Ribbon } from '../search_style';

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
            description: "나는 ㅋㅋ너는 ㅋㅋ 음악음악",
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

  // Fetch booth details using the `id` from the router query
  // ...

  return (
    <BoothDetailCotainer>
        <BoothLogoWrapper>
            <DetailRibbon type={booth.type}>{booth.type}</DetailRibbon>
            <BoothLogoImage src={DeafultImage}/>
        </BoothLogoWrapper>

    </BoothDetailCotainer>
  );
};

export default BoothDetailPage;
