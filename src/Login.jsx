import React, { useState } from "react";
import Layout from "./Layout";
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
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
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        if (userData && userData.email === formData.email && userData.password === formData.password) {
            
            console.log('Login successful');
        } else {
            
            console.log('Invalid credentials');
        }
    };

    return (
        <Layout>
            <section className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                        </div>
                        <Link to="/">
                            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow-md">Login</button>
                        </Link>
                    </form>
                    <p className="text-sm mt-4">
                        Don't have an account?
                        <Link to="/signup" className="text-orange-500 hover:border-b border-transparent hover:border-red-300">Sign up</Link>
                    </p>
                </div>
            </section>
        </Layout>
    );
}

export default Login;
