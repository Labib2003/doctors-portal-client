import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const specialtyRef = useRef('');
    const [file, setFile] = useState(null);

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    if (isLoading) {
        return <p>loading</p>
    };

    const imageUploadKey = '52b25cc66b653310b4988cf928127f65';

    const handleAddDoctor = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        fetch(`https://api.imgbb.com/1/upload?key=${imageUploadKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const newDoctor = {
                        name: nameRef.current.value,
                        email: emailRef.current.value,
                        photo: img,
                        specialty: specialtyRef.current.value
                    };
                    // send data to db
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newDoctor)
                    })
                        .then(res => res.json())
                        .then(message => {
                            console.log(message);
                            if(message.insertedId){
                                toast.success("Doctor successfully added!");
                                nameRef.current.value = '';
                                emailRef.current.value = '';
                                setFile(null);
                            }
                        });
                }
            });
    }

    return (
        <div>
            <h1>This is add doctor</h1>
            <form onSubmit={handleAddDoctor} action="">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-sm">Name</span>
                    </label>
                    <input ref={nameRef} type="text" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-sm">Email</span>
                    </label>
                    <input ref={emailRef} type="email" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text text-sm">Specialty</span>
                    </label>
                    <select ref={specialtyRef} class="select w-full max-w-xs">
                        {
                            services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text text-sm">Photo</span>
                    </label>
                    <input type="file" onChange={e => {
                        setFile(e.target.files[0]);
                    }} required />
                </div>
                <input type="submit" className="btn w-full btn-accent" value="Add Doctor"></input>
            </form>
        </div>
    );
};

export default AddDoctor;