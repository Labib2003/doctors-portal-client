import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>
                    {
                        slots.length ? <span>{slots[1]}</span> : <span>No slot available.</span>
                    }
                </p>
                <p>Space Available: {slots.length}</p>
                <div class="card-actions">
                    <button disabled={!slots.length} class="btn bg-gradient-to-r from-secondary to-primary disabled:opacity-50">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;