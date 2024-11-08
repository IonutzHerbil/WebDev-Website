import React, { useState } from 'react';
import axios from 'axios';
import "./JoinUs.css";

function JoinUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        programmingLanguages: ''.
    });
    const [responseMessage, setResponseMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://localhost:3000/form-data', formData);
            setResponseMessage(response.data.message); // Show success message from the backend
            setFormData({ name: '', email: '', message: '', programmingLanguages: '' }); // Clear form fields
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Failed to submit the form';
            setResponseMessage(errorMsg); // Show error message from backend or default error
            console.error('Form submission error:', error);
        }
    };

    return (
        <div>
            <h1>Submit Your Information</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />

                <label>
                    Tell us something about yourself:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />

                <label>
                    Known programming languages:
                    <textarea
                        name="message"
                        value={formData.programmingLanguages}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br /><br />

                <button type="submit">Submit</button>
                <h2>{responseMessage}</h2>

            </form>

        </div>
    );
}

export default JoinUs;
