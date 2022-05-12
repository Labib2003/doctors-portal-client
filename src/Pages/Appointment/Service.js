import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[1]}</span> : <span>No slot available.</span>
                    }
                </p>
                <p>Space Available: {slots.length}</p>
                <div className="card-actions">
                    <label onClick={() => setTreatment(service)} disabled={!slots.length} className="btn bg-gradient-to-r from-secondary to-primary disabled:opacity-50" htmlFor="booking-modal">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;