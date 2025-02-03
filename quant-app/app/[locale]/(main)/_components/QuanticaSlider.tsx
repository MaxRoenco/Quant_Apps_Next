'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function QuanticaSlider() {
    return(
        <div className="quantica-slider">
        <Swiper
          centeredSlides={false}
          slidesPerView={2.5}
          spaceBetween={93}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{ 1100: { slidesPerView: 4 } }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica.svg" alt="Quantica" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica-fill.svg" alt="Quantica-fill" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica.svg" alt="Quantica" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica-fill.svg" alt="Quantica-fill" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica.svg" alt="Quantica" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>

          <SwiperSlide className="quantica-slider__slide">
            <Image src="/icons/Quantica-fill.svg" alt="Quantica-fill" width={300} height={0} className='w-auto h-auto' />
          </SwiperSlide>
        </Swiper>
      </div>
    )
}