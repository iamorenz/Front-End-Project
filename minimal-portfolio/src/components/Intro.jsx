/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Oren Zhu
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Computer Science Student & Junior Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a university student who is passionate about technology and
        programming. I love to learn new things and I am always looking for some
        opportunity to get an intern job. I believe that working in real
        industry projects will help me to improve my skills, and help me to find
        my career direction and goals.
        <br />
        Please feel free to contact me and I appreciate your time and consideration.
        I hope you can give me an opportunity to work with you.
      </p>
    </div>
  );
};

export default Intro;
