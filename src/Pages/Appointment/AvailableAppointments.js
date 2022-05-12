import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServces] = useState([]);
    const [treatment, setTreatment] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServces(data));
    }, [])
    return (
        <div>
            <h4 className='text-base text-secondary text-center'>Available Appointments on: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;