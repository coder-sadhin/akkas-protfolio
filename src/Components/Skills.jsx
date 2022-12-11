import React from 'react';
import Skilldiv from './Skilldiv';
import html from '../assets/imgFo/html.png';
import css from '../assets/imgFo/css.png';
import bootstrap from '../assets/imgFo/bootstrap.png';
import tailwindcss from '../assets/imgFo/tailwindcss.png';
import javascript from '../assets/imgFo/javascript.png';
import figma from '../assets/imgFo/figma.png';
import reactjs from '../assets/imgFo/reactjs.png';
import nodejs from '../assets/imgFo/nodejs.png';
import mongodb from '../assets/imgFo/mongodb.png';
import github from '../assets/imgFo/github.png';
import firebase from '../assets/imgFo/firebase.png';
import expressjs from '../assets/imgFo/expressjs.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    <Skilldiv data={'HTML'}>{html}</Skilldiv>
                    <Skilldiv data={'Css'}>{css}</Skilldiv>
                    <Skilldiv data={'bootstrap'}>{bootstrap}</Skilldiv>
                    <Skilldiv data={'tailwind css'}>{tailwindcss}</Skilldiv>
                    <Skilldiv data={'javascript'}>{javascript}</Skilldiv>
                    <Skilldiv data={'figma DEsign'}>{figma}</Skilldiv>
                    <Skilldiv data={'react js'}>{reactjs}</Skilldiv>
                    <Skilldiv data={'node js'}>{nodejs}</Skilldiv>
                    <Skilldiv data={'express js'}>{expressjs}</Skilldiv>
                    <Skilldiv data={'mongodb'}>{mongodb}</Skilldiv>
                    <Skilldiv data={'github'}>{github}</Skilldiv>
                    <Skilldiv data={'firebase'}>{firebase}</Skilldiv>
                </div>
            </div>
        </div>
    );
};
export default Skills;