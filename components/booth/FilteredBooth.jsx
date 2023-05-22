import { boothSectorArray } from "@/testData";
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
        name={booth1.name} // string
        type={booth1.type} // string
        operator={booth1.operator} // string
        logo_image={booth1.logo_image} // string
        is_liked={booth1.is_liked} // boolean
        like_cnt={booth1.like_cnt} // number
        start_at={booth1.start_at} // string
        end_at={booth1.end_at} // string
        location={booth1.location} // string
        section={booth1.section} // num || null
      />
    );
    if (booth1.type === dayOrNight) {
      // console.log("주간 야간 필터링 >", filteredByDayOrNight);
      return boothCard;
    } else if (booth1.type !== dayOrNight && dayOrNight === "전체") {
      // console.log("주야 전체 필터링 >", filteredByDayOrNight);
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
        name={booth2.name} // string
        type={booth2.type} // string
        operator={booth2.operator} // string
        logo_image={booth2.logo_image} // string
        is_liked={booth2.is_liked} // boolean
        like_cnt={booth2.like_cnt} // number
        start_at={booth2.start_at} // string
        end_at={booth2.end_at} // string
        location={booth2.location} // string
        section={booth2.section} // num || null
      />
    );
    if (isToday === 23 && firstDay === 23) {
      // 23일 필터링
      // console.log("23일 날짜 필터링", filteredByIsToday);
      return boothCard2;
    } else if (isToday === 24 && (firstDay === 24 || secondDay === 24)) {
      // 24일 필터링
      // console.log("24일 날짜 필터링", filteredByIsToday);
      return boothCard2;
    } else if (isToday === 25 && secondDay === 25) {
      // 25일 필터링
      // console.log("25일 날짜 필터링", filteredByIsToday);
      return boothCard2;
    }
    // console.log("날짜 필터링 >", filteredByDayOrNight);
  });

  // 핀 디테일 장소 선택되지 않았을 때, 부스맵 핀 로케이션 해당 섹터 모든 부스 필터링
  const filteredByAllLocation = filteredByIsToday?.filter((all) => {
    if (
      boothSectorArray[boothSector]
        ?.map((b) => b.location)
        .includes(all.location)
    ) {
      // console.log(
      //   "3차 all -> 선택 섹션 장소 중 2차 필터링 끝낸 곳들 중 장소 겹치는 부스",
      //   filteredByAllLocation
      // );
      return (
        <BoothCard
          key={all.id}
          name={all.name} // string
          type={all.type} // string
          operator={all.operator} // string
          logo_image={all.logo_image} // string
          is_liked={all.is_liked} // boolean
          like_cnt={all.like_cnt} // number
          start_at={all.start_at} // string
          end_at={all.end_at} // string
          location={all.location} // string
          section={all.section} // num || null
        />
      );
    }
  });

  // 부스맵 핀 로케이션 필터링
  const filteredByLocation = filteredByIsToday?.filter((booth3) => {
    const boothCard3 = (
      <BoothCard
        key={booth3.id}
        name={booth3.name} // string
        type={booth3.type} // string
        operator={booth3.operator} // string
        logo_image={booth3.logo_image} // string
        is_liked={booth3.is_liked} // boolean
        like_cnt={booth3.like_cnt} // number
        start_at={booth3.start_at} // string
        end_at={booth3.end_at} // string
        location={booth3.location} // string
        section={booth3.section} // num || null
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
        id={booth.id}
        name={booth.name} // string
        type={booth.type} // string
        operator={booth.operator} // string
        logo_image={booth.logo_image} // string
        is_liked={booth.is_liked} // boolean
        like_cnt={booth.like_cnt} // number
        start_at={booth.start_at} // string
        end_at={booth.end_at} // string
        location={booth.location} // string
        section={booth.section} // num || null
      />
    );
  });

  const filteredBooth = filteredByLocation?.map((booth) => {
    return (
      <BoothCard
        key={booth.id}
        id={booth.id}
        name={booth.name} // string
        type={booth.type} // string
        operator={booth.operator} // string
        logo_image={booth.logo_image} // string
        is_liked={booth.is_liked} // boolean
        like_cnt={booth.like_cnt} // number
        start_at={booth.start_at} // string
        end_at={booth.end_at} // string
        location={booth.location} // string
        section={booth.section} // num || null
      />
    );
  });
  // Slam Drunk 23 23 명진관 섹션3
  // 회계세끼 23 23 혜화별관 섹션2
  if (boothSectorDetail === null) {
    return filteredAllBooth;
  } else if (boothSectorDetail !== null) {
    return filteredBooth;
  }
}
