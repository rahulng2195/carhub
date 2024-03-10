import {useState} from 'react'
import Image from 'next/image'

import Link from 'next/link'
// import { input } from 'postcss';
import Accordion from 'react-bootstrap/Accordion';

const LeftSideBar = () => {
  const [isChecked, setChecked] =  useState(true)
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
      {/* <div className='leftsidebar'>

      <div className='dealers bg-white my-3 shadow-lg border-spacing-2 rounded-lg overflow-y-scroll overflow-x-hidden'>
        <div className='sidebar-head text-center text-black'>
            <p className='text-black font-bold pt-5 text-lg'>Refine Search by Dealers</p>
        </div>
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

       <div className='bg-white my-3 shadow-lg border-spacing-2 rounded-lg overflow-y-scroll overflow-x-hidden'>
          <div className='sidebar-head text-center text-black'>
              <p className='text-black font-bold pt-5 text-lg'>Filter Cars</p>
          </div>
       </div>   
    </div> */}

      <div className="col-md-12 col-lg-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              {/* <div className='sidebar-head text-center text-black'>
            <p className='text-black font-bold pt-5 text-lg'>Refine Search by Dealers</p>
          </div> */}
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
              className="accordion-collapse show"
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden
                by default, until the collapse plugin adds the appropriate classes that
                we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You
                can modify any of this with custom CSS or overriding our default
                variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden
                by default, until the collapse plugin adds the appropriate classes that
                we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You
                can modify any of this with custom CSS or overriding our default
                variables. It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>



        <div className='bg-white my-3 shadow-md border-spacing-2 rounded-lg '>
          <div className='sidebar-head text-center text-black'>
            <p className='text-black font-bold pt-5 text-lg'>Filter Cars</p>
          </div>
          <div className="filter_inputs p-3">
            <form action="/" method="POST">
              <div className="row">
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
                    <label htmlFor="Trim " className="form-label">
                      Trim
                    </label>
                    <select id="Trim " className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="Zip" className="form-label">
                      Zip/Postal*
                    </label>
                    <input type="text" className="form-control" id="Zip" name="Zip" placeholder="Zip/Postal" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="Distance" className="form-label">
                      Distance
                    </label>
                    <select id="Distance" className="form-select form-control">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <label className="filter">Filter</label>
                </div>

                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="Min" className="form-label">
                      Min Price
                    </label>
                    <input type="text" className="form-control" id="Min" name="Min" placeholder="Min Price" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="max" className="form-label">
                      Max Price
                    </label>
                    <input type="text" className="form-control" id="Max" name="Max" placeholder="Max Price" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="Min" className="form-label">
                      Min Year
                    </label>
                    <input type="text" className="form-control" id="Min" name="Min" placeholder="Min Year" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="max" className="form-label">
                      Max Year
                    </label>
                    <input type="text" className="form-control" id="Max" name="Max" placeholder="Max Year" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="Min" className="form-label">
                      Min Mileage
                    </label>
                    <input type="text" className="form-control" id="Min" name="Min" placeholder="Min Mileage" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="max" className="form-label">
                      Max Mileage
                    </label>
                    <input type="text" className="form-control" id="Max" name="Max" placeholder="Max Mileage" />
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="form-group my-2">
                    <label htmlFor="disabledSelect" className="form-label">
                      Disabled select menu
                    </label>
                    <select id="disabledSelect" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="fuelType" className="form-label">
                      Fuel Type (Gas, Electric, Other)
                    </label>
                    <select id="fuelType" className="form-select">
                      <option>Disabled select</option>
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
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="drive_type" className="form-label">
                    Drive Type
                    </label>
                    <select id="drive_type" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="color" className="form-label">
                    Exterior Color
                    </label>
                    <select id="color" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="icolor" className="form-label">
                    Interior Color
                    </label>
                    <select id="icolor" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="Doors" className="form-label">
                    Doors
                    </label>
                    <select id="Doors" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="Cylinders" className="form-label">
                    Cylinders
                    </label>
                    <select id="Cylinders" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group my-2">
                    <label htmlFor="Title" className="form-label">
                    Title
                    </label>
                    <select id="Title" className="form-select">
                      <option>Disabled select</option>
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
                    <select id="Keywords" className="form-select">
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
                      <option>Disabled select</option>
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
    </>
  )
}

export default LeftSideBar