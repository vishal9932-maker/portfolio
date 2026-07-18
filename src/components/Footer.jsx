import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
            if (window.scrollY > 400) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        window.addEventListener('scroll', checkScrollHeight);
        return () => window.removeEventListener('scroll', checkScrollHeight);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
    };

    const quickLinks = [
        { name: 'Home', target: 'home' },
        { name: 'About', target: 'about' },
        { name: 'Skills', target: 'skills' },
        { name: 'Projects', target: 'projects' },
        { name: 'Education', target: 'education' },
        { name: 'Services', target: 'services' },
        { name: 'Contact', target: 'contact' },
    ];

    return (
        <footer className="footer-panel">
            <div className="container">

                <div className="footer-top-grid">
                    {/* Brand Info */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">
                            VISHAL<span className="dot">.</span>
                        </h3>
                        <p className="footer-brand-desc">
                            Frontend Developer | Full Stack Developer | Data Analyst
                        </p>
                        <p className="footer-brand-location">
                            Based in Tamil Nadu, India. Creating premium digital experiences.
                        </p>
                    </div>

                    {/* Site Navigation Links */}
                    <div className="footer-links-wrapper">
                        <h4 className="footer-header">Quick Navigation</h4>
                        <ul className="footer-links-grid">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={`#${link.target}`}
                                        onClick={(e) => handleLinkClick(e, link.target)}
                                        className="footer-nav-link"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social connections */}
                    <div className="footer-social-block">
                        <h4 className="footer-header">Channels</h4>
                        <div className="footer-social-row">
                            <a href="https://github.com/vishal9932" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/vishal" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="mailto:vishal9932@mountzion.ac.in" aria-label="Email">
                                <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-bottom-row">
                    <p className="footer-copy">
                        &copy; 2026 Vishal. All Rights Reserved. Coded with Passion in India.
                    </p>
                    <p className="footer-frameworks-tag">
                        Powered by React.js & Pure CSS
                    </p>
                </div>

            </div>

            {/* Floating Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`back-to-top-btn ${showScrollBtn ? 'visible' : ''}`}
                aria-label="Back to Top"
            >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </footer>
    );
}
