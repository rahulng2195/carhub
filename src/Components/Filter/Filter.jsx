'use client'
import React, { useEffect } from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterCar } from '@/app/carData'
import Image from 'next/image'
import { faHeart, faStar, faGasPump, faMeteor, faGears, faList, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import onClickViewListingType from '@/app/main'
import CarCard from '../CarCard/CarCard';

function Filter() {
  // grid system on click 
  useEffect(() => {
    onClickViewListingType()
  }, []);
  return (
    <>
      <div className="col-md-12 col-lg-9 listing-list-car-wrap">
        <form action="/" className="tf-my-listing-search">
          <div className="row">
            <div className="col-md-6">
              <p className="showing">
                Showing 1–12 of <span className="text-red">54</span> results
              </p>
            </div>
            <div className="col-md-6 toolbar-search-list">
              <div className="group-select-recently">
                <div className="nice-select text-left">
                  <span className="current">Sort By:</span>
                  <select className='form-select mt-2' name='search_fil'>
                    <option> Recently Added</option>
                    <option> New</option>
                    <option> Recently Added</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-listing-all">
            <div className="condition-tab-wrap tf-search-condition-tab">
              <div className="nav" id="nav-tab" role="tablist">
                <a
                  className=" btn-condition-filter active"
                  id="all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  Result Found Any/Model
                </a>
                {/* <a
                  className=" btn-condition-filter"
                  id="new-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#new"
                  role="tab"
                  aria-controls="new"
                  aria-selected="false"
                >
                  New <span className="number-list">(29)</span>
                </a>
                <a
                  className=" btn-condition-filter"
                  id="used-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#used"
                  role="tab"
                  aria-controls="used"
                  aria-selected="false"
                >
                  Used <span className="number-list">(29)</span>
                </a> */}
              </div>
            </div>
            <div className="toolbar-list">
              <div className="form-group">
                <a className="btn-display-listing-grid active">
                  <i className="fa-regular fa-heart"></i>
                  <FontAwesomeIcon icon={faList} className="coffee-icon" />
                </a>
              </div>
              <div className="form-group">
                <a className="btn-display-listing-list">
                  {/* <i className="fa-regular fa-heart"></i> */}
                  <FontAwesomeIcon icon={faGripVertical} className="coffee-icon" />

                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="tab-content" id="nav-listing-car">
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
            tabIndex={0}
          >
            <div className="listing-list-car-grid">
              {
                FilterCar.map(val => (
                  <CarCard key={val.key} value={val}/>
                ))
              }


            </div>
            {/* <div className="tf-pagination">
              <a className="prev page-numbers" href="#">
                <i className="icon-3" />
              </a>
              <a className="page-numbers" href="#">
                1
              </a>
              <a className="page-numbers active" href="#">
                2
              </a>
              <a className="page-numbers" href="#">
                3
              </a>
              <a className="page-numbers" href="#">
                ...
              </a>
              <a className="next page-numbers" href="#">
                <i className="icon--1" />
              </a>
            </div> */}
          </div>
          {/* <div
            className="tab-pane fade"
            id="new"
            role="tabpanel"
            aria-labelledby="new-tab"
            tabIndex={0}
          >
            <div className="listing-list-car-grid ">
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car5.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#" />
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car16.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car23.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car8.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car17.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car9.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car18.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car5.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car16.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car23.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car8.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car17.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car9.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car18.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <div className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </div>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <i className="icon-heart-1-1" />
                        <span>Favorite</span>
                      </li>
                      <li>
                        <i className="icon-shuffle-2-11" />
                        <span>Compare</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-pagination">
              <a className="prev page-numbers" href="#">
                <i className="icon-3" />
              </a>
              <a className="page-numbers" href="#">
                1
              </a>
              <a className="page-numbers active" href="#">
                2
              </a>
              <a className="page-numbers" href="#">
                3
              </a>
              <a className="page-numbers" href="#">
                ...
              </a>
              <a className="next page-numbers" href="#">
                <i className="icon--1" />
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="used"
            role="tabpanel"
            aria-labelledby="used-tab"
            tabIndex={0}
          >
            <div className="listing-list-car-grid ">
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car5.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#" />
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car16.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car23.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car8.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car17.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car9.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car18.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-item">
                <div className="listing-item-image">
                  <div className="hover-listing-image">
                    <div className="wrap-hover-listing">
                      <div
                        className="listing-item active"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car21.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car11.jpg"
                            className="swiper-image lazy tfcl-light-gallery"
                            alt="images"
                          />
                        </div>
                      </div>
                      <div
                        className="listing-item view-gallery"
                        title="Lexus LC Hybrid 2024"
                      >
                        <div className="images">
                          <img
                            src="assets/images/car-list/car12.jpg"
                            className="swiper-image tfcl-light-gallery"
                            alt="images"
                          />
                          <div className="overlay-limit">
                            <img
                              src="assets/images/car-list/img.png"
                              className="icon-img"
                              alt="icon-map"
                            />
                            <p>2 more photos</p>
                          </div>
                        </div>
                      </div>
                      <div className="bullet-hover-listing">
                        <div className="bl-item active" />
                        <div className="bl-item" />
                        <div className="bl-item" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="icon-favorite">
                    <i className="icon-heart-1-1" />
                  </a>
                  <span className="feature">Featured</span>
                </div>
                <div className="listing-item-content">
                  <div className="listing-top-content">
                    <h6 className="title">
                      <a href="#">Mercedez benz - c class</a>
                    </h6>
                    <div className="review-wrap">
                      <div className="rating">
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                        <i className="icon-Vector3" />
                      </div>
                      <span className="review">( 2 Reviews )</span>
                    </div>
                    <div className="description">
                      <ul>
                        <li className="listing-information fuel">
                          <i className="icon-gasoline-pump-1" />
                          <div className="inner">
                            <span>Fuel type</span>
                            <p>Petrol</p>
                          </div>
                        </li>
                        <li className="listing-information size-engine">
                          <i className="icon-Group1" />
                          <div className="inner">
                            <span>Mileage</span>
                            <p>90 k.m</p>
                          </div>
                        </li>
                        <li className="listing-information transmission">
                          <i className="icon-gearbox-1" />
                          <div className="inner">
                            <span>Transmission</span>
                            <p>Auto</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="list-controller">
                      <li>
                        <a href="#">
                          <i className="icon-heart-1-1" />
                          <span>Favorite</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-shuffle-2-11" />
                          <span>Compare</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom-price-wrap">
                    <div className="price-wrap">
                      <p className="price">$489</p>
                      <p className="price-sale">$399</p>
                    </div>
                    <div className="btn-read-more">
                      <a className="more-link" href="listing-details.html">
                        <span>View details</span>
                        <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-pagination">
              <a className="prev page-numbers" href="#">
                <i className="icon-3" />
              </a>
              <a className="page-numbers" href="#">
                1
              </a>
              <a className="page-numbers active" href="#">
                2
              </a>
              <a className="page-numbers" href="#">
                3
              </a>
              <a className="page-numbers" href="#">
                ...
              </a>
              <a className="next page-numbers" href="#">
                <i className="icon--1" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Filter
