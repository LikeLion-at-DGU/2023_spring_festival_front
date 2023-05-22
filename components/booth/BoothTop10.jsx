import {
  BoothTop10Box,
  BoothTop10LeftBox,
  BoothTop10RightBox,
} from "@/boothStyle";

export default function BoothTop10({ boothList }) {
  const boothSortByLikeCount = boothList?.sort((a, b) => {
    // like 대신 id로 임시 정렬
    return b.id - a.id;
  });

  // 부스 리스트 배열 무작위 정렬
  const boothRandomSorted = boothSortByLikeCount?.sort(
    () => 0.5 - Math.random()
  );

  // 좋아요 순 정렬된 부스 리스트 임의로 5개로 추출
  const getRandomBooth5 = boothRandomSorted?.slice(0, 5);

  const boothTop10Data = getRandomBooth5?.map((top, idx) => {
    return (
      <BoothTop10Box key={top.id} style={{ animationDelay: `${idx}s` }}>
        <BoothTop10LeftBox>{top.id}</BoothTop10LeftBox>
        <BoothTop10RightBox>{top.operator}</BoothTop10RightBox>
      </BoothTop10Box>
    );
  });
  return boothTop10Data;
}
