import React from "react";

const SkillsTool = () => {
  return (
    <>
      <section
        className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix theme-bg-2"
        data-background="img/skill/bg-distort.png"
      >
        <div className="tp-skill-shape">
          <span className="tp-skill-shape-1"></span>
          <span className="tp-skill-shape-2"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">Advantage</span>
                    <h3 className="tp-section-title">Skills & tools</h3>
                  </div>
                  <p>For those who know what they're looking for..</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                <nav>
                  <div
                    className="nav nav-tabs tp-marker-tab"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link "
                      id="nav-tech-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tech"
                      type="button"
                      role="tab"
                      aria-controls="nav-tech"
                      aria-selected="true"
                    >
                      Tech
                    </button>
                    <button
                      className="nav-link active"
                      id="nav-design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-design"
                      type="button"
                      role="tab"
                      aria-controls="nav-design"
                      aria-selected="false"
                    >
                      Design
                    </button>
                    <span id="lineMarker"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade"
                  id="nav-tech"
                  role="tabpanel"
                  aria-labelledby="nav-tech-tab"
                  tabindex="0"
                >
                  <div className="tp-skill-tab-content tp-skill-radius">
                    <div className="row">
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/angular.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>89</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Angular</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/wp.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>95</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">WordPress</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/nodejs.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>60</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Node js</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/html.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>97</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">HTML5</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/webflow.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>75</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Webflow</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/vue.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>78</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Vue</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-design"
                  role="tabpanel"
                  aria-labelledby="nav-design-tab"
                  tabindex="0"
                >
                  <div className="tp-skill-tab-content tp-skill-radius">
                    <div className="row">
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/figma.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>94</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Figma</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/sketch.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>82</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Sketch</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/photoshop.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>98</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Photoshop</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/xd.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>84</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Adobe XD</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/in.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>78</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">InVision</h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 col-6">
                        <div className="tp-skill-item text-center">
                          <div className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                            <div className="tp-skill-icon">
                              <span>
                                <img
                                  src="../img/skill/illustrator.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <h3 className="tp-skill-count">
                              <span>80</span>%
                            </h3>
                          </div>
                          <div className="tp-skill-content">
                            <h3 className="tp-skill-title">Illustrator</h3>
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
};

export default SkillsTool;
