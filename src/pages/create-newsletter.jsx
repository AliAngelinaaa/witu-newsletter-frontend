import React, { useState } from 'react';
import './newsletter-form.css';

const NewsletterForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    name="body"
                    placeholder="Enter the content of the newsletter here..."
                    rows="6"
                    value={formData.body}
                    onChange={handleChange}
                    required
                />

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
                />

                <button type="submit" className="submit-button">Publish Newsletter</button>
            </form>
        </div>
    );
};

export default NewsletterForm;
