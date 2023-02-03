import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextStudent } from '../../ContextProvider/ContextProvider';


const Login = () => {
    const { userLogin } = useContext(ContextStudent);
    const navigate = useNavigate();

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => {
                navigate('/managestudent')
            })
            .catch(error => console.log(error))
    };
    // user register for this website 

    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='text-3xl text-center font-semibold'>Lgoin</p>
                        <form onSubmit={event => handelRegister(event)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;