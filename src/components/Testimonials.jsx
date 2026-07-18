import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. A. Ramesh',
            role: 'Head of IT Department',
            organization: 'Mount Zion College of Engg. & Tech.',
            feedback: "Vishal is an exceptionally motivated developer who always goes the extra mile. His Jarvis AI project highlights his capability to merge frontend systems with Python script workflows. His coding layout structures are robust, clean, and highly logical.",
            avatarSeed: 'ramesh'
        },
        {
            name: 'K. Rajesh',
            role: 'Project Collaborator',
            organization: 'B.Tech IT Student Portal',
            feedback: "Working with Vishal on full-stack web modules was seamless. He grasped database synchronization and React state structures quickly, implementing responsive page flows and interactive code bases way ahead of milestones.",
            avatarSeed: 'rajesh'
        },
        {
            name: 'M. Sneha',
            role: 'Co-Founder',
            organization: 'Interior Design Hub Visuals',
            feedback: "Vishal designed our interior agency showcase website. The visual alignments, subtle hover animations, and fast loading performance felt extremely premium. He is a talented frontend developer with a sharp eye for layout aesthetics.",
            avatarSeed: 'sneha'
        }
    ];

    const [activeIdx, setActiveIdx] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setActiveIdx((prevIdx) =>
                    prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
                ),
            6000
        );

        return () => {
            resetTimeout();
        };
    }, [activeIdx, testimonials.length]);

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">What Others Say</span>
                        <h2 className="section-title">Testimonials</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Testimonial Box Slider */}
                <div className="testimonial-slider-container">
                    <Reveal animationType="zoom" delay={0.2}>
                        <div className="testimonial-slide glass-panel">
                            {/* Quote Mark Decoration */}
                            <div className="quote-mark">“</div>

                            <div className="testimonial-content-wrapper">

                                {/* Text feedback */}
                                <p className="testimonial-feedback">
                                    "{testimonials[activeIdx].feedback}"
                                </p>

                                {/* Avatar SVG outline + details */}
                                <div className="testimonial-author-row">
                                    <div className="author-avatar-wrapper">
                                        <svg className="author-avatar-svg" viewBox="0 0 40 40">
                                            <circle cx="20" cy="20" r="19" fill="#111827" stroke="#7C3AED" strokeWidth="1.5" />
                                            {/* Abstract geometric face representing professional avatar */}
                                            <path d="M20 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="#3B82F6" opacity="0.85" />
                                            <path d="M10 32a10 10 0 0 1 20 0z" fill="#7C3AED" opacity="0.75" />
                                        </svg>
                                    </div>

                                    <div className="author-meta">
                                        <h4 className="author-name">{testimonials[activeIdx].name}</h4>
                                        <p className="author-role">{testimonials[activeIdx].role}</p>
                                        <p className="author-org">{testimonials[activeIdx].organization}</p>
                                    </div>
                                </div>

                            </div>

                            {/* Slider Arrow Buttons */}
                            <div className="slider-arrows">
                                <button
                                    onClick={() => {
                                        setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
                                    }}
                                    className="slider-arrow-btn"
                                    aria-label="Previous Testimonial"
                                >
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
                                    }}
                                    className="slider-arrow-btn"
                                    aria-label="Next Testimonial"
                                >
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </Reveal>

                    {/* Dots Indicator */}
                    <div className="testimonial-dots">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`testimonial-dot ${activeIdx === idx ? 'active' : ''}`}
                                onClick={() => setActiveIdx(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
