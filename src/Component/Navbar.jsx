import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="tp-header-area tp-header-mob-space tp-header-transparent p-relative">
          <span className="tp-header-border"></span>
          <div className="container container-large">
            <div className="tp-header-box p-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-5 col-6">
                  <div className="logo">
                    {/* <a className="logo-white" href="index.html">
                      <img data-width="115" src="img/logo/logo.png" alt=""/>
                    </a>
                    <a className="logo-black" href="index.html">
                      <img data-width="115" src="img/logo/logo-black.png" alt=""/>
                    </a> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                  <div className="main-menu">
                    <nav className="tp-main-menu-content">
                      <ul>
                        <li className="p-static">
                          <a href="/">Home</a>
                        </li>
                        <li><a href="/">About Me</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-md-7 col-6">
                  <div className="tp-header-right d-flex align-items-center justify-content-end">
                    <div className="tp-header-cv ml-10 d-none d-md-block">
                      <a className="tp-header-cv-btn" href="img/cv/mycv.docx">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M8 1L8 9.75M8 9.75L10.625 7.125M8 9.75L5.375 7.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                    <div className="tp-header-hamburger ml-20">
                      <button className="tp-hamburger-btn tp-hamburger-btn-white tp-menu-bar tp-offcanvas-open-btn-2" type="button" onClick={toggleMobileMenu}>
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeMobileMenu}>×</button>
            <nav>
              <ul>
                <li><a href="/" onClick={closeMobileMenu}>Home</a></li>
                <li><a href="/" onClick={closeMobileMenu}>About Me</a></li>
                <li><a href="/" onClick={closeMobileMenu}>Services</a></li>
                <li><a href="/" onClick={closeMobileMenu}>Portfolio</a></li>
                <li><a href="/" onClick={closeMobileMenu}>Blog</a></li>
                <li><a href="/" onClick={closeMobileMenu}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Add CSS for Mobile Menu */}
      <style jsx>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          justify-content: flex-end; /* Align menu to the right */
        }

        .mobile-menu {
          background: white;
          width: 300px;
          height: 100%;
          padding: 20px;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #333;
        }

        .mobile-menu nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          margin-top: 40px; /* Space for close button */
        }

        .mobile-menu nav ul li {
          margin: 15px 0;
        }

        .mobile-menu nav ul li a {
          text-decoration: none;
          color: #333;
          font-size: 18px;
        }

        @media (min-width: 992px) {
          .mobile-menu-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;