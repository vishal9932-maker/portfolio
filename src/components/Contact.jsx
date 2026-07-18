import React, { useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error for field if inputting new text
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const tempErrors = {};

        if (!formData.name.trim()) {
            tempErrors.name = 'Full name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            tempErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            tempErrors.message = 'Message content is required';
        } else if (formData.message.trim().length < 10) {
            tempErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Simulate API submit delay (1.5s)
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Reset success banner after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Get In Touch</span>
                        <h2 className="section-title">Contact</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                <div className="contact-grid">

                    {/* Left Side: Contact info & Socials */}
                    <Reveal animationType="fade-up" delay={0.2}>
                        <div className="contact-info-panel glass-panel">
                            <h3 className="info-panel-title">Contact Information</h3>
                            <p className="info-panel-desc">
                                Feel free to reach out for internship opportunities, project collaborations, or tech talks. I am available for immediate hire.
                            </p>

                            <div className="info-items">
                                {/* Email Item */}
                                <a href="mailto:vishal9932@mountzion.ac.in" className="info-item-link">
                                    <div className="info-item glass-accent">
                                        <div className="info-icon-wrapper">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="info-text">
                                            <span className="info-label">Email Me</span>
                                            <span className="info-value">vishal9932@mountzion.ac.in</span>
                                        </div>
                                    </div>
                                </a>

                                {/* Phone Item */}
                                <a href="tel:+916385475759" className="info-item-link">
                                    <div className="info-item glass-accent">
                                        <div className="info-icon-wrapper">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="info-text">
                                            <span className="info-label">Call Me</span>
                                            <span className="info-value">+91 6385475759</span>
                                        </div>
                                    </div>
                                </a>

                                {/* Location Item */}
                                <div className="info-item glass-accent">
                                    <div className="info-icon-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="info-text">
                                        <span className="info-label">Base Location</span>
                                        <span className="info-value">Karaikudi, Tamil Nadu, India</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="info-social-block">
                                <span className="social-block-title">Follow My Codes</span>
                                <div className="social-links-row">
                                    <a href="https://github.com/vishal9932" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vishal" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right Side: Form validation */}
                    <Reveal animationType="fade-up" delay={0.3}>
                        <div className="contact-form-panel glass-panel">
                            <h3 className="form-panel-title">Send a Direct Message</h3>

                            {isSubmitted && (
                                <div className="contact-success-banner">
                                    <svg className="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Your message has been successfully broadcast! I will respond shortly.</span>
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="contact-form">

                                {/* Name */}
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                                        placeholder="John Doe"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                                        placeholder="john@example.com"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                                </div>

                                {/* Subject */}
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`form-input ${errors.subject ? 'input-error' : ''}`}
                                        placeholder="Internship opportunity"
                                        disabled={isSubmitting}
                                    />
                                    {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`form-input textarea-input ${errors.message ? 'input-error' : ''}`}
                                        placeholder="Describe your project, terms, and requirements..."
                                        disabled={isSubmitting}
                                    />
                                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary btn-submit"
                                >
                                    {isSubmitting ? (
                                        <div className="submit-spinner-row">
                                            <div className="submitting-spinner"></div>
                                            <span>Broadcasting...</span>
                                        </div>
                                    ) : (
                                        <span>Broadcasting Signal</span>
                                    )}
                                    <span className="btn-glow"></span>
                                </button>

                            </form>
                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}
