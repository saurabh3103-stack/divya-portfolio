import React from "react";

const Preloader = () => {
    return(
        <>
         <div id="loading">
      <div id="loading-center">
         <div id="loading-center-absolute">
            <div class="preloader__content text-center">
               <div class="preloader__top-text d-flex align-items-center justify-content-between">
                  <p class="preloader__loading text-start">Loading</p>
                  <h2 id="tp-loading-number" class="text-end">0</h2>
               </div>
               <div id="tp-loading-bar" class="preloader__bar">
                  <div id="tp-loading-line" class="preloader__bar-inner"></div>
               </div>
            </div>
         </div>
      </div>  
   </div>
   <div id="magic-cursor">
      <div id="ball"></div>
   </div>
        </>
    );
}
export default Preloader;