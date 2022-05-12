import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const {name, slots} = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='text-center' action="">
                        <input type="text" value={format(date, 'PP')} class="input w-full max-w-xs mb-3" readOnly />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input w-full max-w-xs mb-3" />
                        <input type="email" name='email' placeholder="Email" class="input w-full max-w-xs mb-3" />
                        <input type="number" name='phone' placeholder="Phone" class="input w-full max-w-xs mb-3" />
                        <br />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;