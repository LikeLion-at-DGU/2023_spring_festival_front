import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper';
import "swiper/css";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";

const Container = styled(Swiper)`
    width: 100%;
    height: 100%;
`

export default function Card(){
    return(
        <Container
         className="mySwiper"
         /*autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}*/
          //loop={true}
         // modules={[Autoplay]}
          >
            <SwiperSlide>
                <Item1 />
            </SwiperSlide>
            <SwiperSlide>
                <Item2 />
            </SwiperSlide>
            <SwiperSlide>
                <Item3 />
            </SwiperSlide>
            <SwiperSlide>
                <Item4 />
            </SwiperSlide>
      </Container>
    )
}