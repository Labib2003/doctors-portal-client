import React, { useEffect, useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
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
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
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
        console.log(email, password);
    };

    // show error message in toast
    if (googleError || error) {
        toast.error(error ? `${error?.message}` : `${googleError?.message}`);
    };

    // navigate to previous page
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            emailRef.current.value = '';
            passwordRef.current.value = '';
        };
    }, [user, googleUser, from, navigate]);

    // send password reset email
    const handlePasswordReset = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        toast.success("Password reset email sent!");
    }

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl mb-9">Login</h2>
                    <form onSubmit={handleLogin} action="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-sm">Email</span>
                            </label>
                            <input ref={emailRef} type="email" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-sm">Password</span>
                            </label>
                            <input ref={passwordRef} type="password" className="input input-bordered w-full max-w-xs" required />
                            <label className="label">
                                <span onClick={handlePasswordReset} className="label-text-alt text-xs">Forgot Password ?</span>
                            </label>
                        </div>
                        <input type="submit" className="btn w-full btn-accent" value="LOGIN"></input>
                    </form>
                    <p className='text-xs mx-auto'>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create new account</Link></p>
                    <div className="divider text-accent">OR</div>
                    <button className="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;