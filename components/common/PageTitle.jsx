import { useRouter } from "next/router";
import Image from 'next/image';
import time from "../image/common/timetable.svg"
import booth from "../image/common/booth.svg"
import about from "../image/common/about.svg"
import notice from "../image/common/notice.svg"
import styled from 'styled-components';
import { useEffect, useState } from 'react';

 
export default function PageTitle() {
  const router = useRouter();
  const [page, setPage] = useState(0);

  // useEffect(()=>{
  //   if(router.pathname === "/timetable"){
  //     setPage(1);
  //   }else if(router.pathname === "/notice"){
  //     setPage(2);
  //   }else if(router.pathname === "/about"){
  //     setPage(3);
  //   }else if(router.pathname === "/booth"){
  //     setPage(4);
  //   }
  // })

  const Img = styled(Image)`
    width: 60%;
    margin-top: 10px;
  `
  
  return (
    ( router.pathname === "/timetable" || !router.query.id === null ) ? 
    <Img
      src={time}
      height={30}
      alt={"title"}
    /> : 
    router.pathname === "/notice" ? 
    <Img
      src={notice}
      height={30}
      alt={"title"}
    /> : 
    router.pathname === "/about" ? 
    <Img
      src={about}
      height={30}
      alt={"title"}
    />  : 
    router.pathname === "/booth" ? 
    <Img
      src={booth}
      height={30}
      alt={"title"}
    />  : null
    
  );
}