import React, { useState } from 'react';
import axios from 'axios';
import '../css/newsletter-form.css';

const NewsletterForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
        // author: '',
        // date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/posts', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Log the success response
            console.log('Success:', response.data);

        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }

        // Handle form submission logic here, e.g., send data to server
        console.log('Newsletter data submitted:', formData);
    };

    return (
        <div className="newsletter-form-container">
            <h2>Create a Newsletter</h2>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Newsletter Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    placeholder="Enter the content of the newsletter here..."
                    rows="6"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
                {/* 
                <label htmlFor="author">Author Name:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Author Name"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                /> */}

                <button type="submit" className="submit-button">Save Newsletter</button>
            </form>
        </div>
    );
};

export default NewsletterForm;
