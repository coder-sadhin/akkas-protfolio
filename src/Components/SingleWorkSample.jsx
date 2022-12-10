import React from 'react';

const SingleWorkSample = ({ image, name, description, live, gitClint, gitServer }) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                    {name}
                </span>
                <p className='text-justify px-3'>{description}</p>
                <div className='pt-4 text-center'>
                    <a href={live}>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-slate-300 text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                    <a href={gitClint}>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-slate-300 text-gray-700 font-bold text-lg'>
                            Clint site code
                        </button>
                    </a>
                    <a href={gitServer}>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-slate-300 text-gray-700 font-bold text-lg'>
                            Server site code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleWorkSample;