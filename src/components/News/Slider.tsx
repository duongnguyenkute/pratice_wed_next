'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <div className='pt-17.5 pb-16 border-b-1'>
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            style={{
                '--swiper-pagination-color': '#00DDBE',
                '--swiper-pagination-bullet-inactive-color': '#fff',
                '--swiper-pagination-bullet-inactive-opacity': '1',
            } as React.CSSProperties}
            
            >
            <SwiperSlide>
                <img src="slider1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="slider1.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="slider1.png" alt="Slide 3" />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Slider