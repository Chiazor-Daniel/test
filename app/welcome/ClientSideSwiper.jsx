"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Lazy, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ClientSideSwiper = ({ children, ...props }) => {
  return (
    <Swiper modules={[Virtual, Lazy, Pagination]} {...props}>
      {children}
    </Swiper>
  );
};

export const ClientSideSwiperSlide = SwiperSlide;

export default ClientSideSwiper;