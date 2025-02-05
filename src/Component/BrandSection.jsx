import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Full Swiper CSS

const BrandSection = () => {
  return (
    <section className="tp-brand-area p-relative">
      <span className="tp-brand-border transition-3"></span>
      <div className="container container-large">
        <div className="tp-brand-inner p-relative">
          <span className="tp-brand-inner-border left tp-vertical-line"></span>
          <span className="tp-brand-inner-border right tp-vertical-line"></span>

          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-5">
              <h3 className="tp-brand-title">Trusted by <br /> World leading brands</h3>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-7">
              <div className="tp-brand-slider">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  <SwiperSlide className="tp-brand-item">
                    <a href="#">
                      <img src="../src/assets/img/brand/logo_01.png" alt="Brand 1" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="tp-brand-item">
                    <a href="#">
                      <img src="../src/assets/img/brand/logo_02.png" alt="Brand 2" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="tp-brand-item">
                    <a href="#">
                      <img src="../src/assets/img/brand/logo_03.png" alt="Brand 3" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="tp-brand-item">
                    <a href="#">
                      <img src="../src/assets/img/brand/logo_04.png" alt="Brand 4" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="tp-brand-item">
                    <a href="#">
                      <img src="../src/assets/img/brand/logo_05.png" alt="Brand 5" />
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
