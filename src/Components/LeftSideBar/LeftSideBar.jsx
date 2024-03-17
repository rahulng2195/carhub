import { useState } from 'react'
import Image from 'next/image'

import Link from 'next/link'
// import { input } from 'postcss';
// import Accordion from 'react-bootstrap/Accordion';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const LeftSideBar = () => {
  const current_year = new Date();
  const [isChecked, setChecked] = useState(true)

  const [CurrentYr, SetCurrentYr] = useState(current_year.getFullYear());
  // const [isOpen, setIsOpen] = useState(false);
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


  return (
    <>
      <div className="col-md-12 col-lg-3 bg-slate-400 shadow-md rounded-md border-red-200 py-3 md:block hidden">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Refine Search by Dealers
              </button>
            </h2>
            <div
              id="collapseOne"
              className='accordion-collapse collapse show'
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
                  <div className='sidebar-head text-center text-black pb-3'>
                    <Link href="/" className='text-black font-bold pt-5 text-lg'>View More Dealers</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Refine Filter
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className='dealers'>
                  {/* <div className='sidebar-head text-center text-black'>
            <p className='text-black font-bold pt-5 text-lg'>Filter Cars</p>
          </div> */}
                  <div className="filter_inputs p-1">
                    <form action="/" method="POST">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="Make" className="form-label">
                              Make
                            </label>
                            <select id="Make" className="form-select" name='car_make'>
                              <option option="">Select Any Make</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="Model" className="form-label" name='car_model'>
                              Model
                            </label>
                            <select id="Model" className="form-select">
                              <option option="">Any</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="Trim " className="form-label">
                              Trim
                            </label>
                            <input type='text' className='form-control' name='trim' placeholder='Touring' />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="Zip" className="form-label">
                              Zip/Postal*
                            </label>
                            <input type="text" className="form-control" id="Zip" name="zip" placeholder="Ex. 90210" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="Distance" className="form-label">
                              Distance
                            </label>
                            <select id="Distance" className="form-select form-control" name='car_distance'>
                              <option option="">300 mi.</option>
                            </select>
                          </div>
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
                            <input type="text" className="form-control" id="Min" name="min_price" placeholder="0" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="max" className="form-label">
                              Max Price
                            </label>
                            <input type="text" className="form-control" id="Max" name="max_price" placeholder="Any" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="Min" className="form-label">
                              Min Year
                            </label>
                            <input type="text" className="form-control" id="Min" name="min_year" placeholder="1900" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="max" className="form-label">
                              Max Year
                            </label>
                            <input type="text" className="form-control" id="Max" name="max_year" placeholder={CurrentYr} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="Min" className="form-label">
                              Min Mileage
                            </label>
                            <input type="text" className="form-control" id="Min" name="min_mileage" placeholder="0" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group my-2">
                            <label htmlFor="max" className="form-label">
                              Max Mileage
                            </label>
                            <input type="text" className="form-control" id="Max" name="max_mileage" placeholder="Any" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="fuelType" className="form-label">
                              Fuel Type (Gas, Electric, Other)
                            </label>
                            <select id="fuelType" className="form-select" name='fuel_type'>
                              <option option=''>Any</option>
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
                                defaultChecked=""
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
                                defaultChecked=""
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
                            <select id="body_style" className="form-select">
                              <option option=''>Any</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="drive_type" className="form-label">
                              Drive Type
                            </label>
                            <select id="drive_type" className="form-select" name='drive_type'>
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
                            <select id="color" className="form-select" name='exterior_type'>
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
                            <select id="icolor" className="form-select" name='interior_color'>
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
                            <select id="Doors" className="form-select" name='doors'>
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
                            <select id="Cylinders" className="form-select" name='cylinder'>
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
                            <select id="Title" className="form-select" name='car_title'>
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
                            <select id="Keywords" className="form-select" name='keyboard'>
                              <option>Disabled select</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group my-2">
                            <label htmlFor="last_day" className="form-label">
                              Show last # of days
                            </label>
                            <select id="last_day" className="form-select">
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
                          <button className='bg-orange-400 rounded-md text-white p-2 m-2 hover:bg-white hover:text-orange-300 hover:rounded-md hover:border-2 hover:border-sky-500 hover:shadow-md'>Submit</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                New Car
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
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
              </div>
            </div>
          </div>
        </div>


        {/* refine filter  */}

        {/* new car  */}

      </div>
    </>
  )
}

export default LeftSideBar