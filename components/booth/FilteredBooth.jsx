import { boothSectorArray } from "@/pages/booth/testData";
import BoothCard from "./BoothCard";

export default function FilteredBooth({
  boothList,
  dayOrNight,
  isToday,
  boothSector,
  boothSectorDetail,
}) {
  // 전체 / 주간 / 야간 부스 필터링------------------------------------
  const filteredByDayOrNight = boothList?.filter((booth1) => {
    const boothCard = (
      <BoothCard
        key={booth1.id}
        name={booth1.name}
        type={booth1.type}
        operator={booth1.operator}
        start_at={booth1.start_at}
        end_at={booth1.end_at}
        location={booth1.location}
        description={booth1.description}
        menu={booth1.menu}
        concept={booth1.concept}
      />
    );
    if (booth1.type === dayOrNight) {
      return boothCard;
    } else if (booth1.type !== dayOrNight && dayOrNight === "전체") {
      return boothCard;
    }
  });

  // 23, 24, 25일 필터링---------------------------------------------
  const filteredByIsToday = filteredByDayOrNight?.filter((booth2) => {
    const firstDay = Number(booth2.start_at.slice(-2));
    const secondDay = Number(booth2.end_at.slice(-2));
    const boothCard2 = (
      <BoothCard
        key={booth2.id}
        name={booth2.name}
        type={booth2.type}
        operator={booth2.operator}
        start_at={booth2.start_at}
        end_at={booth2.end_at}
        location={booth2.location}
        description={booth2.description}
        menu={booth2.menu}
        concept={booth2.concept}
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

  // 핀 디테일 장소 선택되지 않았을 때, 부스맵 핀 로케이션 해당 섹터 모든 부스 필터링
  const filteredByAllLocation = filteredByIsToday?.filter((all) => {
    if (
      boothSectorArray[boothSector]
        ?.map((b) => b.location)
        .includes(all.location)
    ) {
      return (
        <BoothCard
          key={all.id}
          name={all.name}
          type={all.type}
          operator={all.operator}
          start_at={all.start_at}
          end_at={all.end_at}
          location={all.location}
          description={all.description}
          menu={all.menu}
          concept={all.concept}
        />
      );
    }
  });

  // 부스맵 핀 로케이션 필터링
  const filteredByLocation = filteredByIsToday?.filter((booth3) => {
    const boothCard3 = (
      <BoothCard
        key={booth3.id}
        name={booth3.name}
        type={booth3.type}
        operator={booth3.operator}
        start_at={booth3.start_at}
        end_at={booth3.end_at}
        location={booth3.location}
        description={booth3.description}
        menu={booth3.menu}
        concept={booth3.concept}
      />
    );
    const clickedLocationObj = boothSectorArray[boothSector]?.find((sec) => {
      if (sec.id === boothSectorDetail) {
        // 클릭한 핀 모달 로케이션과 필터링된 데이터 중 같은 로케이션 객체 반환
        return sec;
      }
    });
    // booth3 -> 1, 2차 필터링 거친 부스 데이터 배열
    if (clickedLocationObj?.location === booth3.location) {
      // 위 찾은 로케이션과 2차 필터링 데이터 순회하는 같은 로케이션 부스 배열 생성
      return boothCard3;
    }
  });
  // console.log("boothSector >", boothSector, "boothSectorDetail >", boothSectorDetail);
  // console.log(boothSectorArray[boothSector]);

  const filteredAllBooth = filteredByAllLocation?.map((booth) => {
    return (
      <BoothCard
        key={booth.id}
        name={booth.name}
        type={booth.type}
        operator={booth.operator}
        start_at={booth.start_at}
        end_at={booth.end_at}
        location={booth.location}
        description={booth.description}
        menu={booth.menu}
        concept={booth.concept}
      />
    );
  });

  const filteredBooth = filteredByLocation?.map((booth) => {
    return (
      <BoothCard
        key={booth.id}
        name={booth.name}
        type={booth.type}
        operator={booth.operator}
        start_at={booth.start_at}
        end_at={booth.end_at}
        location={booth.location}
        description={booth.description}
        menu={booth.menu}
        concept={booth.concept}
      />
    );
  });

  if (boothSectorDetail === null) {
    return filteredAllBooth;
  } else if (boothSectorDetail !== null) {
    return filteredBooth;
  }
}
