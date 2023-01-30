import React from 'react'
function AboutMe() {
  return (
    <div className='flex flex-col items-center px-8 box-border gap-24 lg:px-60'>
      <h1 className='text-6xl font-semibold text-blue-600 sm:text-7xl'>
        [OU]: A Little Bit About Me
      </h1>
      <div className='flex flex-col gap-12 sm:flex-row-reverse items-center'>
        <p className='indent-6 text-xl w-fit'>
          Hi there! My name is [Name] and I am a software developer with
          [number] years of experience in the field. I am skilled in a variety
          of programming languages including [languages] and have a strong
          background in [technical skills].
        </p>
        {/* <img
          className='flex-1'
          src='https://via.placeholder.com/520x250.png'
          alt=''
        /> */}
      </div>

      <div className='space-y-6'>
        <h2 className='text-3xl font-semibold text-blue-600'>
          Career Highlights
        </h2>
        <div className='flex flex-col gap-12 sm:flex-row-reverse'>
          <p className='indent-6 text-xl w-full'>
            Throughout my career, I have worked on a variety of projects for
            [companies/clients], and have a proven track record of delivering
            high-quality software solutions on time and on budget. I am highly
            motivated and always looking for ways to improve my skills and stay
            up-to-date with the latest technologies and best practices.
          </p>
          {/* <img
            className='flex-1 w-max'
            src='https://via.placeholder.com/520x150.png'
            alt=''
          /> */}
        </div>
      </div>
      <div className='space-y-6'>
        <h2 className='text-3xl font-semibold text-blue-600'>
          What I Do in My Free Time
        </h2>
        <div className='flex flex-col gap-4 w-full'>
          <p className='flex-1 indent-6 text-xl'>
                In my free time, I enjoy [hobbies] and staying involved in the tech
            community through [meetups/conferences/contributing to open source
            projects].
          </p>
          <p className='flex-1 indent-6 text-xl'>
                I am excited to share my expertise and insights with
            others through this website. Thank you for visiting!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
