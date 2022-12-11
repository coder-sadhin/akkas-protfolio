import React from 'react';

const Skilldiv = ({ children, data }) => {
    return (
        <div className='shadow-md shadow-[#848e9a] hover:scale-110 hover:bg-blue-500 duration-500'>
            <div className='py-3'>
                <img className='w-20 ml-8' src={children} alt="" />
                <h2 className='uppercase font-bold'>{data}</h2>
            </div>
        </div>
    );
};

export default Skilldiv;