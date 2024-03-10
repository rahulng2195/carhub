'use client'
import React, { useEffect, useRef } from 'react';
import Filter from '@/Components/Filter/Filter'
import LeftSideBar from '@/Components/LeftSideBar/LeftSideBar'
import '../../Components/Banner/bannerForm.css';
import MobileNav from '@/Components/MobileNav/MobileNav';

const CarList = () => {
  // const selectRef = useRef(null);

  // useEffect(() => {
  //   $(document).ready(() => {
  //     $('select').niceSelect();
  //   });
  // }, []);
  return (
    // <main className="min-h-screen relative">
    <section className='search_sec'>
      <div className="widget-banner-car-listing banner-car-listing-list mb-16">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            {/* <span className="sub-title">Save up to 15%</span> */}
            <h1 className="title text-white">
              CarHub <span className="text-red">Result</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="widget-car-listing-list">
        <div className="themesflat-container">
          <div className="row car-listing-list">
            <LeftSideBar/>
            <Filter />
          </div>
        </div>
      </div>
     <MobileNav/> 
    </section>
    // </main>
  )
}

export default CarList