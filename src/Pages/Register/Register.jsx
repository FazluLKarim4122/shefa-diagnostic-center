import React from 'react';

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

    }
    return (
        <div className='bg-cover bg-center min-h-screen '>

           

            <h1 className="text-center text-4xl font-bold text-white">Welcome to AnandaPath School Library</h1>
            {/* Register form */}
            <div className="hero min-h-screen justify-start ">
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