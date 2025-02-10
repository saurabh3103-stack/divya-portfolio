import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay"; // Ensure autoplay styles are included
import { Navigation, Pagination, Autoplay } from "swiper";

const ClientReview = () => {
    return (
      <>
        <section className="tp-testimonial-area tp-bg-light pt-80 pb-80">
            <div className="container">
            <div class="row">
                     <div class="col-xl-12">
                        <div class="tp-testimonial-section-title">
                           <div class="tp-section-title-wrapper tp_text_anim mb-50 text-center">
                              <div class="tp-section-title-inner tp_title_anim p-relative">
                                 <span class="tp-section-subtitle">Testimonials</span>
                                 <h3 class="tp-section-title">What clients say</h3>
                              </div>
                              <p>Rated 4.9 out of 5 based on 768 reviews</p>
                           </div>
                        </div>
                     </div>
                  </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                           //  navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="tp-testimonial-slider"
                        >
                            <SwiperSlide>
                                <div className="tp-testimonial-item theme-bg-2">
                                    <div className="tp-testimonial-quote">
                                        <img src="../img/testimonial/quote.svg" alt="" />
                                    </div>
                                    <div className="tp-testimonial-item-top d-flex align-items-center">
                                        <div className="tp-testimonial-rating">
                                            {"⭐".repeat(5)}
                                        </div>
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>
                                            "Will gave our website and brand whole new life while staying true to
                                            who we are. We would never have thought of going in the direction he
                                            pitched but we couldn't be happier."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tp-testimonial-item theme-bg-2">
                                    <div className="tp-testimonial-quote">
                                        <img src="../img/testimonial/quote.svg" alt="" />
                                    </div>
                                    <div className="tp-testimonial-item-top d-flex align-items-center">
                                        <div className="tp-testimonial-rating">
                                            {"⭐".repeat(5)}
                                        </div>
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>
                                            ""Will gave our website and brand whole new life while staying true to who
                                             we are. We would never have thought of going in the direction he pitched
                                             but we couldn't be happier.""
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tp-testimonial-item theme-bg-2">
                                    <div className="tp-testimonial-quote">
                                        <img src="../img/testimonial/quote.svg" alt="" />
                                    </div>
                                    <div className="tp-testimonial-item-top d-flex align-items-center">
                                        <div className="tp-testimonial-rating">
                                            {"⭐".repeat(5)}
                                        </div>
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>
                                            ""Will gave our website and brand whole new life while staying true to who
                                             we are. We would never have thought of going in the direction he pitched
                                             but we couldn't be happier.""
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide><SwiperSlide>
                                <div className="tp-testimonial-item theme-bg-2">
                                    <div className="tp-testimonial-quote">
                                        <img src="../img/testimonial/quote.svg" alt="" />
                                    </div>
                                    <div className="tp-testimonial-item-top d-flex align-items-center">
                                        <div className="tp-testimonial-rating">
                                            {"⭐".repeat(5)}
                                        </div>
                                        <p>5.0 Rating</p>
                                    </div>
                                    <div className="tp-testimonial-content">
                                        <p>
                                            ""Will gave our website and brand whole new life while staying true to who
                                             we are. We would never have thought of going in the direction he pitched
                                             but we couldn't be happier.""
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        <span class="tp-about-inner-border transition-3"></span>
        </>
    );
};

export default ClientReview;
