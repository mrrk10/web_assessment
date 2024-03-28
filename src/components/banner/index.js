'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import  Styles from '../../app/page.module.css'
const Banner = () => {
  
  return(
     <>
     <div >
     <Swiper
     slidesPerView={1}
        pagination={{
          type: 'progressbar',
        }}

        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className={Styles.mySwiper}>
        <SwiperSlide><Image src="/ovan.jpg" width={1290} height={300} style={{marginTop:'50px'}}/></SwiperSlide>
        <SwiperSlide><Image src="/ovan.jpg" width={1290} height={300} style={{marginTop:'50px'}}/></SwiperSlide>
        <SwiperSlide><Image src="/shoes.jpeg" width={1290} height={300} style={{marginTop:'50px'}}/></SwiperSlide>
        <SwiperSlide><Image src="/tech.jpeg" width={1290} height={300} style={{marginTop:'50px'}}/> </SwiperSlide>
        <SwiperSlide><Image src="/ovan.jpg" width={1290} height={300} style={{marginTop:'50px'}}/></SwiperSlide>
        <SwiperSlide><Image src="/ovan.jpg" width={1290} height={300} style={{marginTop:'50px'}}/></SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}

export default Banner