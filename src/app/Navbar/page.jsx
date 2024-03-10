import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="bg-transparent border-width-2 shadow-xl w-full fixed z-40">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 md:flex-1 flex-1 justify-center">
            <a href="/" className="-m-1.5 p-1.5">
              <h4 className="text-black">CarHub</h4>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
          </div>
          
        </nav>
        
      </header>
    </>
  );
}
