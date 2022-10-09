import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading';
import styles from '../../../style';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user || guser) {
        navigate('/dashboard');
    }

    if (loading || gloading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password)
    };

    const handleSignInGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className='flex justify-center mt-8 mb-8 ml-3 mr-3'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <h1 className='text-3xl text-center mt-4 mb-0 text-accent'>Login</h1>
                    <div className="card-body pt-4 pb-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered input-accent bg-white"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                            message: 'Provide a proper email address'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered input-accent bg-white"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: 'Provide a proper Password'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                </label>
                                <label className="label text-secondary">
                                    <a href="#" className="label-text-alt link link-hover link-accent">Forgot password?</a>
                                </label>
                            </div>
                            {error && <label className="label text-error">
                                <small>{error?.message.split('/')[1].slice(0,-2)}</small>
                            </label>}
                            {gerror && <label className="label text-error">
                                <small>{gerror?.message.split('/')[1].slice(0,-2)}</small>
                            </label>}
                            <input className="btn btn-accent w-full" type="submit" value='Login' />
                        </form>
                        <div className='flex items-center'>
                            <label className="label">
                                <small>Don't have an account?</small>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover link-accent">Register now</Link>
                            </label>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={handleSignInGoogle} className="btn btn-accent">sign in with Google</button>
                    </div>
                </div>


            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
    </div>
        </div>

    );
};

export default Login;