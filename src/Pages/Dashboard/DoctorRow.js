import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { photo, name, email, specialty } = doctor;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    toast.success(`${name} has been kicked out!`);
                }
                refetch();
            });
    }
    return (
        <tr>
            <th>{index}</th>
            <td><div class="w-24 mask mask-squircle">
                <img src={photo} alt='' />
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td><button onClick={handleDelete} class="btn btn-error">Fire</button></td>
        </tr>
    );
};

export default DoctorRow;