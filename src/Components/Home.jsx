import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/akkas-ali.png';
import resume from '../assets/resume.pdf';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#0a192f]"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Mern Stack Web Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 6 month of experience in Front-end web development.
                        Currently, I working on web application using technologies like
                        React, Tailwind, Express.js and Mongodb.
                    </p>
                    <div className='flex gap-3'>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            About Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={25} className="ml-3" />
                            </span>
                        </Link>
                        <a
                            href={resume}
                            download
                            className="group text-white hover:font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className='md:w-6/12'>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-full "
                    />
                </div>
            </div>
        </div>
    );
};
export default Home;