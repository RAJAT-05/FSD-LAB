// src/UserDataForm.js
import React, { useState } from 'react';

const UserDataForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setEmptyFields(emptyFields.filter(field => field !== name)); // Clear empty field error
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = formData;
        const newErrors = {};
        const newEmptyFields = [];

        if (!name) {
            newEmptyFields.push('name');
        }
        if (!email) {
            newEmptyFields.push('email');
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format.';
        }

        if (newErrors.email || newEmptyFields.length) {
            setErrors(newErrors);
            setEmptyFields(newEmptyFields);
            setSuccessMessage(''); // Clear success message
        } else {
            setSuccessMessage('Form submitted successfully!');
            setErrors({});
            setEmptyFields([]);
            setFormData({ name: '', email: '' }); // Reset form
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                            borderColor: emptyFields.includes('name') ? 'red' : '',
                        }}
                    />
                </label>
                {emptyFields.includes('name') && <span style={{ color: 'red' }}>This field is required</span>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            borderColor: errors.email ? 'red' : emptyFields.includes('email') ? 'red' : '',
                        }}
                    />
                </label>
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                {emptyFields.includes('email') && <span style={{ color: 'red' }}>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        </form>
    );
};

export default UserDataForm;
