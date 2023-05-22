import {
  BoothTop10Box,
  BoothTop10LeftBox,
  BoothTop10RightBox,
} from "@/pages/booth/style";

export default function BoothTop10({ boothList }) {
  // 부스 리스트 배열 무작위 정렬
  const getRandom5 = boothList?.sort(() => 0.5 - Math.random());
  // 랜덤 정렬된 부스 리스트 5개로 추출
  const getRandomBooth5 = getRandom5?.slice(0, 5);

  const boothTop10SortedData = getRandomBooth5?.sort((a, b) => {
    // like 대신 id로 임시 정렬
    return b.id - a.id;
  });

  const boothTop10Data = boothTop10SortedData?.map((top, idx) => {
    return (
      <BoothTop10Box key={top.id} style={{ animationDelay: `${idx}s` }}>
        <BoothTop10LeftBox>{top.id}</BoothTop10LeftBox>
        <BoothTop10RightBox>{top.operator}</BoothTop10RightBox>
      </BoothTop10Box>
    );
  });
  return boothTop10Data;
}
