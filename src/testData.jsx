export const testBoothDataArray = [
  {
    id: 1,
    name: "1번 부스",
    type: "주간부스",
    operator: "멋쟁이사자처럼",
    logo_image: [],
    like_cnt: 18,
    start_at: "2023-05-23",
    end_at: "2023-05-23",
    location: "원흥관 4층",
    section: 1,
    description: "나는 ㅋㅋ너는 ㅋㅋ 음악음악",
    menu: {
      메뉴1: 2000,
      메뉴2: 3000,
      메뉴3: 4000,
    },
    menu_image: [],
    is_liked: false,
  },
  {
    id: 2,
    name: "2번 부스",
    type: "야간부스",
    operator: "코끼리멋쟁이",
    logo_image: [],
    like_cnt: 12,
    start_at: "2023-05-25",
    end_at: "2023-05-25",
    location: "학생회관",
    section: 2,
    description: "오우예아~ 오우예아~",
    menu: {
      메뉴1: 7000,
      메뉴2: 12000,
      메뉴3: 9000,
    },
    menu_image: [],
    is_liked: true,
  },
  {
    id: 3,
    name: "3번 부스",
    type: "야간부스",
    operator: "축기단",
    logo_image: [],
    like_cnt: 1,
    start_at: "2023-05-24",
    end_at: "2023-05-24",
    location: "팔정도",
    section: 4,
    description: "나는 ㅋㅋ너는 ㅋㅋ 음악음악",
    menu: {
      메뉴1: 22000,
      메뉴2: 54000,
      메뉴3: 33000,
    },
    menu_image: [],
    is_liked: true,
  },
  {
    id: 4,
    name: "4번 부스",
    type: "야간부스",
    operator: "멋쟁이홍보팀처럼",
    logo_image: [],
    like_cnt: 18,
    start_at: "2023-05-24",
    end_at: "2023-05-25",
    location: "혜화관",
    section: 10,
    description: "너 납치된거야",
    menu: {
      메뉴1: 52000,
      메뉴2: 554000,
      메뉴3: 31000,
    },
    menu_image: [],
    is_liked: true,
  },
];

// 부스 응답 JSON
// name
// type
// operator
// start_at
// end_at
// location
// description
// menu
// concept

export const boothSectorArray = [
  // Section1
  [{ id: 1, location: "이해랑예술극장" }],
  // Section2
  [
    { id: 1, location: "사회과학관" },
    { id: 2, location: "혜화관" },
    { id: 3, location: "혜화별관" },
  ],
  // Section3
  [
    { id: 1, location: "명진관" },
    { id: 2, location: "팔정도" },
  ],
  // Section4
  [{ id: 1, location: "원흥관 4층" }],
  // Section5
  [{ id: 1, location: "만해광장" }],
  // Section6
  [
    { id: 1, location: "학생회관" },
    { id: 2, location: "학림관" },
  ],
];

// const test = [
//   { id: 1, location: [{ idx: 1, name: "이해랑예술극장" }] },
//   {
//     id: 2,
//     location: [
//       { idx: 1, name: "사회과학관" },
//       { idx: 2, name: "혜화관" },
//       { idx: 3, name: "혜화별관" },
//     ],
//   },
//   {
//     id: 3,
//     location: [
//       { idx: 1, name: "명진관" },
//       { idx: 2, name: "팔정도" },
//     ],
//   },
//   { id: 4, location: [{ idx: 1, name: "원흥관 4층" }] },
//   { id: 5, location: [{ idx: 2, name: "만해광장" }] },
//   {
//     id: 6,
//     location: [
//       { idx: 1, name: "학생회관" },
//       { idx: 2, name: "학림관" },
//     ],
//   },
// ];

// [1세션]
// 1. 이해랑예술극장

// [2세션]
// 2. 사회과학관
// 3. 혜화관
// 4. 혜화별관

// [3세션]
// 5. 명진관
// 6. 팔정도

// [4세션]
// 7. 원흥관 4층

// [5세션]
// 8. 만해광장

// [6세션]
// 9. 학생회관
// 10. 학림관
