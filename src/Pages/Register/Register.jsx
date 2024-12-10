import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const handleSignup = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,address,mobile,email,password}
        console.log(user);

        //password validation
        const passwordValidation = /^(?=.*[A-Z])(?=.*\W).{6,}$/ ;
        
        if(!passwordValidation.test(password)){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: 'Password must be at least 6 characters long, contain a capital letter, and a special character.'
            }) 
            return;
        }

    }
    return (
        <div className='bg-cover bg-center min-h-screen '>

           

            
            {/* Register form */}
            <div className="hero min-h-screen justify-center ">
                <div className="hero-content flex-col lg:flex-row-reverse w-[450px]  ">
                    
                    <div className="card shrink-0 w-full shadow-2xl text-left bg-gray-300">
                        <form onSubmit={handleSignup} className="card-body">
                            <h1 className='text-xl text-center font-semibold'> Registration Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name"   
                                name='name'
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Your address" 
                                name='address' 
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="Your Photo URL" 
                                name='mobile'
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" 
                                name='email' 
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" 
                                name='password'
                                className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <label className="label">
                                <p className='text-center'>
                                    <NavLink to='/login'  >Click here to <span className='text-blue-800 font-semibold '> Log in</span> </NavLink></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;