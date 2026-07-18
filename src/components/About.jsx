import React, { useEffect, useState, useRef } from 'react';
import Reveal from './Reveal';

// Custom Counter component to animate number counting
function Counter({ targetValue, duration = 1500, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        // Calculate increment speed based on duration
        const increment = targetValue / (duration / 16); // 16ms per frame (~60fps)

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                setCount(targetValue);
                clearInterval(interval);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [hasStarted, targetValue, duration]);

    return (
        <span ref={ref} className="stat-number">
            {count}{suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Get To Know Me</span>
                        <h2 className="section-title">About Me</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                <div className="about-content-grid">
                    {/* Text Summary */}
                    <div className="about-text-content">
                        <Reveal animationType="fade-up" delay={0.2}>
                            <h3 className="about-greeting">
                                Building the future with <span className="gradient-glow">Code</span> & <span className="gradient-glow">Data</span>.
                            </h3>
                        </Reveal>

                        <Reveal animationType="fade-up" delay={0.3}>
                            <p className="about-description">
                                I am <strong>Vishal</strong>, a passionate Frontend Developer, Full Stack Developer, and aspiring Data Analyst.
                                I enjoy building responsive websites, interactive web applications, and AI-powered projects using modern web technologies.
                            </p>
                            <p className="about-description">
                                Currently, I am a third-year <strong>B.Tech Information Technology</strong> student at <strong>Mount Zion College of Engineering and Technology</strong>.
                                As a fresher, I continuously improve my programming and problem-solving skills by creating real-world projects,
                                optimizing systems, and exploring data trends.
                            </p>
                        </Reveal>

                        <Reveal animationType="fade-up" delay={0.4}>
                            <div className="about-details-table">
                                <div className="detail-item">
                                    <span className="detail-label">Location:</span>
                                    <span className="detail-val">Karaikudi, Tamil Nadu, India</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Email:</span>
                                    <a href="mailto:vishal9932@mountzion.ac.in" className="detail-val hover-link">
                                        vishal9932@mountzion.ac.in
                                    </a>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Phone:</span>
                                    <a href="tel:+916385475759" className="detail-val hover-link">
                                        +91 6385475759
                                    </a>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Education:</span>
                                    <span className="detail-val">B.Tech IT (3rd Year)</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Cards & Stats */}
                    <div className="about-stats-grid">

                        {/* Stat Card 1 */}
                        <Reveal animationType="fade-up" delay={0.1}>
                            <div className="stat-card glass-panel">
                                <div className="stat-icon-wrapper purple">
                                    <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-number">Fresher</span>
                                    <span className="stat-label">Developer</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Stat Card 2 */}
                        <Reveal animationType="fade-up" delay={0.2}>
                            <div className="stat-card glass-panel">
                                <div className="stat-icon-wrapper blue">
                                    <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <Counter targetValue={3} suffix="+" />
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Stat Card 3 */}
                        <Reveal animationType="fade-up" delay={0.3}>
                            <div className="stat-card glass-panel">
                                <div className="stat-icon-wrapper purple">
                                    <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <span className="stat-number">B.Tech</span>
                                    <span className="stat-label">IT Student (3rd Year)</span>
                                </div>
                            </div>
                        </Reveal>

                        {/* Stat Card 4 */}
                        <Reveal animationType="fade-up" delay={0.4}>
                            <div className="stat-card glass-panel">
                                <div className="stat-icon-wrapper blue">
                                    <svg className="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="stat-info">
                                    <Counter targetValue={100} suffix="%" />
                                    <span className="stat-label">Passionate Learner</span>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>

            </div>
        </section>
    );
}
