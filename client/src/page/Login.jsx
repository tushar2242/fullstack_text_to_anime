import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = () => {
    const { handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginComp />
        </form>
    );
};

function LoginComp() {
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
                    <label className="mr-1">Sign in</label>
                </div>
                {/* Inputs */}
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
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
                {/* Forgot password */}
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <span></span>
                    </label>
                    <a
                        className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                {/* Submit button */}
                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                {/* Register link */}
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don't have an account?{' '}
                    <a
                        className="text-red-600 hover:underline hover:underline-offset-4"
                        href="/signup"
                    >
                        Register
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Login;
