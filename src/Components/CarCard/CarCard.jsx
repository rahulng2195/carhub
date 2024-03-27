import React from 'react'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faGasPump, faMeteor, faGears, faLocation, faTimesCircle, faShareAlt, faTimeline } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import Link from 'next/link';


const CarCard = ({value}) => {
  return (
    <>
      <div className="listing-grid-item" key={value.key}>

        <div className="listing-item-image">
          <div className="hover-listing-image">
            <div className="wrap-hover-listing">
              <div
                className="listing-item active"
                title={value.name}
              >
                <div className="images">
                {/* <Link href={value.redirection} target='_blank'> */}
                  <Image
                    src={value.image}
                    className="swiper-image tfcl-light-gallery"
                    alt="images"
                    height={100}
                    width={100}
                    layout='responsive'
                    objectFit='contain'
                  />
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          {/* <a href="#" className="icon-favorite">
<i className="fa-regular fa-heart"></i>
<FontAwesomeIcon icon={faHeart} className="heart-icon"/> 
</a> */}
          <span className="feature">Dealer Name</span>
        </div>
        <div className="listing-item-content">
          <div className="listing-top-content">
            <h6 className="title">
              {/* <a href="#" /> */}
              <Link href="#" target='_blank'>{value.name}</Link>
            </h6>
            <div className="review-wrap">
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="Star" />
                <FontAwesomeIcon icon={faStar} className="Star" />
                <FontAwesomeIcon icon={faStar} className="Star" />
                <FontAwesomeIcon icon={faStar} className="Star" />
                <FontAwesomeIcon icon={faStar} className="Star" />
              </div>
              <span className="review">( 5 Reviews )</span>
            </div>
            <div className="description">
              <ul>
                <li className="listing-information fuel">
                  <FontAwesomeIcon icon={faMeteor} className="faMeteor" />
                  <div className="inner">
                    <span>Mileage</span>
                    <p>{value.millege}</p>
                  </div>
                </li>
                <li className="listing-information size-engine">
                  <FontAwesomeIcon icon={faLocation} className="location" />

                  <div className="inner">
                    <span>Location</span>
                    <p>{value.location}</p>
                  </div>
                </li>
                <li className="listing-information transmission">
                  <FontAwesomeIcon icon={faTimeline} className="Star" />
                  {/* <i className="icon-gearbox-1" /> */}
                  <div className="inner">
                    <span>Posted On</span>
                    <p>{value.postDate}</p>
                  </div>
                </li>
              </ul>
              <p className='leading4 text-sm text-black pt-2'>{value.shortDesc}</p>
            </div>
            {/* <ul className="list-controller">
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
            </ul> */}
          </div>
          <div className="bottom-price-wrap">
            <div className="price-wrap">
              {/* <p className="price">$489</p> */}
              <p className="price-sale">{value.Currency + value.price}</p>
            </div>
            <div className="btn-read-more">
              <Link className="more-link" href={value.redirection} target='_blank'>
                <span>Share</span>
                <i className="icon-arrow-right2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard