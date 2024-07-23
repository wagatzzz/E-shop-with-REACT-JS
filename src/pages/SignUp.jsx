import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('userData', JSON.stringify(formData));
        
    };

    return (
        <Layout>
            <section className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">SignUp</h2>
                    <form onSubmit={handleSubmit}>
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
                        <Link to="/login">
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow-md">SignUp</button>
                        </Link>

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
