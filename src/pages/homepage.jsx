import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link, useLocation } from "react-router-dom";
import Contact from "./Contact";

// component that display project for the portfolio
export function Project({ name, image, technologies }) {
  const tech = [...technologies];
  return (
    <div className='relative h-full'>
      <div className='group group absolute h-full w-full overflow-hidden from-slate-800 to-transparent after:absolute after:top-full after:left-0 after:h-full after:w-full after:-translate-y-0 after:bg-gradient-to-t after:transition-all after:duration-500 after:ease-out after:hover:-translate-y-full'>
        <div className='absolute top-full z-10 translate-y-0 space-y-3 p-5 transition-all delay-100 duration-500 ease-out group-hover:-translate-y-full'>
          <h1 className='text-3xl text-white'>{name}</h1>
          <div className='space-x-2'>
            {tech.map((technology) => (
              <span className='rounded-xl bg-sky-500 px-3 py-1 text-[12px] text-white'>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <img className=' h-full w-full object-cover' src={image} alt={name} />
    </div>
  );
}

function Skill({ techImage, techName, expPoint, showUpDelay }) {
  const [exp, setExp] = useState([]);
  // Definr experiense level
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      if (i < expPoint) {
        setExp((exp) => [...exp, "bg-blue-500"]);
      } else {
        setExp((exp) => [...exp, "bg-slate-300"]);
      }
    }
  }, [expPoint]);

  return (
    <AnimationOnScroll
      animateIn='animate__fadeInLeft'
      animateOnce={true}
      delay={showUpDelay}
    >
      <div className='flex h-52 w-full flex-row items-center justify-center gap-7 rounded-md bg-white p-10 px-14 shadow-lg shadow-blue-300'>
        {/* <div style={{ background: "conic-gradient(#2563EB 270deg, #ffffff 0deg)" }} className="  rounded-full relative flex items-center justify-center before:absolute before:bg-white before:w-4/5 before:h-4/5 before:rounded-full"></div> */}
        <img className='w-24' src={techImage} alt={techName} />
        <div className='space-y-1'>
          <h1 className=' text-2xl font-medium leading-none sm:text-3xl'>
            {techName}
          </h1>
          <h1 className='space-y-1.5 text-sm font-medium text-slate-400'>
            <p>Experience</p>
            <div id='experience' className='flex gap-1.5'>
              {exp.length &&
                exp.map((exp) => (
                  <div className={`h-2.5 w-2.5 rounded-full ${exp}`}></div>
                ))}
            </div>
          </h1>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

function Homepage() {
  const path = useLocation();

  return (
    <>
      <div className='-mt-12 flex flex-col items-center justify-around gap-y-12 gap-x-16 px-8 md:mt-0 md:flex-row lg:px-36'>
        <div className='flex-1 space-y-8'>
          <h1 className='text-5xl font-medium lg:text-6xl'>
            Hi, I'm Oussama A{" "}
            <span className='font-bold text-blue-600'>Full-Stack</span> web
            developer
          </h1>
          <div className='flex flex-col gap-5 xl:flex-row'>
            <a href='#contact'>
              <button className='group flex w-full items-center justify-center rounded-md bg-blue-600 px-10 py-4 text-white shadow-blue-900 drop-shadow-2xl xl:w-fit '>
                <p>let's work together</p>
                <FontAwesomeIcon
                  className='-ml-4 translate-x-3 animate-slideLeft opacity-0 transition-all ease-in-out md:group-hover:ml-0 md:group-hover:opacity-100'
                  icon={faArrowRight}
                />
              </button>
            </a>
            <Link to='/AboutMe'>
              <button className='group flex w-full items-center justify-center rounded-md border-2 border-blue-600 px-10 py-4 text-blue-600 xl:w-fit'>
                Learn more about me
                <FontAwesomeIcon
                  className='-ml-4 translate-x-3 animate-slideLeft opacity-0 transition-all ease-in-out md:group-hover:ml-0 md:group-hover:opacity-100'
                  icon={faArrowRight}
                />
              </button>
            </Link>
          </div>
        </div>

        <img
          className='w-full max-w-xs rounded-full bg-slate-200 bg-top object-cover'
          src='/profile.png'
          alt='profile'
        />
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
              Hello, I am Oussama, a full-stack developer in the process of
              learning and perfecting my skills. I am confident that my skills
              and drive will enable me to succeed in any task that I take on
            </p>
          </div>
          <div className='grid w-full max-w-lg place-items-center gap-y-12 pt-12 grid-cols-2 sm:grid-cols-2 sm:flex-row sm:items-start md:grid-cols-3'>
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
        <div className='grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2'>
          <Skill
            techName='Html 5'
            techImage='/image/html.svg'
            expPoint={5}
            showUpDelay={700}
          />
          <Skill
            techName='Css 3'
            techImage='/image/Css.svg'
            expPoint={5}
            showUpDelay={600}
          />
          <Skill
            techName='JS ES6'
            techImage='/image/JavaScript.svg'
            expPoint={4}
            showUpDelay={500}
          />
          <Skill
            techName='Php'
            techImage='/image/php.svg'
            expPoint={3}
            showUpDelay={400}
          />
          <Skill
            techName='Tailwind Css'
            techImage='/image/tailwindCss.svg'
            expPoint={5}
            showUpDelay={300}
          />
          <Skill
            techName='React JS'
            techImage='/image/react.svg'
            expPoint={3}
            showUpDelay={200}
          />
          <Skill
            techName='Laravel'
            techImage='/image/Laravel.svg'
            expPoint={2}
            showUpDelay={100}
          />
        </div>
      </div>

      <div className='h-full bg-white px-8 pt-12 pb-24 lg:px-40'>
        <AnimationOnScroll animateIn='animate__fadeInRight' animateOnce={true}>
          <h1 className='mb-12 text-4xl font-bold text-blue-600'>
            My Latest work
          </h1>
          <div className='grid grid-flow-row grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3'>
            <Project
              name='Maktabati online library'
              image='./portfolio/1.png'
              technologies={["React", "Css"]}
            />
            <Project
              name='Bab Dari home rental'
              image='./portfolio/2.png'
              technologies={["Html", "JS", "Tailwind"]}
            />
            <Project
              name='Blockchain'
              image='./portfolio/3.png'
              technologies={["Html", "Css", "JS"]}
            />
            <Project
              name='Megarama'
              image='./portfolio/4.png'
              technologies={["Html", "Css", "JS"]}
            />
            <Project
              name='Authentication'
              image='./portfolio/5.png'
              technologies={["React", "Tailwind"]}
            />

            <Link to='/Portfolio'>
              <div className='group relative h-full w-full cursor-pointer overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-70'>
                <img
                  className='h-full w-full object-cover'
                  src='./portfolio/6.png'
                  alt='portfolio'
                />
                <div className='absolute bottom-1/2 left-1/2 z-10 origin-center -translate-x-1/2 translate-y-1/2 space-y-2'>
                  <h1 className='text-xl text-white transition-all duration-300 ease-in-out group-hover:text-2xl'>
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
