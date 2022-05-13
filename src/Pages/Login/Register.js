import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    // react firebase hooks
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verficationError] = useSendEmailVerification(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // taking user input
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // create user with email and password
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification()
        toast.success("Check your inbox to verify your email.");
        navigate("/appointment")
        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    // show error message in toast
    if (googleError || error) {
        toast.error(error ? `${error?.message}` : `${googleError?.message}`);
    };

    // navigate to previous page
    if (user || googleUser) {
        navigate(from, { replace: true });
    };

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl mb-9">Register</h2>
                    <form onSubmit={handleRegister} action="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-sm">Name</span>
                            </label>
                            <input ref={nameRef} type="text" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-sm">Email</span>
                            </label>
                            <input ref={emailRef} type="email" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-sm">Password</span>
                            </label>
                            <input ref={passwordRef} type="password" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <input type="submit" className="btn w-full btn-accent" value="REGISTER"></input>
                    </form>
                    <p className='text-xs mx-auto'>Already have an account <Link to='/login' className='text-secondary'>Login</Link></p>
                    <div className="divider text-accent">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;