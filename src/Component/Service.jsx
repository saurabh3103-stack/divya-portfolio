import React from "react";
// import "../src/assets/css/style.css"; // Ensure correct CSS import if needed

const Service = () => {
  return (
    <>
      <section className="tp-services-area tp-sv tp-services-bg-text-animation fix">
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">
            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p>Services</p>
            </div>
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-7">
                <div
                  className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70"
                  data-tp-throwable-scene="true"
                >
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">Services</span>
                      <h3 className="tp-section-title tp_title_anim">
                        Solution <br /> we provide.
                      </h3>
                    </div>
                    <p>
                      The combination of my passion for design, code & interaction web design world.
                    </p>
                  </div>
                  <div className="tp-services-capsule-item-wrapper">
                    {[
                      { text: "Frontend", bgColor: "#00CC97" },
                      { text: "Prototyping", bgColor: "#FF759C" },
                      { text: "Design solutions", bgColor: "#FFDB59", textColor: "#121212" },
                      { text: "Consulting", bgColor: "#FFDB59", textColor: "#121212" },
                      { text: "Brand strategy", bgColor: "#00CC97" },
                      { text: "UI/UX Design", bgColor: "#19B3F1" },
                      { text: "Design Audit", bgColor: "#FF759C" },
                      { text: "Testing", bgColor: "#FFDB59", textColor: "#121212" }
                    ].map((item, index) => (
                      <p key={index} data-tp-throwable-el="">
                        <span
                          className="tp-services-capsule-item"
                          style={{ backgroundColor: item.bgColor, color: item.textColor || "#fff" }}
                        >
                          {item.text}
                        </span>
                      </p>
                    ))}
                    <p data-tp-throwable-el="">
                      <span>
                        <img src="/img/services/shape/services-shape-1.png" alt="shape 1" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span>
                        <img src="/img/services/shape/services-shape-2.png" alt="shape 2" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="tp-services-accordion tp-accordion tp-accordion-2 mt-90 pl-70 p-relative">
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">
                    {[
                      { id: "One", title: "UI/UX Design" },
                      { id: "Two", title: "Design Systems", active: true },
                      { id: "Three", title: "Website Design" },
                      { id: "Four", title: "Branding" }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`accordion-item tp-services-accordion-item ${item.active ? "active" : ""}`}
                      >
                        <h2 className="accordion-header" id={`heading${item.id}`}>
                          <button
                            className={`accordion-button ${!item.active ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded={item.active ? "true" : "false"}
                            aria-controls={`collapse${item.id}`}
                          >
                            <span>{`0${index + 1}`}</span>
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${item.active ? "show" : ""}`}
                          aria-labelledby={`heading${item.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Project systematization is something I place a lot of emphasis on. My passion Design
                              Systems.
                            </p>
                            <ul>
                              <li>Interface design</li>
                              <li>Creating design systems</li>
                              <li>UI kits</li>
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
