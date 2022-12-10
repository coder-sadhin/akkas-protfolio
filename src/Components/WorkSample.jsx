import React from 'react';
import site1 from '../assets/quickSell.png';
import site2 from '../assets/photography.png';
import site3 from '../assets/ourCourse.png';
import SingleWorkSample from './SingleWorkSample';

const WorkSample = () => {
    return (
        <div name='work' className='w-full py-5 md:h-screen text-gray-300 bg-[#0a192f]'>
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
                    <SingleWorkSample
                        image={site1}
                        name={'Quick Sell'}
                        description={'A used mobile sell web application built with React, Authentication, User Roll and Mongodb '}
                        live={'https://sell-old-phone-c422d.web.app/'}
                        gitClint={'https://github.com/coder-sadhin/quick-sell-clint'}
                        gitServer={'https://github.com/coder-sadhin/quick-sell-server'}
                    ></SingleWorkSample>

                    <SingleWorkSample
                        image={site2}
                        name={'Excellent Photographer'}
                        description={'A Excellent Phothgraphy site used for hire Photographer built with React, Authentication, and Mongodb'}
                        live={'https://photography-center.web.app/'}
                        gitClint={'https://github.com/coder-sadhin/photography-secter-clint'}
                        gitServer={'https://github.com/coder-sadhin/photography-secter-server'}
                    ></SingleWorkSample>

                    <SingleWorkSample
                        image={site3}
                        name={'Sadhin Courses'}
                        description={'A online base learning platform built with React, Authentication and Mongodb '}
                        live={'https://sadhin-tutorials.web.app/'}
                        gitClint={'https://github.com/coder-sadhin/sadhin-tutorial-clint'}
                        gitServer={'https://github.com/coder-sadhin/sadhin-tutorial-server'}
                    ></SingleWorkSample>
                </div>
            </div>
        </div>
    );
};

export default WorkSample;