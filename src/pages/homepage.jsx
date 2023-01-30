import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import Contact from "./Contact";

function Homepage() {
  return (
    <>
      <div className='-mt-12 flex flex-col items-center justify-around gap-y-12 gap-x-16 px-8 md:mt-0 md:flex-row lg:px-28'>
        <div className='flex-1 space-y-8'>
          <h1 className='text-5xl font-medium lg:text-6xl'>
            Hi, I'm Oussama A{" "}
            <span className='font-bold text-blue-600'>Full-Stack</span> web
            developer
          </h1>
          <div className='flex flex-col gap-5 xl:flex-row'>
            <Link to="/Contact">
              <button className='group w-full rounded-md bg-blue-600 px-10 py-4 text-white shadow-blue-900 drop-shadow-2xl xl:w-fit '>
                let's work together{" "}
                <FontAwesomeIcon
                  className='translate-x-3 animate-slideLeft opacity-0 transition-all ease-in-out md:group-hover:opacity-100'
                  icon={faArrowRight}
                />
              </button>
            </Link>
            <Link to="/AboutMe">
              <button className='group w-full rounded-md border-2 border-blue-600 px-10 py-4 text-blue-600 xl:w-fit  '>
                Know more about me{" "}
                <FontAwesomeIcon
                  className='translate-x-3 animate-slideLeft opacity-0 transition-all ease-in-out md:group-hover:opacity-100'
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className='flex h-96 w-full flex-1 items-center justify-center bg-slate-200'>
          image
        </div>
        {/* <div className="flex items-center">
                    <div className="inline-block border-blue-600 border-b-[1.2em] border-l-[1.2em]  w-20 h-20 rotate-45"></div>
                    <div className="inline-block bg-blue-600 w-6 h-36 -skew-x-12"></div>
                    <div className="inline-block border-blue-600 border-b-[1.2em] border-r-[1.2em]  w-20 h-20 -rotate-45"></div>
                </div> */}
      </div>

      <div className='relative top-12 h-max space-y-8 bg-white py-12 px-8 pb-24 after:absolute after:left-0 after:-top-12 after:-z-10 after:h-52 after:w-full after:-skew-y-3 after:bg-white lg:px-40'>
        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
          <h1 className='text-4xl font-bold text-blue-600'>Who am i?</h1>
          <div className='flex flex-col justify-center gap-x-12 xl:flex-row'>
            <div className='w-max whitespace-nowrap'>
              <h2 className='text-3xl font-medium'>Oussama Ouaissa</h2>
              <p className='pb-4 text-sm font-semibold text-slate-400'>
                Full-Stack Dev & Graphic designer
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              harum maiores saepe corrupti iusto quaerat eius excepturi autem
              fugit? Dicta perferendis maiores quasi repudiandae saepe eligendi
              qui adipisci accusantium autem.
            </p>
          </div>
          <div className='flex flex-col items-center justify-around gap-y-12 pt-5 sm:flex-row sm:items-start sm:gap-y-0'>
            <span className='text-6xl'>
              <span className='font-medium text-blue-600'>2+</span>
              <p className='text-lg'>
                Years of
                <br /> experience
              </p>
            </span>
            <span className='text-6xl'>
              <span className='font-medium text-blue-600'>10+</span>
              <p className='text-lg'>
                Satisfactory
                <br /> projects
              </p>
            </span>
            <span className='text-6xl'>
              <span className='font-medium text-blue-600'>
                4.6<span className='text-2xl'>/5</span>
              </span>{" "}
              <p className='text-lg'>Clients Rating</p>
            </span>
          </div>
        </AnimationOnScroll>
      </div>

      <div className='h-auto py-9 px-8 lg:px-40'>
        <h1 className='mb-12 text-4xl font-bold text-blue-600'>My skills</h1>
        <div className='grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2'>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            delay={200}
          >
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img className='w-24' src='../src/assets/html.svg' alt='' />
              <div className='flex-1 space-y-1'>
                <h1 className=' text-2xl font-medium leading-none sm:text-3xl'>
                  Html 5
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            delay={100}
          >
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img className='w-24' src='../src/assets/Css.svg' alt='' />
              <div className='space-y-1'>
                <h1 className='text-2xl font-medium leading-none sm:text-3xl'>
                  Css 3
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInLeft' animateOnce={true}>
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img className='w-24' src='../src/assets/JavaScript.svg' alt='' />
              <div className='space-y-1'>
                <h1 className='text-2xl font-medium leading-none sm:text-3xl'>
                  JavaScript
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            delay={500}
          >
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img
                className='w-24'
                src='../src/assets/tailwindCss.svg'
                alt=''
              />
              <div className='space-y-1'>
                <h1 className='text-2xl font-medium leading-none sm:text-3xl'>
                  Tailwind Css
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            delay={400}
          >
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img className='w-24' src='../src/assets/react.svg' alt='' />
              <div className='space-y-1'>
                <h1 className='text-2xl font-medium leading-none sm:text-3xl'>
                  React JS
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            delay={300}
          >
            <div className='flex h-full w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
              {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
              <img className='w-24' src='../src/assets/Laravel.svg' alt='' />
              <div className='space-y-1'>
                <h1 className='text-2xl font-medium leading-none sm:text-3xl'>
                  Laravel
                </h1>
                <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
                  <p>Experience</p>
                  <div className='flex gap-1.5'>
                    <div className='h-2.5 w-2.5 rounded-full bg-blue-500'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                    <div className='h-2.5 w-2.5 rounded-full bg-slate-300'></div>
                  </div>
                </h1>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      <div className='h-auto bg-white px-8 pt-12 pb-24 lg:px-40'>
        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
          <h1 className='mb-12 text-4xl font-bold text-blue-600'>
            My Latest work
          </h1>
          <div className='grid grid-flow-row grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 sm:grid-rows-2'>
            <div className='group group relative h-full w-full overflow-hidden rounded-md from-slate-800 to-transparent after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t sm:col-span-2'>
              <img
                className='h-56 w-full object-cover '
                src='./img/1.png'
                alt=''
              />
              <div className='absolute bottom-0 z-10 space-y-2 p-5'>
                <h1 className='text-2xl text-white transition-all ease-in-out group-hover:text-3xl'>
                  Login page
                </h1>
                <div className='space-x-2'>
                  <span className='rounded-xl bg-sky-500 px-3 py-1 text-[12px] text-white'>
                    React
                  </span>
                  <span className='rounded-xl bg-teal-500 px-3 py-1 text-[12px] text-white'>
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            <div className='group relative h-full w-full overflow-hidden rounded-md from-slate-800 to-transparent after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t'>
              <img
                className='h-56 w-full object-cover '
                src='./img/1.png'
                alt=''
              />
              <div className='absolute bottom-0 z-10 space-y-2 p-5'>
                <h1 className='text-2xl text-white transition-all ease-in-out group-hover:text-3xl'>
                  Login page
                </h1>
                <div className='space-x-2'>
                  <span className='rounded-xl bg-orange-500 px-3 py-1 text-[12px] text-white'>
                    Html
                  </span>
                  <span className='rounded-xl bg-blue-500 px-3 py-1 text-[12px] text-white'>
                    Css
                  </span>
                  <span className='rounded-xl bg-blue-500 px-3 py-1 text-[12px] text-white'>
                    + 1
                  </span>
                </div>
              </div>
            </div>

            <div className='group relative h-full w-full overflow-hidden rounded-md from-slate-800 to-transparent after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t'>
              <img
                className='h-56 w-full object-cover '
                src='./img/1.png'
                alt=''
              />
              <div className='absolute bottom-0 z-10 space-y-2 p-5'>
                <h1 className='text-2xl text-white transition-all ease-in-out group-hover:text-3xl'>
                  Login page
                </h1>
                <div className='space-x-2'>
                  <span className='rounded-xl bg-orange-500 px-3 py-1 text-[12px] text-white'>
                    Html
                  </span>
                  <span className='rounded-xl bg-blue-500 px-3 py-1 text-[12px] text-white'>
                    Css
                  </span>
                  <span className='rounded-xl bg-blue-500 px-3 py-1 text-[12px] text-white'>
                    + 2
                  </span>
                </div>
              </div>
            </div>

            <div className='group relative h-full w-full overflow-hidden rounded-md from-slate-800 to-transparent after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-t'>
              <img
                className='h-56 w-full object-cover '
                src='./img/1.png'
                alt=''
              />
              <div className='absolute bottom-0 z-10 space-y-2 p-5'>
                <h1 className='text-2xl text-white transition-all ease-in-out group-hover:text-3xl'>
                  Login page
                </h1>
                <div className='space-x-2'>
                  <span className='rounded-xl bg-sky-500 px-3 py-1 text-[12px] text-white'>
                    React
                  </span>
                  <span className='rounded-xl bg-blue-500 px-3 py-1 text-[12px] text-white'>
                    Css
                  </span>
                </div>
              </div>
            </div>

            <Link to="/Portfolio">
              <div className='group relative h-full w-full cursor-pointer overflow-hidden rounded-md after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-70'>
                <img
                  className='h-56 w-full object-cover blur'
                  src='./img/1.png'
                  alt=''
                />
                  <div className='absolute bottom-1/2 left-1/2 z-10 origin-center -translate-x-1/2 translate-y-1/2 space-y-2'>
                    <h1 className='text-2xl text-white transition-all ease-in-out group-hover:text-3xl'>
                      See More
                    </h1>
                  </div>
              </div>
            </Link>
          </div>
        </AnimationOnScroll>
      </div>

      <Contact />
    </>
  );
}

export default Homepage;
