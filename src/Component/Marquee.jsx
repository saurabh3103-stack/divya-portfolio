import React from "react";

const Marquee = () => {

    return(
        <>
        <div class="tp-marquee-area z-index-5">
               <div class="tp-marquee-wrapper">
                  <div class="tp-marquee-slider fix">
                    <marquee class="tp-marquee-slider-active">
                        <div class=" d-flex align-items-center ">
                            <div class="tp-marquee-item" style={{paddingTop:"1.5rem"}}>
                                <p>Selected Work (2024) <img src="../img/marquee/smile.svg" alt=""/></p>
                            </div>
                            <div class="tp-marquee-item">
                            <p>Diego Template <img src="../img/marquee/stroke.svg" alt=""/></p>
                            </div>
                            <div class="tp-marquee-item">
                            <p>Selected Work (2024) <img src="../img/marquee/smile.svg" alt=""/></p>
                            </div>
                            <div class="tp-marquee-item">
                            <p>Diego Template <img src="../img/marquee/stroke.svg" alt=""/></p>
                            </div>
                        </div>
                    </marquee>
                  </div>
               </div>
            </div>
        </>
    );
}

export default Marquee;