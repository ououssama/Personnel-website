import React from "react";
import { redirect } from "react-router-dom";
export default function Contact() {
  return (
    <div
      id='contact'
      className=' flex h-screen flex-col justify-center px-8 sm:px-36 lg:px-60 xl:px-96'
    >
      <h1 className='mb-7 text-center text-5xl font-bold text-blue-600'>
        Let's work together
      </h1>
      <p className='mb-12 text-center'>
        Connect with Me, I'd Love to Hear From You
      </p>
      <form
        name="contact"
        method="POST"
        className="flex flex-col gap-3"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          placeholder="Full name"
          name="fullname"
          className="rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600"
        />
        <textarea
          placeholder="Tell me about your idea"
          rows="5"
          name="message"
          className="resize-none rounded-lg px-5 py-3 outline-2 outline-offset-0 focus:outline focus:outline-blue-600"
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 active:bg-blue-800"
        >
          Lets Connect!
        </button>
      </form>
    </div>
  );
}
