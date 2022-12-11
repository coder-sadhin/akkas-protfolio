import React, { useEffect, useState } from 'react';
import site1 from '../assets/quickSell.png';
import site2 from '../assets/photography.png';
import site3 from '../assets/ourCourse.png';
import SingleWorkSample from './SingleWorkSample';

const WorkSample = () => {
    const [sites, setSites] = useState([]);
    useEffect(() => {
        fetch('sites.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSites(data)
            })
    }, [])
    return (
        <div className='w-full py-5 md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Work
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    {
                        sites.map(site => <SingleWorkSample
                            key={site.id}
                            site={site}
                        ></SingleWorkSample>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkSample;