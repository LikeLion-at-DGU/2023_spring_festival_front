import { testBoothDataArray } from "@/pages/booth/testData";
import BoothCard from "./BoothCard";

export default function FilteredBooth({ dayOrNot }) {
  console.log(dayOrNot);
  const filteredBooth = testBoothDataArray.map((booth) => {
    return (
      <BoothCard
        key={booth.id}
        name={booth.name}
        type={booth.type}
        operator={booth.operator}
        likeCnt={booth.like_cnt}
        isLike={booth.is_liked}
        location={booth.location}
      />
    );
  });
  return filteredBooth;
}
