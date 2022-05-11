import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse w-1/2">
                <img src={chair} alt='' />
                <div className='mr-32'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;