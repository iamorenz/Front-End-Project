/* eslint-disable no-unused-vars */
import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/(customSlugHere)"
          method="POST"
          className="flex flex-col w-full md:w-4/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="bg-purple-500 hover:bg-purple-700 
            text-white font-bold py-2 px-3 rounded-full"
          >
            Hit Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
