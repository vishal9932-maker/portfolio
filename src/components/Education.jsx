import React from 'react';
import Reveal from './Reveal';

export default function Education() {
    const courses = [
        'Object-Oriented Programming',
        'Database Management Systems',
        'Web Application Architecture',
        'Data Structures & Algorithms',
        'Data Analytics & Visualization',
        'Operating Systems & Networks'
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Academic Credentials</span>
                        <h2 className="section-title">Education</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Education Details Card */}
                <div className="education-layout">
                    <Reveal animationType="zoom" delay={0.2}>
                        <div className="education-card glass-panel">
                            <div className="education-glow-overlay"></div>

                            <div className="education-header-block">
                                <div className="edu-icon-bg">
                                    <svg className="edu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>

                                <div className="edu-title-group">
                                    <span className="edu-tag">UNIVERSITY STUDIES</span>
                                    <h3 className="edu-college">Mount Zion College of Engineering and Technology</h3>
                                    <p className="edu-location">Pudukkottai / Karaikudi, Tamil Nadu, India</p>
                                </div>
                            </div>

                            <div className="education-body">
                                <div className="edu-degree-details">
                                    <div className="edu-sub-row">
                                        <span className="edu-degree-label">Degree:</span>
                                        <span className="edu-degree-value">Bachelor of Technology (B.Tech)</span>
                                    </div>

                                    <div className="edu-sub-row">
                                        <span className="edu-degree-label">Major:</span>
                                        <span className="edu-degree-value">Information Technology</span>
                                    </div>

                                    <div className="edu-sub-row">
                                        <span className="edu-degree-label">Academic Status:</span>
                                        <span className="edu-degree-value highlights-tag">3rd Year Student (Fresher)</span>
                                    </div>
                                </div>

                                {/* Relevant Courses */}
                                <div className="edu-courses-block">
                                    <h4 className="courses-title">Relevant Core Knowledge</h4>
                                    <div className="courses-grid">
                                        {courses.map((course) => (
                                            <div key={course} className="course-item">
                                                <svg className="course-check" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span>{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>

            </div>
        </section>
    );
}
