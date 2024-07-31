// src/pages/SignUp.js
import React from "react";
import Layout from "../components/layout/Layout";
import { Link, useNavigate } from 'react-router-dom';
import useAuthForm from "../hooks/useAuthForm";

function SignUp() {
    const navigate = useNavigate();
    const { formData, handleChange, handleSignUpSubmit, errorMessage } = useAuthForm({
        name: '',
        email: '',
        password: ''
    }, navigate);

    return (
        <Layout>
            <section className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">SignUp</h2>
                    <form onSubmit={handleSignUpSubmit}>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="terms" name="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm text-gray-700">I accept the terms of privacy policy</label>
                        </div>
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow-md">SignUp</button>
                    </form>
                    <p className="text-sm mt-4">
                        Already have an account?
                        <Link to="/login" className="text-orange-500 hover:border-b border-transparent hover:border-red-300">Login</Link>
                    </p>
                </div>
            </section>
        </Layout>
    );
}

export default SignUp;
