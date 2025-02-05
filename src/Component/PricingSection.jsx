import React from "react";

const PricingSection = () => {
    return(
        <>
          <section class="tp-pcb-area pt-80 pb-70">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col-xl-6">
                        <div class="tp-section-title-wrapper mb-30 text-start text-md-center">
                           <div class="tp-section-title-inner tp_title_anim p-relative">
                              <span class="tp-section-subtitle">Advantage</span>
                              <h3 class="tp-section-title">Resources for <br/> growth</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="container">
                  <div class="row">
                     <div class="col-xl-12">
                        <div class="tp-pcb-tab blog-btn-tab mb-80 d-flex justify-content-center">
                           <ul class="nav nav-tabs" id="myTab" role="tablist">
                              <li class="nav-items" role="presentation">
                                <button class="nav-links active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                  type="button" role="tab" aria-controls="home" aria-selected="true">Pricing</button>
                              </li>
                              </ul>                           
                              <span id="blog-btn-bg"></span>
                        </div>
                     </div>
                  </div>
                  <div class="tp-pcb-tab-wrapper">
                     <div class="row">
                        <div class="tab-content" id="myTabContent">
                           <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div class="tp-price-inner">
                                 <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-6 mb-70">
                                       <div class="tp-price-item">
                                          <div class="tp-price-head mb-100 text-center">
                                             <h4 class="tp-price-head-title">1 Month</h4>
                                             <span>Paid monthly </span>
                                          </div>
                                          <div class="tp-price-body mb-35 text-center">
                                             <span>Cancel anytime</span>
                                             <h4 class="tp-price-body-title">$1300/mo</h4>
                                          </div>
                                          <div class="tp-price-btn-box text-center">
                                             <a class="tp-btn-price" href="contact.html">
                                                <div>
                                                   <span>Get Started</span>
                                                </div>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 mb-70">
                                       <div class="tp-price-item">
                                          <div class="tp-price-head mb-100 text-center">
                                             <h4 class="tp-price-head-title">3 Months</h4>
                                             <span>Paid monthly </span>
                                          </div>
                                          <div class="tp-price-body mb-35 text-center">
                                             <span class="tp-price-radius-border">Save $800</span>
                                             <h4 class="tp-price-body-title">$4200/mo</h4>
                                          </div>
                                          <div class="tp-price-btn-box text-center">
                                             <a class="tp-btn-price" href="contact.html">
                                                <div>
                                                   <span>Get Started</span>
                                                </div>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 mb-70">
                                       <div class="tp-price-item">
                                          <div class="tp-price-head mb-125 text-center">
                                             <h4 class="tp-price-head-title">Not sure?</h4>
                                             <span>Check the skill</span>
                                          </div>
                                          <div class="tp-price-body text-center">
                                             <span class="tp-price-text">You can order <br/>
                                                1 free task</span>
                                          </div>
                                          <div class="tp-price-btn-box text-center">
                                             <a class="tp-btn-price-border" href="contact.html">
                                                <div>
                                                   <span>Free Skill Check</span>
                                                </div>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                         </div>
                     </div>
                  </div>
               </div>
            </section>
        </>
    );
}
export default PricingSection;