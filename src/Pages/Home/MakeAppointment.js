import React from 'react';
import doctorImg from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='block lg:flex justify-center px-7 py-16 lg:py-0 lg:px-28 mb-20'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctorImg} alt="" />
            </div>
            <div className='flex-1 my-auto'>
                <h3 className='text-xl font-bold text-secondary'>Appointment</h3>
                <h1 className='text-4xl font-semibold text-white my-5'>Make an appointment today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page <br /><br /></p>
                <button class="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;