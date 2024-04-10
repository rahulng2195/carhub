import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { car_make, filterData } from '@/app/Constant';

const LeftSideBar = ({urlParams}) => {
  const router = useRouter();

  // fetch data from db 
  const [CarMake, setCarMake] = useState([]);
  const [CarDist, setCarDist] = useState([]);
  const [CarModel, setCarModel] = useState([]);
  const [fuel_type, setfuel_type] = useState([]);
  const [car_dealer, setcar_dealer] = useState([]);
  const [body_style, setbody_style] = useState([]);
  // state to get car make id on change 
  const [CarMakeID, setCarMakeID] = useState([]);
  // custom accordion
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };


// radio button 
// const [transradio, Settransradio] = useState('any'); 
// const [saletype, Setsaletype] = useState('any'); 
// const [forsale, Setforsale] = useState('any'); 
  
 /*  // search parameter from url 
  const url = new URL(window.location.href); // Create a URL object
  const searchParams = url.searchParams; // Access search parameters
  // if(searchParams.length == 0){
  //   router.push('/page')
  // }
  const urlParams = {};
  for (const [key, value] of searchParams.entries()) {
    urlParams[key] = value;
  } */
  
  const zipcode = urlParams.zip;
  const distance = urlParams.distance;
  const model = urlParams.model;
  const make = urlParams.make;
  const trim = urlParams.trim;
  const min_price = urlParams.min_price;
  const max_price = urlParams.max_price;
  const min_year = urlParams.min_year;
  const max_year = urlParams.max_year;
  const min_mileage = urlParams.min_mileage;
  const max_mileage = urlParams.max_mileage;
  const fuel_types = urlParams.fuel_type;
  const transmission = urlParams.transmission;
  const sale_type = urlParams.sale_type;
  const body_styles = urlParams.body_style;
  const drive_type = urlParams.drive_type;
  const exterior_type = urlParams.exterior_type;
  const interior_color = urlParams.interior_color;
  const doors = urlParams.doors;
  const cylinder = urlParams.cylinder;
  const car_title = urlParams.car_title;
  const sale_by = urlParams.sale_by;
  const keyboard = urlParams.keyboard;
  const last_day = urlParams.last_day;  

  // add radio value from url to show checked value 
// Settransradio(transmission || 'any')
// Setsaletype(sale_type || 'any')
// Setforsale(sale_by || 'any')

  // date to show on form
  const current_year = new Date();
  const [isChecked, setChecked] = useState(true)
  const [CurrentYr, SetCurrentYr] = useState(current_year.getFullYear());

  // dealer logo 
  const Cararr = [
    {
      key: 1,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 2,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 3,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 4,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 5,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 6,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 7,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 8,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 9,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
    {
      key: 10,
      image: '/Assets/Images/cm-logo.70c5d1e4.png'
    },
  ]

  
  // form validations 
  const [formData, setFormData] = useState({
    zip: '',
    distance: '',
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
        const fuel_typeData = response.data.fuel_type;
        const car_dealerData = response.data.car_dealer;
        const body_styleData = response.data.body_style;
        setCarMake(CarmakeData);
        setCarDist(CarDistance);
        setCarModel(CarModelData);
        setfuel_type(fuel_typeData);
        setcar_dealer(car_dealerData);
        setbody_style(body_styleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

    };
    fetchdata();
  }, []);

  const handleSubmitForm =  (event) => {
    // alert('dff')
    event.preventDefault();

    // Basic validation with error messages
    const validationErrors = {};
    if (!formData.zip) {
      validationErrors.zip = 'postal is required';
    }
    if (!formData.distance) {
      validationErrors.distance = 'distance is required';
    }

    console.log('leftsidebar form' + JSON.stringify(formData));
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Validation successful, send data
      
      // generate url paramns on selection of inputs 
      const generateParams = new URLSearchParams(formData); 
      // const { zip, distance, model, make } = formData;
      // console.log(generateParams.toString());
      const sendData = async (car_make) => {
        const response =  await axios.get(filterData + car_make);
      }
      sendData();
      let url = '/CarList' + `?${generateParams.toString()}`;

      //router.push(url); // Redirect to the next page with URL parameters
    }
  };


  const handleChange = (event) => {
    const check_make_option = event.target.name;
    // console.log(check_make_option);

    if (check_make_option === 'make') {
      const makeId = event.target.value;
      //  get all data and filter as per that 
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

  // console.log('form data :' + JSON.stringify(formData));

  

  
  // formData.map(val => {
  //   console.log(val);
  // })  
  // console.log(formData);


  return (
    <>
      <div className="col-md-12 col-lg-3 bg-slate-300 shadow-md rounded-md py-3 md:block hidden">
        <div className="mb-4">
          <div key={0} className="border border-gray-200 rounded-md mb-2 bg-white">
            <button
              className={`w-full text-black focus:outline-none ${currentIndex === 0 ? 'bg-gray-200' : 'bg-gray-100'
                }`}
              onClick={() => handleClick(0)}
            >
              Refine Search by Dealers
            </button>
            {currentIndex === 0 && (
              <div className='dealers'>

                <div className='row pb-3 pt-2'>
                  {
                    Cararr.map(item => (
                      <div className='col-md-6' key={item.key}>
                        <div className='dealer_img m-3'>
                          <Image
                            src={item.image}
                            className=''
                            alt='dealer1'
                            width={100}
                            height={100}
                            layout='responsive'
                            objectFit='contain' />
                        </div>
                      </div>
                    ))
                  }
                </div>
                {/* <div className='sidebar-head text-center text-black pb-3'>
                    <Link href="/" className='text-black font-bold pt-5 text-lg'>View More Dealers</Link>
                  </div> */}
              </div>
            )}
          </div>
          <div key={1} className="border border-gray-200 rounded-md mb-2 bg-white">
            <button
              className={`w-full text-black  ${currentIndex === 1 ? 'bg-gray-100' : 'bg-gray-100'
                }`}
              onClick={() => handleClick(1)}
            >
              Refine Filter
            </button>
            {currentIndex === 1 && (
              <div className='dealers'>
                {/* <div className='sidebar-head text-center text-black'>
            <p className='text-black font-bold pt-5 text-lg'>Filter Cars</p>
          </div> */}
                <div className="filter_inputs p-1">
                  <form onSubmit={handleSubmitForm}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Make" className="form-label">
                            Make
                          </label>
                          <select id="make" name="make" value={formData.make || make} onChange={handleChange}>
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
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Model" className="form-label" name='car_model'>
                            Model
                          </label>
                          <select id="model" name="model" value={formData.model || model} onChange={handleChange}>
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
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Trim " className="form-label">
                            Trim
                          </label>
                          <input type='text' className='form-control' name='trim' placeholder='Touring' id="trim" value={formData.trim || trim}
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="Zip" className="form-label">
                            Zip/Postal*
                          </label>
                          <input type='text' className='form-control' name='zip' placeholder='ex:90210' id="zip" value={formData.zip || zipcode}
                            onChange={handleChange} required />
                        </div>
                        {errors.zip && <p className="error">{errors.zip}</p>}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="Distance" className="form-label">
                            Distance
                          </label>
                          <select id="distance" name="distance" value={formData.distance || distance} onChange={handleChange} required>
                            <option value=''>Select Distance</option>
                            {/* selected={data.cd_id === 4} */}
                            {
                              
                              CarDist.length > 0 ? (
                                CarDist.map(data => (
                                  
                                  <option key={data.cd_id} value={data.cd_dist} >{data.cd_dist}</option>
                                ))
                              ) : (
                                <option>no data found</option>
                              )}
                          </select>
                        </div>
                        {errors.distance && <p className="error">{errors.distance}</p>}
                      </div>

                      {/* more filter option */}
                      <div className="col-12">
                        <label className="filter">Filter</label>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="Min" className="form-label">
                            Min Price
                          </label>
                          <input type="text" className="form-control" id="min_price" name="min_price" placeholder="0" value={formData.min_price || min_price} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="max" className="form-label">
                            Max Price
                          </label>
                          <input type="text" className="form-control" id="max_price" name="max_price" placeholder="Any" value={formData.max_price || max_price} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="Min" className="form-label">
                            Min Year
                          </label>
                          <input type="text" className="form-control" id="min_year" name="min_year" placeholder="1900"  value={formData.min_year || min_year || '' } onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="max" className="form-label">
                            Max Year
                          </label>
                          <input type="text" className="form-control" id="max_year" name="max_year" placeholder={CurrentYr} value={formData.max_year || max_year || '' } onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="Min" className="form-label">
                            Min Mileage
                          </label>
                          <input type="text" className="form-control" id="min_mileage" name="min_mileage" placeholder="0" value={formData.min_mileage || min_mileage || '' } onChange={handleChange}  />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group my-2">
                          <label htmlFor="max" className="form-label">
                            Max Mileage
                          </label>
                          <input type="text" className="form-control" id="max_mileage" name="max_mileage" placeholder="Any" value={formData.max_mileage || max_mileage || ''} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="fuelType" className="form-label">
                            Fuel Type (Gas, Electric, Other)
                          </label>
                          <select id="fuel_type" name="fuel_type" value={formData.fuel_type || fuel_types} onChange={handleChange}>
                            <option value="">Any</option>
                            {
                              fuel_type.length > 0 ? (
                                fuel_type.map(data => (
                                  <option key={data.ft_id} value={data.ft_type}>{data.ft_type}</option>
                                ))
                              ) : (
                                ''
                              )
                            }
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="disabledSelect" className="form-label">
                            Transmission
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transmission"
                              id="flexRadioDefault1"
                              defaultChecked={isChecked}
                              checked={(formData.transmission || transmission) === 'any'}
                              value='any'
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                              Any
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transmission"
                              id="flexRadioDefault2"
                              defaultChecked=''
                              checked={(formData.transmission || transmission) === 'Manual'}
                              value='Manual'
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                              Manual
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="transmission"
                              id="flexRadioDefault3"
                              defaultChecked=''
                              checked={(formData.transmission || transmission) === 'Auto'}
                              value='Auto'
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                              Auto
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="disabledSelect" className="form-label">
                            Sale Type
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_type"
                              id="sale_any"
                              defaultChecked={isChecked}
                              value={formData.sale_type || sale_type || '' } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="sale_any">
                              Any
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_type"
                              id="sale_auction"
                              defaultChecked=""
                              value={formData.sale_type || sale_type || '' } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="sale_auction">
                              Auction
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_type"
                              id="sale_class"
                              defaultChecked=""
                              value={formData.sale_type || sale_type || '' } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="sale_class">
                              Classified
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="body_style" className="form-label">
                            Body Style
                          </label>
                          <select id="body_style" name="body_style" value={formData.body_style || body_styles} onChange={handleChange}>
                            <option value="">Any</option>
                            {
                              body_style.length > 0 ? (
                                body_style.map(data => (
                                  <option key={data.bs_id} value={data.bs_name}>{data.bs_name}</option>
                                ))
                              ) : (
                                ''
                              )
                            }
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="drive_type" className="form-label">
                            Drive Type
                          </label>
                          <select id="drive_type" className="form-select" name='drive_type' value={ formData.drive_type || drive_type} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='4WD'>4WD</option>
                            <option option='AWD'>AWD</option>
                            <option option='FWD'>FWD</option>
                            <option option='RWD'>RWD</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="color" className="form-label">
                            Exterior Color
                          </label>
                          <select id="color" className="form-select" name='exterior_type' value={ formData.exterior_type || exterior_type} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='Beige'>Beige</option>
                            <option option='Black'>Black</option>
                            <option option='Blue'>Blue</option>
                            <option option='Bronze'>Bronze</option>
                            <option option='Browm'>Browm</option>
                            <option option='Burgandy'>Burgandy</option>
                            <option option='Gold'>Gold</option>
                            <option option='Gray'>Gray</option>
                            <option option='Green'>Green</option>
                            <option option='Orange'>Orange</option>
                            <option option='Pink'>Pink</option>
                            <option option='Purple'>Purple</option>
                            <option option='Red'>Red</option>
                            <option option='Silver'>Silver</option>
                            <option option='White'>White</option>
                            <option option='Yellow'>Yellow</option>
                            <option option='Not Specified'>Not Specified</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="icolor" className="form-label">
                            Interior Color
                          </label>
                          <select id="icolor" className="form-select" name='interior_color' value={ formData.interior_color || interior_color} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='Beige'>Beige</option>
                            <option option='Black'>Black</option>
                            <option option='Blue'>Blue</option>
                            <option option='Bronze'>Bronze</option>
                            <option option='Browm'>Browm</option>
                            <option option='Burgandy'>Burgandy</option>
                            <option option='Gold'>Gold</option>
                            <option option='Gray'>Gray</option>
                            <option option='Green'>Green</option>
                            <option option='Orange'>Orange</option>
                            <option option='Pink'>Pink</option>
                            <option option='Purple'>Purple</option>
                            <option option='Red'>Red</option>
                            <option option='Silver'>Silver</option>
                            <option option='White'>White</option>
                            <option option='Yellow'>Yellow</option>
                            <option option='Not Specified'>Not Specified</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Doors" className="form-label">
                            Doors
                          </label>
                          <select id="Doors" className="form-select" name='doors' value={ formData.doors || doors} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='2-3'>2-3</option>
                            <option option='4+'>4+</option>
                            <option option='Not Specified'>Not Specified</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Cylinders" className="form-label">
                            Cylinders
                          </label>
                          <select id="Cylinders" className="form-select" name='cylinder' value={ formData.cylinder || cylinder} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='2'>2</option>
                            <option option='3'>3</option>
                            <option option='4'>4</option>
                            <option option='5'>5</option>
                            <option option='6'>6</option>
                            <option option='8'>8</option>
                            <option option='10'>10</option>
                            <option option='12'>12</option>
                            <option option='Not Specified'>Not Specified</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Title" className="form-label">
                            Title
                          </label>
                          <select id="Title" className="form-select" name='car_title' value={ formData.car_title || car_title} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='Clean'>Clean</option>
                            <option option='Salvage'>Salvage</option>
                            <option option='Rebuild'>Rebuild</option>
                            <option option='Lemon/Manufacturer Buyback'>Lemon/Manufacturer Buyback</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="disabledSelect" className="form-label">
                            For Sale By
                          </label>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_by"
                              id="by_any"
                              defaultChecked={isChecked}
                              value={formData.sale_by || sale_by || '' } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="by_any">
                              Any
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_by"
                              id="by_private"
                              defaultChecked=""
                              value={formData.sale_by || sale_by || ''  } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="by_private">
                              Private
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="sale_by"
                              id="by_dealer"
                              defaultChecked=""
                              value={formData.sale_by || sale_by || ''  } onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="by_dealer">
                              Dealers
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="Keywords" className="form-label">
                            Keywords
                          </label>
                          <input className='form-control' type='text' id='keyboard' name='keyboard' placeholder='Keywords' value={ formData.keyboard || keyboard} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group my-2">
                          <label htmlFor="last_day" className="form-label">
                            Show last # of days
                          </label>
                          <select id="last_day" className="form-select" name='last_day'  value={ formData.last_day || last_day} onChange={handleChange}>
                            <option option=''>Any</option>
                            <option option='1'>1</option>
                            <option option='1.5'>1.5</option>
                            <option option='2'>2</option>
                            <option option='2.5'>2.5</option>
                            <option option='3'>3</option>
                            <option option='4'>4</option>
                            <option option='5'>5</option>
                            <option option='6'>6</option>
                            <option option='7'>7</option>
                            <option option='8'>8</option>
                            <option option='9'>9</option>
                            <option option='10'>10</option>

                          </select>
                        </div>
                      </div>
                      <div className="flex my-4">
                        <button className='bg-scale-300 rounded-md text-grey p-2 m-2 hover:bg-slate-50 hover:text-black hover:shadow-md'>Reset</button>
                        <button type='submit' className='bg-orange-400 rounded-md text-white p-2 m-2 hover:bg-white hover:text-orange-300 hover:rounded-md hover:border-2 hover:border-sky-500 hover:shadow-md'>Submit</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            )}
          </div>
          <div key={2} className="border border-gray-200 rounded-md mb-2 bg-white">
            <button
              className={`w-full text-black focus:outline-none ${currentIndex === 2 ? 'bg-gray-100' : 'bg-gray-100'
                }`}
              onClick={() => handleClick(2)}
            >
              New Car
            </button>
            {currentIndex === 2 && (
              <div className='dealers'>
                <span>Select options and see pricing on new vehicles from nearby dealers.</span>
                <form>
                  <div className='row'>
                    <div className="col-12">
                      <div className="form-group my-2">
                        <label htmlFor="Make" className="form-label">
                          Make
                        </label>
                        <select id="Make" className="form-select">
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group my-2">
                        <label htmlFor="Model" className="form-label">
                          Model
                        </label>
                        <select id="Model" className="form-select">
                          <option>Disabled select</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group my-2">
                        <label htmlFor="Model" className="form-label">
                          Zip*
                        </label>
                        <input className='form-control' type='text' name='zip' placeholder='400098' />
                      </div>
                    </div>
                    <div className='flex'>
                      <button className='bg-orange-400 rounded-md text-white p-2 m-2 hover:text-black hover:bg-white hover:rounded-md hover:border-2 hover:border-sky-500 hover:shadow-md'>Submit</button>

                    </div>
                  </div>
                </form>

              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default LeftSideBar