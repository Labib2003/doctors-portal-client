import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='flex justify-center h-screen items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-xl mb-9">Login</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-sm">Email</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-sm">Password</span>
                        </label>
                        <input type="text" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text-alt text-xs">Forgot Password ?</span>
                        </label>
                    </div>
                    <button class="btn w-full btn-accent">LOGIN</button>
                    <p className='text-xs mx-auto'>New to Doctors Portal? <span className='text-secondary'>Create new account</span></p>
                    <div class="divider text-accent">OR</div>
                    <button class="btn btn-outline btn-accent" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;