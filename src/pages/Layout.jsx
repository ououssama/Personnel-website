import React from "react";
import { useState } from "react";
import { Outlet, Link, matchPath, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faBehance,
  faDribbble,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Layout() {
  const [menu, setMenu] = useState(false);
  // const [display, setdisplay] = useState("");
  // [midLine, toggelMidLine] = useState("");
  // [bottomLine, toggelBottomLine] = useState("");
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //       setdisplay(display => "hidden")
  //     }, 7000);
  //     return () => clearInterval(interval);
  //   }, []);

  let path = useLocation();

  let menuOpened = (ev) => {
    if (menu) {
      setMenu(false);
      document.body.classList.toggle("overflow-hidden");
    } else {
      setMenu(true);
      document.body.classList.toggle("overflow-hidden");
    }
  };

  return (
    <>
      {!menu ? (
        <div className='backdrop absolute z-10 hidden h-full w-full bg-black opacity-0 transition-opacity duration-300'></div>
      ) : (
        <div
          className='backdrop absolute z-10 block h-full w-full bg-black opacity-20 transition-all duration-300'
          onClick={(e) =>
            e.target.classList.contains("backdrop") &&
            (setMenu(false), document.body.classList.toggle("overflow-hidden"))
          }
        ></div>
      )}
      <header
        id='hero'
        className='flex h-24 items-center justify-between px-8 lg:px-28'
      >
        <Link to='/'>
          <div className='flex items-start gap-2'>
            <img className='w-10' src='/logo.svg' alt='logo' />
          </div>
        </Link>
        <nav className='hidden h-full md:flex'>
          <ol className='flex items-center gap-10'>
            <li>
              <Link
                to='/'
                className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/Portfolio'
                className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to='/AboutMe'
                className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
              >
                About me
              </Link>
            </li>
          </ol>
        </nav>
        <div className='flex'>
          {/* we check if we are in the homepage to just take user to availble contact for in the page otherwise
                  it will take him to another contact page */}
          {path.pathname === "/" ? (
            <a href='#contact'>
              <button className='hidden rounded-md bg-blue-600 px-6 py-2 text-white outline outline-blue-600 transition-all hover:bg-transparent hover:bg-none hover:text-blue-600 hover:outline-2 md:inline'>
                Contact
              </button>
            </a>
          ) : (
            <Link to='/Contact'>
              <button className='hidden rounded-md bg-blue-600 px-6 py-2 text-white outline outline-blue-600 transition-all hover:bg-transparent hover:bg-none hover:text-blue-600 hover:outline-2 md:inline'>
                Contact
              </button>
            </Link>
          )}

          <div
            className='relative z-30 flex h-full w-fit flex-col justify-center gap-2 md:hidden'
            onClick={() => menuOpened()}
          >
            {!menu ? (
              <span className='h-[3px] w-8 origin-top-left rotate-0 rounded-md bg-blue-600 transition-all duration-300'></span>
            ) : (
              <span className='h-[3px] w-8 origin-top-left rotate-45 rounded-md bg-black transition-all delay-100 duration-300'></span>
            )}
            {!menu ? (
              <span className='h-[3px] w-8 origin-top-left scale-x-100 rounded-md bg-blue-600 transition-all duration-300'></span>
            ) : (
              <span className='h-[3px] w-8 origin-left scale-x-0 rounded-md bg-black transition-all duration-300'></span>
            )}
            {!menu ? (
              <span className='h-[3px] w-8 origin-top-left -rotate-0 rounded-md bg-blue-600 transition-all duration-300'></span>
            ) : (
              <span className='h-[3px] w-8 origin-top-left -rotate-45 rounded-md bg-black transition-all delay-100 duration-300'></span>
            )}
          </div>
        </div>
      </header>
      {!menu ? (
        <div className='absolute right-0 z-20 h-full w-2/3 origin-right scale-x-0 overflow-hidden bg-white transition-all duration-300'></div>
      ) : (
        <div className='absolute right-0 z-20 h-full w-2/3 origin-right scale-x-100 overflow-hidden bg-white transition-all duration-300'>
          <nav className='menu flex h-full items-center justify-center'>
            <ol className='flex flex-col items-center gap-y-14'>
              <li className='text-2xl'>
                <Link
                  to='/'
                  className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
                >
                  Home
                </Link>
              </li>
              <li className='text-2xl'>
                <Link
                  to='/Portfolio'
                  className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
                >
                  Portfolio
                </Link>
              </li>
              <li className='text-2xl'>
                <Link
                  to='/AboutMe'
                  className='relative h-full pb-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-blue-600 before:transition-all before:ease-in-out hover:before:w-full'
                >
                  About me
                </Link>
              </li>
              {path.pathname === "/" ? (
                <a href='#contact'>
                  <button className='rounded-md border-2 border-blue-600 px-10 py-3 text-blue-600 transition-all ease-in-out hover:bg-blue-600 hover:text-white '>
                    Contact
                  </button>
                </a>
              ) : (
                <Link to='/Contact'>
                  <button className='rounded-md border-2 border-blue-600 px-10 py-3 text-blue-600 transition-all ease-in-out hover:bg-blue-600 hover:text-white '>
                    Contact
                  </button>
                </Link>
              )}
            </ol>
          </nav>
        </div>
      )}
      <Outlet />
      <footer className=' flex h-full w-full flex-col items-center justify-end gap-12 bg-white pt-12'>
        <div>
          <ol className='hidden items-center gap-2 sm:flex'>
            <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
              <Link to='/' className='h-full'>
                Home
              </Link>
            </li>
            <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
              <Link to='/Portfolio' className='h-full'>
                Portfolio
              </Link>
            </li>
            <a href='#hero'>
              <img className='mx-5 w-10' src='/logo.svg' alt='logo' />
            </a>
            <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
              <Link to='/AboutMe' className='h-full'>
                About me
              </Link>
            </li>
            <li
              href='#contact'
              className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'
            >
              <Link to='/Contact' className='text-lg'>
                Contact
              </Link>
            </li>
          </ol>

          <ol className='grid place-items-center items-center gap-2 sm:hidden'>
            <a href='#hero'>
              <img className='mb-3 w-10' src='/logo.svg' alt='logo' />
            </a>
            <Link to='/' className='text-lg'>
              <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
                Home
              </li>
            </Link>
            <Link to='/Portfolio' className='text-lg'>
              <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
                Portfolio
              </li>
            </Link>
            <Link to='/AboutMe' className='text-lg'>
              <li className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'>
                About me
              </li>
            </Link>
            <Link to='/Contact' className='text-lg'>
              <li
                href='#contact'
                className='rounded-md px-5 py-2 hover:bg-blue-600 hover:text-white'
              >
                Contact
              </li>
            </Link>
          </ol>
        </div>
        <div className='flex flex-col space-y-8'>
          <h1 className='text-center text-3xl font-bold text-blue-600'>
            Discover me in
          </h1>
          <div className='grid h-full grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <a
              className='cursor-pointer space-x-3 rounded-md border-2 py-2 px-6 hover:bg-stone-800 hover:text-white'
              href='https://github.com/ououssama'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>ououssama</span>
            </a>
            {/* <a
              className='cursor-pointer space-x-3 rounded-md border-2 py-2 px-6 hover:bg-pink-600 hover:text-white'
              href='https://dribbble.com/ouaissa02'
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>@Oussama</span>
            </a> */}
            <a
              className='cursor-pointer space-x-3 rounded-md border-2 py-2 px-6 hover:bg-[#2563eb] hover:text-white'
              href='https://www.linkedin.com/in/oussama-ouaissa-166607265/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span>Oussama Ouaissa</span>
            </a>
            <a
              className='cursor-pointer space-x-3 rounded-md border-2 py-2 px-6 hover:bg-[#0056ff] hover:text-white'
              href='https://www.behance.net/oussamaouaissa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faBehance} />
              <span>oussama ouaissa</span>
            </a>
            <a
              className='cursor-pointer space-x-3 rounded-md border-2 py-2 px-6 hover:bg-[#ea4c89] hover:text-white'
              href='https://dribbble.com/ouaissa02'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faDribbble} />
              <span>Oussama</span>
            </a>
          </div>
        </div>
        <div className='w-full bg-blue-600 py-3 text-center text-white'>
          Copyright © 2022 Ouaissa all rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Layout;

// onClick={(e) => { e.currentTarget.classList.contains('md:hidden') && openedMenu ? ( toggelTopLine("rotate-45 origin-top-left"), toggelMidLine("scale-0"), toggelBottomLine("-rotate-45 origin-bottom-left") ) : (toggelTopLine(""), toggelMidLine(""), toggelBottomLine(""))
