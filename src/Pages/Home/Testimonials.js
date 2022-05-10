import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Testimoneal from './Testimoneal';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            body: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person1,
            name: "Winson Herry",
            location: "California"
        },
        {
            id: 2,
            body: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person2,
            name: "Losefather Perry",
            location: "Alabama"
        },
        {
            id: 3,
            body: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: person3,
            name: "Bloody Merry",
            location: "Washington"
        },
    ]
    return (
        <section>
            <div className='flex justify-between mb-20'>
                <div>
                    <p className='text-xl font-bold text-secondary mb-2'>Testimonial</p>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <img className='w-28' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    testimonials.map(testimoneal => <Testimoneal key={testimoneal.id} testimonial={testimoneal}></Testimoneal>)
                }
            </div>
        </section>
    );
};

export default Testimonials;