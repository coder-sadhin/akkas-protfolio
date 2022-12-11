import React from 'react';
import { Link } from 'react-router-dom';

const SingleWorkSample = ({ site }) => {
    const { image_1, name, description, live } = site;
    return (
        <div
            style={{ backgroundImage: `url(${image_1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                    {name}
                </span>
                <p className='text-justify px-3'>{description}</p>
                <div className='pt-4 text-center'>
                    <a href={live} className='text-center rounded-lg px-4 py-2 m-2 bg-slate-300 text-gray-700 font-bold text-lg'>
                        <button >
                            Live
                        </button>
                    </a>
                    <Link to={'/project'} className='text-center rounded-lg px-4 py-2 m-2 bg-slate-300 text-gray-700 font-bold text-lg'>
                        <button >
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleWorkSample;