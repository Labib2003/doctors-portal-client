import React from 'react';
import florideImg from "../../assets/images/fluoride.png"
import cavityImg from "../../assets/images/cavity.png"
import whiteningImg from "../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: florideImg,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            img: cavityImg,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            img: whiteningImg,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div className='text-center'>
            <div className='mb-16'>
                <p className='uppercase text-primary text-xl font-bold'>Our services</p>
                <h3 className='text-accent text-4xl'>Services we provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;