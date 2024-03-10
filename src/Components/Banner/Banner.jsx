'use client'
import React, { useEffect, useRef } from 'react'
import './bannerForm.css'
// import 'jquery-nice-select/css/nice-select.css';
// import $ from 'jquery';
function Banner() {
  // const selectRef = useRef(null);

  // useEffect(() => {
  //   $(selectRef.current).niceSelect();
  // }, []);
  return (
    <>
      <section className="banner_secs md:h-screen md:relative">
        <video
          preload="auto"
          poster="Assets/Images/Homepage-Model-Y-Promo-Desktop-Poster.avif"
          autoPlay={true}
          muted={true}
          playsInline={false}
          loop={true}
          className="banner-video h-100 w-100 md:object-fill object-cover"
          src="Assets/Video/home-banner-video.mp4"
        >
          <source
            src="Assets/Video/home-banner-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* <div className='aboslute banner_heading top-32 z-10'>
          <h4 className='text-capitalize'>Find your Next car in a click!</h4>
      </div> */}
        {/* form  */}
        <div className="widget-search-car shadow-lg py-3 border-spacing-3 mx-1 md:mx-3 md:absolute">
          <div className="themesflat-container">
            <div className="search-form-widget">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    All Cars
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Used car
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    New Cars
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <form method="post" id="search-forms">
                    <div className="inner-group grid">
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Make</span>
                            <select >
                              <option className='form-control'>Select Make</option>
                              <option >Select Make</option>
                              <option >Select Make</option>
                              <option >Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="button-search-listing bg-red-700">
                          <i className="icon-search-1" />
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <form method="post" id="search-forms2">
                    <div className="inner-group grid">
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Make</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="button-search-listing bg-red-700">
                          <i className="icon-search-1" />
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <form method="post" id="search-forms3">
                    <div className="inner-group grid">
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Make</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Models</span>
                            <select>
                              <option className='form-control'>Select Make</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="button" className="button-search-listings bg-red-700">
                          {/* <i className="icon-search-1" />
                        Search */}
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Banner
