import React from 'react'
export default function Contact() {
  return (
    <div id='contact' className=' flex flex-col justify-center h-screen px-8 sm:px-36 lg:px-60 xl:px-96'>
      <h1 className='mb-7 text-center text-5xl font-bold text-blue-600'>
        Let's work together
      </h1>
      <p className='mb-12 text-center'>
        Connect with Me, I'd Love to Hear From You 
      </p>
      <form className='flex flex-col gap-3'>
        <input
          type='text'
          placeholder='Name'
          className='rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600'
        />
        <input
          type='text'
          placeholder='Email'
          className='rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600'
        />
        <input
          type='text'
          placeholder='Subject'
          className='rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600'
        />
        <textarea
          placeholder='Message'
          rows='5'
          className='resize-none rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600'
        ></textarea>
        <input
          type='submit'
          value='submit'
          className='cursor-pointer rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:bg-blue-800'
        />
      </form>
    </div>
  );
}
