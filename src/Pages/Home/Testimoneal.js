import React from 'react';

const Testimoneal = ({ testimonial }) => {
    const {body, img, name, location} = testimonial;
    return (
        <div className='p-9 flex flex-col items-center'>
            <p className='mb-9'>{body}</p>
            <div className='flex'>
                <img className='w-16 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={img} alt="" />
                <div className='my-auto'>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimoneal;