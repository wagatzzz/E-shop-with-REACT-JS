// src/hooks/useAuthForm.js
import { useState } from 'react';

const useAuthForm = (initialFormData, navigate) => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const storedUserData = JSON.parse(sessionStorage.getItem('userData'));
        
        if (storedUserData && storedUserData.email === formData.email) {
            setErrorMessage('User with this email already exists');
            return;
        }

        sessionStorage.setItem('userData', JSON.stringify(formData));
        console.log('Sign up successful');
        navigate('/login');
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        
        if (userData && userData.email === formData.email && userData.password === formData.password) {
            console.log('Login successful');
            navigate('/');
        } else {
            setErrorMessage('Invalid credentials');
        }
    };

    return {
        formData,
        handleChange,
        handleSignUpSubmit,
        handleLoginSubmit,
        errorMessage
    };
};

export default useAuthForm;
