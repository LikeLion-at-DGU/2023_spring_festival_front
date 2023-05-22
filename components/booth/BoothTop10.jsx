import { BoothTop10Box, BoothTop10LeftBox, BoothTop10RightBox } from "@/pages/booth/style";

export default function BoothTop10({ boothList }) {
  const boothTop10SortedData = boothList?.sort((a, b) => {
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
