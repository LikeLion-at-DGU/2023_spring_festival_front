import { React, useEffect, useState} from "react";

// import aixos from "axios";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { DateNum, DateWeek } from "../timetable";
import { BoxDate, BoxDay, Container, DateContainer, DayBox, LocationImg } from "./style";

import boothMap from "../../../components/image/booth/exampleMap.png";
import MapPing from "components/image/booth/MapPing";

// 날짜 배열 
const dayArray = [
  {
    id: 1,
    date: 23,
    day: 'TUE',
  },
  {
    id: 2,
    date: 24,
    day: 'WED',
  },
  {
    id: 3,
    date: 25,
    day: 'THR',
  },
];

// 건물리스스트
const buildingArray = [
  {
    id: 1,
    building: '팔정도',
  },
  {
    id: 2,
    building: '대운동장',
  },
  {
    id: 3,
    building: '만해광장',
  },
  {
    id: 4,
    building: '명진관',
  },
  {
    id: 5,
    building: '원흥관',
  },
  {
    id: 6,
    building: '학생회관',
  },
  {
    id: 7,
    building: '학림관',
  },
  {
    id: 8,
    building: '다향관',
  },
  {
    id: 9,
    building: '법학관',
  },
  {
    id: 10,
    building: '혜화관',
  },
  {
    id: 11,
    building: '사회과학관',
  },
  {
    id: 12,
    building: '잉카페앞',
  },
];

export default function Booth(){
  // ----------- 부스 더미데이터 -----------
  const [booth, setBooth] = useState();

  // ----------- 로딩 -----------
  const [isLoading, setIsLoading] = useState(false);
  const [isExist, setIsExist] = useState(true);

  // ----------- DATE 관련 -----------
  // 27일부터 30일까지
  const day = new Date();
  const todate = day.getDate() - 23 === 2 ? 2 : day.getDate() - 23 === 3 ? 3 : 1;
  const [isToday, setIsToday] = useState(todate);

  // ----------- 건물 관련 -----------
  const [isBuilding, setIsBuilding] = useState('팔정도');

  // ----------- 초기 셋팅 -----------

  // 날짜, 건물 바뀌면 재랜더링 
  useEffect(() => {
    fetchBooth();
  }, [isToday, isBuilding]);

  // 부스 데이터 가져오기
  const fetchBooth = async () => {
    try {
      // 부스 전체 list GET 
      // const request = await axios.get(`/booths`);
      
      // booth setting
      // setBooth(request.data);

      // 현재는 더미데이터 setting
      setBooth(
        [
          {
            id: 1,
            name: "동멋주점",
            type: "야간부스",
            operator: "멋쟁이사자처럼",
            logo_image: "https://han.gl/pYMEv", 
            like_cnt: 100,
            start_at: "2023-05-23T18:00:07.687842+09:00",
            end_at: "2023-05-23T23:00:07.687842+09:00",
            location: "학생회관",
            is_liked: true,
          },
          {
            id: 2,
            name: "크아아학",
            type: "야간부스",
            operator: "멋쟁이사자처럼",
            logo_image: "https://han.gl/pYMEv", 
            like_cnt: 100,
            start_at: "2023-05-23T18:00:07.687842+09:00",
            end_at: "2023-05-23T23:00:07.687842+09:00",
            location: "학생회관",
            is_liked: true,
          },
        ]
      )
      setIsLoading(true);

    } catch (error) {
      setIsExist(false);
      console.log('ERROR', error);
    }
  };

  // 부스가 존재하면
  return isExist ? (
    <Container>
       <DateContainer>
        {/* api호출 방법 :/api/booths?day={day}&location={location} */}
        {dayArray.map((i) => (
          <DayBox key={i.id} onClick={() => setIsToday(i.id)}>
            <BoxDate isActive={isToday === i.id}><DateNum>{i.date}</DateNum></BoxDate>
            <BoxDay isActive={isToday === i.id}><DateWeek>{i.day}</DateWeek></BoxDay>
          </DayBox>
        ))}
      </DateContainer>
      {/* 로딩  */}
      {isLoading ? (
        <>
          {/* 지도 이미지 */}
          <div style={{ position: 'relative' }}>
            <LocationImg alt={isBuilding} src={boothMap} className="fadeIn" />
            {MapPing(isBuilding)}
            {/* <BuildingLocationImage src={mainMapIcon} /> */}
          </div>
          <BuildingContainer>
            {buildingArray.map((bu) => {
              return (
                <BuildingDetail
                  key={bu.id}
                  onClick={() => {
                    setIsBuilding(bu.building);
                  }}
                  isActive={isBuilding === bu.building}
                >
                  {bu.building}
                </BuildingDetail>
              );
            })}
          </BuildingContainer>
          {/* map으로 카드 뜨게 만들기 */}
          <BoothCardContainer>
            {booth.length != 0 ? (
              // 등록된 부스가 있을때
              booth.map((boo) => {
                // console.log(boo.images[0].storedFilePath);
                return (
                  <Boothcard
                    key={boo.id}
                    boothId={boo.id}
                    title={boo.title}
                    intro={boo.introduction}
                    type={boo.boothType}
                    locationName={boo.location}
                    isLike={boo.isLike}
                    likeCount={boo.likeCnt}
                    boothImage={boo.images[0]}
                  />
                );
              })
            ) : (
              // 등록된 부스가 없을때
              <Stack sx={{ width: '328px', margin: '30px auto' }} spacing={2}>
                <div className="no-results__text">
                  <img src={boothsearchC} className="noResultImg" />
                  <p>등록되어 있는 부스가 없습니다.</p>
                </div>
              </Stack>
            )}
          </BoothCardContainer>
        </>
      ) : (
        <Fade in="true" unmountOnExit style={{ margin: '100px auto' }}>
          <CircularProgress />
        </Fade>
      )}
        
      
      
      }



    </Container>
  ) :(
    <div>부스가 없습니다.</div>
  )
}