'use client'
import React, { useEffect, useRef, useState } from 'react'
import '../style.css'
import { car_make, car_model } from '@/app/Constant';
import axios from 'axios';
import { useRouter } from 'next/router';

function Banner() {

  // state to show data from make api 
  const [CarMake, setCarMake] = useState([]);
  const [CarDist, setCarDist] = useState([]);
  const [CarModel, setCarModel] = useState([]);
  // state to get car make id on change 
  const [CarMakeID, setCarMakeID] = useState([]);


  // input validations 
  const [name, setName] = useState('');
  const [distanceOptions, setDistanceOptions] = useState('');
  const router = useRouter();

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
        // setCarModel(CarModelData);
      }catch (error){
        console.error('Error fetching data:', error);
      }
      
    };
    fetchdata();
  }, []);
  
   
   // alert(CarMakeID);
   const FetchId = async(e) => {
     const makeId = e.target.value;
     setCarModel([]);
     try{
      // console.log(car_model);
      const id = { params: { cm_id: makeId } };
      console.log(id.params);
      // console.log(makeId);
      const response = await axios.get(car_model, { params: { cm_id: makeId } });
      
      setCarModel(response.data);
      // console.log(response.data);
     }catch(error){
      console.error('Model fetch error:', error);
     }


    //  get all data and filter as per that 
     /* console.log('car model state:' + CarModel);
     const carModelFilter = CarModel.filter((model) => model.cm_id === makeId)
     console.log('model data:' +carModelFilter);
     setCarMakeID(carModelFilter); */
   }

   const UsedCarHandler = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !selectedModel) {
      alert('Please enter your name and select a model.');
      return;
    }

    // Build the URL with query parameters
    const url = `/result?name=${encodeURIComponent(name)}&model=${encodeURIComponent(distanceOptions)}`;

    // Navigate to the result page
    router.push(url);
  };
   


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
                {/* <div
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
                </div> */}

                {/* used car  */}
                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <form onSubmit={UsedCarHandler} id="search-forms2">
                    <div className="inner-group grid">
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current uppercase">Make</span>
                            <select onChange={FetchId}>
                              {/* <option value="">Select Make</option> */}
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
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current uppercase">Models</span>
                            <select>
                              <option className='form-control'>Select Model</option>
                              {
                                CarMakeID.length > 0 ? (
                                  CarMakeID.map(data => (
                                    <option key={data.cmo_id} value={data.cmo_id}>{data.cmo_name}</option>
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
                            <input type='text' className='form-control' name='zip' placeholder='ex:90210' onChange={(e) => setName(e.target.value)} required />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="group-select">
                          <div className="nice-select">
                            <span className="current uppercase">Distance*</span>
                            <select onChange={(e) => setSelectedModel(e.target.value)} required>
                              {
                                CarDist.length > 0 ? (
                                  CarDist.map(data => (
                                    <option key={data.cd_id} value={data.cd_id} selected={data.cd_id === 4}>{data.cd_dist}</option>
                                  ))
                                ) : (
                                  <option>no data found</option>
                                )}
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



    </>
  )
}

export default Banner
