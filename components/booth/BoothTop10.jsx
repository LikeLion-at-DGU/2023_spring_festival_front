import { BoothTop10Box, BoothTop10LeftBox, BoothTop10RightBox } from "@/boothStyle";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoothTop10({ boothTop10List, router }) {
  // 좋아요 순 정렬된 부스 리스트 임의로 5개로 추출
  const getRandomBooth5 = boothTop10List.data?.slice(0, 5);

  const boothTop10Data = getRandomBooth5?.map((top, idx) => {
    return (
      <BoothTop10Box
        key={top.id}
        style={{ animationDelay: `${idx}s` }}
        onClick={() => router.push(`/booth/detail/${top.id}`)}
      >
        <BoothTop10LeftBox>
          <FontAwesomeIcon icon={faHeart} />
          {top.like_cnt >= 1000 ? `+999` : top.like_cnt}
        </BoothTop10LeftBox>
        <BoothTop10RightBox>{top.operator}</BoothTop10RightBox>
      </BoothTop10Box>
    );
  });
  return boothTop10Data;
}
