import YunDDanDDan from "../../../components/image/timetable/singerThumbnail1.png";
import YoungK from "../../../components/image/timetable/singerThumbnail2.png";
import Bol4 from "../../../components/image/timetable/singerThumbnail3.png";
import GyeongSeo from "../../../components/image/timetable/singerThumbnail4.png";
import BeO from "../../../components/image/timetable/singerThumbnail5.png";
import Punch from "../../../components/image/timetable/singerThumbnail6.png";
import HighLight from "../../../components/image/timetable/singerThumbnail7.png";
import Idle from "../../../components/image/timetable/singerThumbnail8.png";

// 날짜 배열
export const dayArray = [
  {
    id: 1,
    date: 24,
    day: "WED",
  },
  {
    id: 2,
    date: 25,
    day: "THR",
  },
];

export const Guest24Array = [
  { id: 1, name: "경서", src: GyeongSeo },
  { id: 2, name: "윤딴딴", src: YunDDanDDan },
  { id: 3, name: "펀치", src: Punch },
  { id: 4, name: "(여자)아이들", src: Idle },
];

export const Guest25Array = [
  { id: 1, name: "영케이", src: YoungK },
  { id: 2, name: "비오", src: BeO },
  { id: 3, name: "볼빨간사춘기", src: Bol4 },
  { id: 4, name: "하이라이트", src: HighLight },
];

export const performance24Array = [
  { name: "만화얼(밴드)", type: "밴드", index: 1, startTime: "16:15", endTime: "16:40", day: 24 },
  {
    name: "쉽게 쓰여진 밴드",
    type: "밴드",
    index: 2,
    startTime: "16:40",
    endTime: "17:00",
    day: 24,
  },
  { name: "잼잼", type: "뮤지컬", index: 3, startTime: "17:00", endTime: "17:20", day: 24 },
  { name: "뭉게구름", type: "밴드", index: 4, startTime: "17:20", endTime: "17:40", day: 24 },
  { name: "렛츠무드", type: "밴드", index: 5, startTime: "17:40", endTime: "18:05", day: 24 },
  { name: "목멱성", type: "밴드", index: 6, startTime: "18:05", endTime: "18:30", day: 24 },
  { name: "피어리스던", type: "밴드", index: 7, startTime: "18:30", endTime: "19:00", day: 24 },
  { name: "두둠칫", type: "댄스", index: 8, startTime: "19:00", endTime: "19:30", day: 24 },
];

export const performance25Array = [
  { name: "무풍", type: "밴드", index: 1, startTime: "15:40", endTime: "16:10", day: 25 },
  { name: "ODC", type: "댄스", index: 2, startTime: "16:10", endTime: "16:40", day: 25 },
  { name: "아리랑", type: "뮤지컬", index: 3, startTime: "16:40", endTime: "17:10", day: 25 },
  { name: "AJAX", type: "힙합", index: 4, startTime: "17:10", endTime: "17:40", day: 25 },
  { name: "음샘", type: "밴드", index: 5, startTime: "17:40", endTime: "18:00", day: 25 },
  { name: "백상", type: "치어리딩", index: 6, startTime: "18:00", endTime: "19:40", day: 25 },
];
