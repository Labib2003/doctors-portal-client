import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    // react firebase hooks
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // taking input from user
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // login with email and password
    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        emailRef.current.value = '';
        passwordRef.current.value = '';
        console.log(email, password);
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
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-xl mb-9">Login</h2>
                    <form onSubmit={handleLogin} action="">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-sm">Email</span>
                            </label>
                            <input ref={emailRef} type="email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-sm">Password</span>
                            </label>
                            <input ref={passwordRef} type="password" class="input input-bordered w-full max-w-xs" required />
                            <label class="label">
                                <span class="label-text-alt text-xs">Forgot Password ?</span>
                            </label>
                        </div>
                        <input type="submit" class="btn w-full btn-accent" value="LOGIN"></input>
                    </form>
                    <p className='text-xs mx-auto'>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create new account</Link></p>
                    <div class="divider text-accent">OR</div>
                    <button class="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;