import React from "react";
function AboutMe() {
  return (
    <div className='box-border flex flex-col gap-12 px-8 lg:px-28'>
      <h1 className='text-6xl font-semibold text-blue-600 sm:text-7xl'>
        A Little Bit About Me
      </h1>
      {/* <img className='w-4/5' src='./src/assets/img/Success.jpg' alt='' /> */}
      <p className='w-fit indent-3 text-xl'>
        Hello, I am Oussama, a <b className="text-blue-600 ">full-stack developer</b> in the process of learning
        and perfecting my skills. I am currently in my second year of my
        training and have gained knowledge in various programming languages such
        as HTML, CSS, JavaScript, PHP, and Python. I am familiar with different
        frameworks such as ReactJS and Laravel, and I am always eager to expand
        my knowledge and stay updated with the latest technologies.
      </p>

      <p className='w-full indent-3 text-xl'>
        When I am not coding, I enjoy playing games and listening to music. I am
        an enthusiast of trying out new things, whether it be a new video game
        or exploring a new city. This approach has taught me to always be open
        to new experiences and challenges, which has helped me grow as a person
        and a developer.
      </p>

      <p className='flex-1 indent-3 text-xl'>
        I am eager to take on new projects and challenges, and I am confident
        that my skills and drive will enable me to succeed in any task that I
        take on. I am excited about the future and am looking forward to what it
        holds for me as a developer.
      </p>
    </div>
  );
}

export default AboutMe;
