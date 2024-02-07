import React from 'react';
import logo from "./images/3.png";

const Aboutme = () => {
  return (
    <div id="aboutme" className="px-4 lg:px-0">
      <h1 className='text-[#90A0D9] text-3xl lg:text-5xl font-bold text-center pb-4'>ABOUT ME</h1>
      <div className='w-full lg:w-2/3 mx-auto text-md'>
        <div className='flex flex-col lg:flex-row items-center'>
          <img src={logo} alt="Dinesh's Logo" className='w-40 lg:w-48 h-auto mr-0 lg:mr-4 mb-4 lg:mb-0' />
          <p className='pb-4 lg:pl-4 lg:text-lg '>
            Hello! I'm <span className='text-[#90A0D9]'>Dinesh</span>, a dedicated and meticulous front-end developer with a passion for creating visually stunning and interactive user experiences. My journey into the world of web development ignited from a curiosity about designing aesthetically pleasing websites, evolving into a mastery of diverse technologies.
          </p>
        </div>
        
        <strong className='text-lg lg:text-2xl py-4 text-[#90A0D9]'>Skills</strong><br />
        <div>
          <strong className='text-[#90A0D9]'>HTML/CSS:</strong> <p>Crafting polished and responsive web layouts for a seamless user experience across various devices.</p>
          <strong className='text-[#90A0D9]'>JavaScript:</strong> <p>Enthusiastically constructing dynamic and interactive web applications using the power of JavaScript.</p>
          <strong className='text-[#90A0D9]'>Bootstrap & Tailwind CSS:</strong> <p>Skillfully employing popular CSS frameworks for efficient and contemporary styling.</p>
          <strong className='text-[#90A0D9]'>React & Redux:</strong> <p>Intermediate in developing single-page applications with React and proficiently managing state using Redux.</p>
          <strong className='text-[#90A0D9]'>Git & GitHub:</strong><p> Well-versed in version control systems, ensuring collaborative and organized development workflows.</p>
        </div>
        <p className='py-3'>
          As a recent graduate, I bring a fresh perspective, an insatiable appetite for learning, and an unwavering commitment to staying abreast of the latest trends in web development. My aspiration is to contribute to captivating projects, collaborate with talented teams, and continually elevate my skills in this ever-evolving field.
        </p>
        <p>
          I am currently on the lookout for opportunities to apply and broaden my skills, make meaningful contributions to projects, and evolve as a front-end developer. Let's embark on the journey of building something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
