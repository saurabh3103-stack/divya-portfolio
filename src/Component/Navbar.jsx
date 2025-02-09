import React from "react";

// import { Link } from "react-router-dom";
const Navbar = () => {

    return(
        <>
         
   <header>

<div class="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
   <span class="tp-header-border"></span>
   <div class="container container-large">
      <div class="tp-header-box p-relative">
         <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-5 col-6">
               <div class="logo">
                  {/* <a class="logo-white" href="index.html">
                     <img data-width="115" src="img/logo/logo.png" alt=""/>
                  </a>
                  <a class="logo-black" href="index.html">
                     <img data-width="115" src="img/logo/logo-black.png" alt=""/>
                  </a> */}
               </div>
            </div>
            <div class="col-xl-6 col-lg-7 d-none d-lg-block">
               <div class="main-menu">
                  <nav class="tp-main-menu-content">
                     <ul>
                        <li class="p-static">
                           <a href="/">Home</a>
                        </li>
                        <li><a href="about-me.html">About Me</a></li>
                        <li><a href="service.html">Services</a>
        
                        </li>
                        <li>
                           <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li>
                           <a href="blog.html">Blog</a>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div class="col-xl-4 col-lg-3 col-md-7 col-6">
               <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-header-cv ml-10 d-none d-md-block">
                     <a class="tp-header-cv-btn" href="img/cv/mycv.docx">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor"
                              stroke-width="1.5" stroke-linecap="round" />
                           <path d="M8 1L8 9.75M8 9.75L10.625 7.125M8 9.75L5.375 7.125" stroke="currentColor"
                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                     <button class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                        type="button">
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

</header>
<header>

<div class="tp-header-area tp-header-mob-space tp-header-transparent p-relative tp-int-menu tp-header-sticky-cloned">
   <div class="container container-large">
      <div class="tp-header-box p-relative">
         <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-5 col-6">
               <div class="logo">
                  <a class="logo-white" href="index.html">
                     <img data-width="115" src="img/logo/logo.png" alt=""/>
                  </a>
                  <a class="logo-black" href="index.html">
                     <img data-width="115" src="img/logo/logo-black.png" alt=""/>
                  </a>
               </div>
            </div>
            <div class="col-xl-6 col-lg-7 d-none d-lg-block">
               <div class="main-menu">
                  <nav class="tp-main-menu-content">
                     <ul>
                        <li class="has-dropdown p-static">
                           <a href="index.html">Home</a>
                           <div class="tp-submenu submenu has-homemenu">
                              <div class="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-4">
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="index.html"><img src="img/menu/home-1.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="index.html">Freelancer</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="index-5.html"><img src="img/menu/home-5.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="index-5.html">Fashion Designer</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="index-4.html"><img src="img/menu/home-4.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="index-4.html">Photographer</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="index-2.html"><img src="img/menu/home-2.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="index-2.html">Interface Designer</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="index-3.html"><img src="img/menu/home-3.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="index-3.html">Web Developer</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="home-6-slider.html"><img src="img/menu/home-8.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="home-6-slider.html">Slider Classic</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="home-7-slider.html"><img src="img/menu/home-7.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="home-7-slider.html">Slider Elegant</a>
                                       </h4>
                                    </div>
                                 </div>
                                 <div class="col homemenu">
                                    <div class="homemenu-thumb mb-15">
                                       <a href="home-8-slider.html"><img src="img/menu/home-6.jpg" alt=""/></a>
                                    </div>
                                    <div class="homemenu-content text-center">
                                       <h4 class="homemenu-title">
                                          <a href="home-8-slider.html">Slider Metro</a>
                                       </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li><a href="about-me.html">About Me</a></li>
                        <li class="has-dropdown"><a href="service.html">Services</a>
                           <ul class="tp-submenu submenu">
                              <li><a href="service.html">Service</a></li>
                              <li><a href="service-details.html">Service Details</a></li>
                           </ul>
                        </li>
                        <li class="has-dropdown">
                           <a href="portfolio.html">Portfolio</a>
                           <ul class="tp-submenu submenu">
                              <li><a href="portfolio.html">Porfolio</a></li>
                              <li><a href="portfolio-details.html">Portfolio Details</a></li>
                              <li><a href="portfolio-details-2.html">Portfolio Details 02</a></li>
                              <li><a href="portfolio-details-3.html">Portfolio Details 03</a></li>
                           </ul>
                        </li>
                        <li class="has-dropdown">
                           <a href="blog.html">Blog</a>
                           <ul class="tp-submenu submenu">
                              <li><a href="blog.html">Blog List</a></li>
                              <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                              <li><a href="blog-details.html">Blog Details</a></li>
                              <li><a href="blog-details-2.html">Blog Details 02</a></li>
                           </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div class="col-xl-4 col-lg-3 col-md-7 col-6">
               <div class="tp-header-right d-flex align-items-center justify-content-end">
                  <div class="tp-theme-toggle ">
                     <label class="tp-theme-toggle-main themepure-theme-toggle" for="this-ss">
                        <span class=" tp-theme-toggle-light">
                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M8.0448 11.0454C9.70165 11.0454 11.0448 9.7023 11.0448 8.04544C11.0448 6.38859 9.70165 5.04544 8.0448 5.04544C6.38795 5.04544 5.0448 6.38859 5.0448 8.04544C5.0448 9.7023 6.38795 11.0454 8.0448 11.0454Z"
                                 fill="currentColor" />
                              <path d="M8 1.5V2.68182" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8 13.3182V14.5" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M3.40198 3.40277L4.24107 4.24186" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M11.7584 11.7581L12.5975 12.5972" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1.5 8H2.68182" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.3174 8H14.4992" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M3.40198 12.5972L4.24107 11.7581" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M11.7584 4.24186L12.5975 3.40277" stroke="currentColor" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                        </span>
                        <input type="checkbox" class="themepure-theme-toggle-input" id="this-ss"/>
                        <i class="tp-theme-toggle-slide"></i>
                        <span class="tp-theme-toggle-dark">
                           <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M12 6.54054C11.8949 7.67776 11.4681 8.76152 10.7696 9.66503C10.071 10.5685 9.12957 11.2544 8.05544 11.6424C6.9813 12.0304 5.81888 12.1044 4.70419 11.8559C3.5895 11.6073 2.56866 11.0465 1.7611 10.2389C0.953538 9.43135 0.39267 8.4105 0.144121 7.29581C-0.104428 6.18112 -0.0303768 5.0187 0.357609 3.94457C0.745595 2.87043 1.43147 1.929 2.33497 1.23045C3.23848 0.531888 4.32224 0.105093 5.45946 0C4.79365 0.900756 4.47327 2.01056 4.55656 3.12758C4.63986 4.24459 5.12132 5.2946 5.91336 6.08664C6.7054 6.87869 7.75541 7.36014 8.87242 7.44344C9.98944 7.52673 11.0992 7.20635 12 6.54054Z"
                                 fill="currentColor" />
                           </svg>
                        </span>
                     </label>
                  </div>
                  <div class="tp-header-cv ml-10 d-none d-md-block">
                     <a class="tp-header-cv-btn" href="img/cv/mycv.docx">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor"
                              stroke-width="1.5" stroke-linecap="round" />
                           <path d="M8 1L8 9.75M8 9.75L10.625 7.125M8 9.75L5.375 7.125" stroke="currentColor"
                              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </a>
                  </div>
                  <div class="tp-header-hamburger ml-20">
                     <button class="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2"
                        type="button">
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

</header>
        </>
    );
}
export default Navbar;