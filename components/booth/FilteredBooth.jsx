import { testBoothDataArray } from "@/pages/booth/testData";
import BoothCard from "./BoothCard";

export default function FilteredBooth({ dayOrNight }) {
  const filteredbyDayOrNight = testBoothDataArray.filter((booth) => {
    if (booth.type === dayOrNight) {
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
    } else if (booth.type !== dayOrNight && dayOrNight === "전체") {
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
    }
  });

  const filteredBooth = filteredbyDayOrNight.map((booth) => {
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
