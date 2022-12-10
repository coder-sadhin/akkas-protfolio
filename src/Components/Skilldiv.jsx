import React from 'react';

const Skilldiv = ({ children }) => {
    return (
        <div className='shadow-md shadow-[#a3b6cd] hover:scale-110 duration-500'>
            <p className='my-4'>{children}</p>
        </div>
    );
};

export default Skilldiv;