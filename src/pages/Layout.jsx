import React from 'react'
import { useState } from "react"
import { Outlet, Link, matchPath } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons'

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

    let currentHeader = matchPath;

    let menuOpened = (ev) => {
        if (menu) {
            setMenu(false);
            document.body.classList.toggle("overflow-hidden")
        } else {
            setMenu(true);
            document.body.classList.toggle("overflow-hidden")
        }
    }


    return (
        <>
        {!menu ? <div className="backdrop absolute z-10 bg-black opacity-0 transition-opacity duration-300 w-full h-full hidden"></div> : <div className="backdrop absolute bg-black opacity-20 w-full h-full z-10 block transition-all duration-300"  onClick={(e) => (e.target.classList.contains("backdrop") && (setMenu(false), document.body.classList.toggle("overflow-hidden")))}></div>}
        <header className="flex justify-between px-8 lg:px-28 h-24 items-center">
            <Link to="/">
                <h2 className="font-semibold text-2xl">Logo</h2>
            </Link>
            <nav className="h-full hidden md:flex">
                <ol className="flex gap-10 items-center">
                    <li><Link to='/' className="h-full relative pb-1 before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >Home</Link></li>
                    <li><Link to='/Portfolio' className="h-full pb-1 relative before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >Portfolio</Link></li>
                    <li><Link to='/AboutMe' className="h-full pb-1 relative before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >About me</Link></li>
                </ol>
            </nav>
            <div className="flex">
                    <a href="#contact"><button className="bg-blue-600 px-6 py-2 rounded-md text-white outline-blue-600 outline transition-all hidden md:inline hover:bg-none hover:text-blue-600 hover:outline-2 hover:bg-transparent">Contact</button></a>
                    <div className="w-fit h-full flex flex-col gap-2 justify-center md:hidden z-30 relative" onClick={()=> ( menuOpened() )}>
                        {!menu? <span className="w-8 bg-blue-600 h-[3px] rounded-md origin-top-left rotate-0 transition-all duration-300"></span> : <span className="w-8 bg-black h-[3px] rounded-md origin-top-left rotate-45 transition-all duration-300 delay-100"></span>}
                        {!menu? <span className="w-8 bg-blue-600 h-[3px] rounded-md origin-top-left scale-x-100 transition-all duration-300"></span> : <span className="w-8 bg-black h-[3px] rounded-md origin-left scale-x-0 transition-all duration-300"></span>}
                        {!menu? <span className="w-8 bg-blue-600 h-[3px] rounded-md origin-top-left -rotate-0 transition-all duration-300"></span> : <span className="w-8 bg-black h-[3px] rounded-md origin-top-left -rotate-45 transition-all duration-300 delay-100"></span>}
                    </div>
            </div>
            </header>
            {!menu ?
                <div className="absolute bg-white w-2/3 h-full z-20 right-0 overflow-hidden origin-right scale-x-0 transition-all duration-300">

                </div> : 
                <div className="absolute bg-white w-2/3 h-full z-20 right-0 overflow-hidden origin-right scale-x-100 transition-all duration-300">
                    <nav className="menu h-full flex items-center justify-center">
                        <ol className="flex flex-col gap-y-14 items-center">
                            <li className="text-2xl"><Link to='/' className="h-full pb-1 relative before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >Home</Link></li>
                            <li className="text-2xl"><Link to='/Portfolio' className="h-full pb-1 relative before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >Portfolio</Link></li>
                            <li className="text-2xl"><Link to='/AboutMe' className="h-full pb-1 relative before:transition-all before:ease-in-out before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-blue-600 hover:before:w-full" >About me</Link></li>
                            <button className="border-blue-600 border-2 px-10 py-3 rounded-md text-blue-600 transition-all ease-in-out hover:bg-blue-600 hover:text-white "><Link to="/Contact">Contact</Link></button>
                        </ol>
                    </nav>
                </div>
            }
            <Outlet />
            <footer className=" flex flex-col items-center justify-end pt-12 gap-14 bg-white w-full h-full">
                <div>
                    <ol className="gap-10 items-center hidden sm:flex">
                        <li><Link to='/' className="h-full" >Home</Link></li>
                        <li><Link to='/Portfolio' className="h-full" >Portfolio</Link></li>
                        <h2 className="font-semibold text-2xl">Logo</h2>
                        <li><Link to='/AboutMe' className="h-full" >About me</Link></li>
                        <li href="#contact"><Link to='/Contact' className="text-lg">Contact</Link></li>
                    </ol>

                    <ol className="gap-5 items-center grid place-items-center sm:hidden">
                        <h2 className="font-semibold text-2xl col-span-4">Logo</h2>
                        <li><Link to='/' className="text-lg" >Home</Link></li>
                        <li><Link to='/Portfolio' className="text-lg" >Portfolio</Link></li>
                        <li><Link to='/AboutMe' className="text-lg" >About me</Link></li>
                        <li href="#contact"><Link to='/Contact' className="text-lg">Contact</Link></li>
                    </ol>
                </div>
                <div className="flex flex-col space-y-8">
                    <h1 className="text-3xl text-center font-bold text-blue-600">Discover me in</h1>
                    <div className="h-full grid grid-flow-row grid-cols-2 sm:grid-flow-col sm:grid-cols-none gap-4">
                        <a className="border-2 py-2 px-6 rounded-md cursor-pointer hover:bg-stone-800 hover:text-white space-x-3" href="#"><FontAwesomeIcon icon={faGithub}/><span>OuStack</span></a>
                        <a className="border-2 py-2 px-6 rounded-md cursor-pointer hover:bg-pink-600 hover:text-white space-x-3" href="#"><FontAwesomeIcon icon={faInstagram}/><span>@OuStack</span></a>
                        <a className="border-2 py-2 px-6 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white space-x-3" href="#"><FontAwesomeIcon icon={faBehance}/><span>Ou-Stack</span></a>
                        <a className="border-2 py-2 px-6 rounded-md cursor-pointer hover:bg-pink-500 hover:text-white space-x-3" href="#"><FontAwesomeIcon icon={faDribbble}/><span>Ou-Stack</span></a>
                    </div>
                </div>
                <div className="text-center text-white bg-blue-600 w-full py-3">Copyright © 2022 Ouaissa all rights reserved.</div>
            </footer>
        </>
    )
}

export default Layout

// onClick={(e) => { e.currentTarget.classList.contains('md:hidden') && openedMenu ? ( toggelTopLine("rotate-45 origin-top-left"), toggelMidLine("scale-0"), toggelBottomLine("-rotate-45 origin-bottom-left") ) : (toggelTopLine(""), toggelMidLine(""), toggelBottomLine(""))