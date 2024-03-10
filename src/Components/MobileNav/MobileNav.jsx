import React from 'react'

const MobileNav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 z-20 md:hidden">
        <div className="flex justify-between items-center">
          <div type="button" className="btn border-x-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Dealers
          </div>
          <div type="button" className="btn  border-x-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Refine
          </div>

          {/* Right side of the navbar */}
          <div type="button" className="btn border-x-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            New
          </div>
        </div>
      </div>

      {/* <!-- Button trigger modal --> */}


      {/* <!-- Modal --> */}
      <div
        className="modal fade h-screen"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog m-0 p-0 h-auto">
          <div className="modal-content h-screen">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer flex">
              <button
                type="button"
                className="btn btn-secondary w-auto"
                data-bs-dismiss="modal"
              >
                Reset
              </button>
              <button type="button" className="btn btn-primary w-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MobileNav