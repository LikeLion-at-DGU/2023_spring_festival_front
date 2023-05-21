import { testBoothDataArray } from "@/pages/booth/testData";
import BoothCard from "./BoothCard";

export default function FilteredBooth({ dayOrNight, isToday }) {
  // 전체 / 주간 / 야간 부스 필터링------------------------------------
  const filteredByDayOrNight = testBoothDataArray.filter((booth) => {
    const boothCard = (
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
    if (booth.type === dayOrNight) {
      return boothCard;
    } else if (booth.type !== dayOrNight && dayOrNight === "전체") {
      return boothCard;
    }
  });
  // 23, 24, 25일 필터링---------------------------------------------
  const filteredByIsToday = filteredByDayOrNight.filter((booth2) => {
    const firstDay = Number(booth2.start_at.slice(-2));
    const secondDay = Number(booth2.end_at.slice(-2));
    const boothCard2 = (
      <BoothCard
        key={booth2.id}
        name={booth2.name}
        type={booth2.type}
        operator={booth2.operator}
        likeCnt={booth2.like_cnt}
        isLike={booth2.is_liked}
        location={booth2.location}
      />
    );
    if (isToday === 23 && firstDay === 23) {
      // 23일 필터링
      return boothCard2;
    } else if (isToday === 24 && (firstDay === 24 || secondDay === 24)) {
      // 24일 필터링
      return boothCard2;
    } else if (isToday === 25 && secondDay === 25) {
      // 25일 필터링
      return boothCard2;
    }
  });

  const filteredBooth = filteredByIsToday.map((booth) => {
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
