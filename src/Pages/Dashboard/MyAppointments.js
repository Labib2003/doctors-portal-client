import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user, navigate])

    return (
        <div>
            <div className='flex justify-between place-items-center mb-6'>
                <h3 className='text-2xl'>My Appointment</h3>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn m-1">Click</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            {
                appointments ?
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Service</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map(appointment => 
                                    <tr key={appointment.treatmentId}>
                                        <td>{appointment.treatmentId}</td>
                                        <td>{appointment.treatment}</td>
                                        <td>{appointment.slot}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <p className='text-xl text-center'>You currently don't have any appointments booked.</p>
            }
        </div>
    );
};

export default MyAppointments;