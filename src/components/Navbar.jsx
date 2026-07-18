import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Modify navbar glass intensity on scroll
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Track active section
            const scrollPosition = window.scrollY + 150; // offset for nav height

            for (let i = 0; i < navLinks.length; i++) {
                const link = navLinks[i];
                const sectionId = link.href.slice(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetHeight = section.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(sectionId);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run initially

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetElement = document.getElementById(targetId.slice(1));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // header height offset
                behavior: 'smooth',
            });
            setActiveTab(targetId.slice(1));
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-logo">
                    VISHAL<span className="dot">.</span>
                </a>

                {/* Desktop Links */}
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`nav-link ${activeTab === link.href.slice(1) ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Toggle */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-menu-list">
                    {navLinks.map((link, idx) => (
                        <li
                            key={link.name}
                            className="mobile-nav-item"
                            style={{ transitionDelay: `${idx * 0.07}s` }}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`mobile-nav-link ${activeTab === link.href.slice(1) ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
