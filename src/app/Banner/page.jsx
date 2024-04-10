'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../style.css'
import { car_make, car_model } from '@/app/Constant';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// import HeroBanner from '../../Components/Banner/Banner'
export default function Banner() {
  const router = useRouter(); 
  // state to show data from make api 
  const [CarMake, setCarMake] = useState([]);
  const [CarDist, setCarDist] = useState([]);
  const [CarModel, setCarModel] = useState([]);
  // state to get car make id on change 
  const [CarMakeID, setCarMakeID] = useState([]);


  // form validations 
  const [formData, setFormData] = useState({
    zip: '',
    distance: '',
    model: '',
    make: '',
  });
  const [errors, setErrors] = useState({}); 

  // alert(CarMakeID)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(car_make);
        const CarmakeData = response.data.car_make;
        const CarDistance = response.data.car_distance;
        const CarModelData = response.data.car_model;
        setCarMake(CarmakeData);
        setCarDist(CarDistance);
        setCarModel(CarModelData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    fetchdata();
  }, []);


  // alert(CarMakeID);
  /* const FetchId = async (e) => {
    const makeId = e.target.value;
    //  get all data and filter as per that 
    const carModelFilter = CarModel.filter((model) => model.cm_id == makeId)
    // console.log('model data:' + JSON.stringify(carModelFilter));
    setCarMakeID(carModelFilter);
  } */

  const handleChange = (event) => {
    const check_make_option = event.target.name;

    if(check_make_option === 'make'){
      const makeId = event.target.value;

      const validateId = CarMake.filter((make) => make.cm_name == makeId)
      // as we are getting make name from db, using name get id of make 
      const FetchedMakeId = validateId[0].cm_id;
      const carModelFilter = CarModel.filter((model) => model.cm_id == FetchedMakeId);

      setCarMakeID(carModelFilter);
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation with error messages
    const validationErrors = {};
    if (!formData.zip) {
      validationErrors.zip = 'postal is required';
    }
    if (!formData.distance) {
      validationErrors.distance = 'distance is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Validation successful, send data
      const { zip, distance, model, make } = formData;
      let url = '/CarList' + `?zip=${zip}&distance=${distance}`;
      if (model) url += `&model=${model}`;
      if (make) url += `&make=${make}`;

      router.push(url); // Redirect to the next page with URL parameters
    }
  };


  return (
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

      <div className="widget-search-car shadow-lg py-3 border-spacing-3 mx-1 md:mx-3 md:absolute">
        <div className="themesflat-container">
          <div className="search-form-widget">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {/* <li className="nav-item" role="presentation">
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
                </li> */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
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

              {/* used car  */}
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <form onSubmit={handleSubmit} id="search-forms2">
                  <div className="inner-group grid">
                    <div className="form-group">
                      <div className="group-select">
                        <div className="nice-select">
                          <span className="current uppercase">Make</span>
                          <select id="make" name="make" value={formData.make} onChange={handleChange}>
                            <option value="">Any</option>
                            {
                              CarMake.length > 0 ? (
                                CarMake.map(data => (
                                  <option key={data.cm_id} value={data.cm_name}>{data.cm_name}</option>
                                ))
                              ) : (
                                ''
                              )
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="group-select">
                        <div className="nice-select">
                          <span className="current uppercase">Models</span>
                          <select id="model" name="model" value={formData.model} onChange={handleChange}>
                            <option className='form-control'>Select Model</option>
                            {
                              CarMakeID.length > 0 ? (
                                CarMakeID.map(data => (
                                  <option key={data.cmo_id} value={data.cmo_name}>{data.cmo_name}</option>
                                ))
                              ) : (
                                ''
                              )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="group-select">
                        <div className="nice-select">
                          <span className="current uppercase">Zip/Postal*</span>
                          <input type='text' className='form-control' name='zip' placeholder='ex:90210' id="zip" value={formData.zip}
                            onChange={handleChange} required />
                        </div>
                      </div>
                      {errors.zip && <p className="error">{errors.zip}</p>}
                    </div>
                    <div className="form-group">
                      <div className="group-select">
                        <div className="nice-select">
                          <span className="current uppercase">Distance*</span>
                          <select id="distance" name="distance" value={formData.distance} onChange={handleChange} required>
                                <option value=''>Select Distance</option>
                            {
                              CarDist.length > 0 ? (
                                CarDist.map(data => (
                                  <option key={data.cd_id} value={data.cd_dist} selected={data.cd_id === 4}>{data.cd_dist}</option>
                                ))
                              ) : (
                                <option>no data found</option>
                              )}
                          </select>
                        </div>
                      </div>
                      {errors.distance && <p className="error">{errors.distance}</p>}
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
                  <div className='row'>
                    <div className='col-md-3'>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current">Make</span>
                            <select >
                              <option value="">Select Make</option>
                              {
                                CarMake.length > 0 ? (
                                  CarMake.map(data => (
                                    <option key={data.cm_id} value={data.cm_id}>{data.cm_name}</option>
                                  ))
                                ) : (
                                  <option>no data found</option>
                                )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>
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
                    </div>
                    <div className='col-md-3'>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current uppercase">Zip/Postal*</span>
                            <input type='text' className='form-control' name='zip' placeholder='ex:90210' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className="form-group">
                        <button type="button" className="button-search-listings bg-red-700">
                          {/* <i className="icon-search-1" />
                        Search */}
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
