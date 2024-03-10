'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/legacy/image';
import sliderImg from '../carData';
import Link from 'next/link';


export default function CarSlider() {

  return (
    <>
      <section className='slider_sec my-20'>
        <div className='container-fluid'>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true} // Enable loop mode
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              }
            }}
          >

            {
              sliderImg.map(item => (
                <SwiperSlide key={item.key}>
                  {/* <img src={item.image} alt={item.alt} /> */}
                  <Link href="/CarList">
                    {/* <a> */}
                      <Image
                        src={item.image}
                        alt={item.alt}
                        height={100}
                        width={100}
                        layout='responsive'
                        objectFit='contain'
                      />
                    {/* </a> */}
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
    </>
  )
}
