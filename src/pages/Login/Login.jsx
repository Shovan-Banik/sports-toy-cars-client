import Lottie from "lottie-react";
import animation from '../../assets/68312-login.json'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const{signIn,googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogIn=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/');
        })
        .then(error=>console.log(error))
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
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:mt-12">
            <div>
                <Lottie className="h-[500px]" animationData={animation} loop={true} />
            </div>
            <div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-3xl text-center text-blue-800 font-bold my-5">Login Please</h2>
                        <form onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover">Do not have an account? <Link className="font-bold text-blue-800" to='/signUp'>SignUp now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='mt-2'>
                                <button onClick={handleGoogleLogin} className="btn btn-primary btn-block gap-2">
                                    Sign In with Google<FaGoogle className="text-xl"></FaGoogle>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;