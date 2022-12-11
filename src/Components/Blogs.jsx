import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full py-5 md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='flex justify-center items-center h-full'>
                <p className='text-7xl font-thin'>Bl</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <p className='text-7xl font-thin'>gs</p>

                <p className='text-7xl font-thin ml-4'>C</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <p className='text-7xl font-thin'>ming</p>

                <p className='text-7xl font-thin ml-4'>S</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                <p className='text-7xl font-thin'>n....</p>
            </div>
        </div>
    );
};

export default Blogs;