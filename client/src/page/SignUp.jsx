import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

const Signup = () => {
    const { handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SignupComp />
        </form>
    );
};

function SignupComp() {
    return (
        <section className="h-100 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center md:text-left">
                    <label className="mr-1">Sign up</label>
                </div>
                {/* Inputs */}
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="text"
                    placeholder="Email Address"
                    name="email"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                {/* Submit button */}
                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Sign up
                    </button>
                </div>
                {/* Login link */}
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account?{' '}
                    <a
                        className="text-blue-600 hover:underline hover:underline-offset-4"
                        href="/login"
                    >
                        Login
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Signup;
