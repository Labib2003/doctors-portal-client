import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const Login = () => {
    // react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // taking input from user
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // login with email and password
    const handleLogin = (event) => {
        event.preventDefault();
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        console.log(email, password);
    };

    if (error) {
        toast.error(error.message);
    }

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
                            <input ref={emailRef} type="email" class="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text text-sm">Password</span>
                            </label>
                            <input ref={passwordRef} type="password" class="input input-bordered w-full max-w-xs" required/>
                            <label class="label">
                                <span class="label-text-alt text-xs">Forgot Password ?</span>
                            </label>
                        </div>
                        <input type="submit" class="btn w-full btn-accent" value="LOGIN"></input>
                    </form>
                    <p className='text-xs mx-auto'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></p>
                    <div class="divider text-accent">OR</div>
                    <button class="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;