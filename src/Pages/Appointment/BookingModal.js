import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);

    const { _id, name, slots } = treatment;

    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            phone: event.target.phone.value
        }

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success){
                    toast.success(`${name} booked on ${formattedDate} at ${formattedDate}`);
                }
                else{
                    toast.error(`This appointment already booked on ${data.booking?.date} at ${data.booking.slot}`)
                }
                refetch();
                setTreatment(null);
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='text-center' action="">
                        <input type="text" value={format(date, 'PP')} className="input w-full max-w-xs mb-3" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-3">
                            {
                                slots?.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' value={user?.displayName || ''} className="input w-full max-w-xs mb-3" disabled />
                        <input type="email" name='email' value={user?.email || ''} className="input w-full max-w-xs mb-3" disabled />
                        <input type="number" name='phone' placeholder="Phone" className="input w-full max-w-xs mb-3" required/>
                        <br />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;