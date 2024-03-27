'use client'
import React, {useState, useEffect} from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`fixed w-full z-10 border-width-2 shadow-xl ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 md:flex-1 flex-1 justify-center">
            <a href="/" className="-m-1.5 p-1.5">
              <h4 className={`${isScrolled ? 'text-black' : 'text-white'} uppercase`}>CarHub</h4>
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
