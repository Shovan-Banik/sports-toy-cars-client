import { Link, useNavigate } from 'react-router-dom';
import animation from '../../assets/93385-login.json'
import Lottie from "lottie-react";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
const SignUp = () => {
    const [err,setErr]=useState("");
    const { createUser, profileUpdate,googleSignIn} = useContext(AuthContext);
    const navigate=useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdate(name, photo);
                navigate('/login');
                form.reset();
            })
            .catch(error =>{
                setErr(error.message);
            });
    }

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            const googleLoggedUser=result.user;
            console.log(googleLoggedUser);
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:mt-12">
            <div>
                <Lottie className="h-[500px]" animationData={animation} loop={true} />
            </div>
            <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-blue-800 font-bold my-5">Sign Up Please</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required placeholder="Your Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" required placeholder="Your image" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required placeholder="Your Email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required placeholder="Your Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover">Already have an account? <Link className="font-bold text-blue-800" to='/login'>Login</Link></p>
                                </label>
                                <p className='text-red-500 my-1'>{err}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <div className='mt-2'>
                                <button onClick={handleGoogleLogin} className="btn btn-primary btn-block gap-2">
                                    Sign In with Google<FaGoogle className='text-xl'></FaGoogle>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;