import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';

export default function Hero() {
    const titles = ['Frontend Developer', 'Full Stack Developer', 'Data Analyst'];
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typedText, setTypedText] = useState('');

    // Typing effect logic
    useEffect(() => {
        const currentTitle = titles[titleIndex];
        let timer;

        if (isDeleting) {
            // Speed of backspacing
            timer = setTimeout(() => {
                setTypedText(currentTitle.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, 50);
        } else {
            // Speed of typing
            timer = setTimeout(() => {
                setTypedText(currentTitle.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, 100);
        }

        // Wait at the end of typing
        if (!isDeleting && charIndex === currentTitle.length) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        }
        // Start next word after deleting
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex]);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 85,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero-section">
            {/* Floating Cybernetic Tech-Shapes in Background */}
            <div className="cyber-glitch-grids"></div>
            <div className="floating-shape shape-glow-purple"></div>
            <div className="floating-shape shape-glow-blue"></div>

            <div className="hero-container">

                {/* Left Side Info */}
                <div className="hero-info">
                    <Reveal animationType="fade-up" delay={0.1}>
                        <span className="hero-salutation">Hello, I'm</span>
                    </Reveal>

                    <Reveal animationType="fade-up" delay={0.2}>
                        <h1 className="hero-name">
                            VISHAL<span className="gradient-glow">.</span>
                        </h1>
                    </Reveal>

                    {/* Typing Animation */}
                    <Reveal animationType="fade-up" delay={0.3}>
                        <div className="hero-title-wrapper">
                            <span className="title-static">I am a </span>
                            <span className="title-typed">{typedText}</span>
                            <span className="cursor-blink">|</span>
                        </div>
                    </Reveal>

                    <Reveal animationType="fade-up" delay={0.4}>
                        <p className="hero-tagline">
                            "I build modern, responsive, and intelligent web applications that combine clean design with powerful functionality."
                        </p>
                    </Reveal>

                    {/* CTA Buttons */}
                    <Reveal animationType="fade-up" delay={0.5}>
                        <div className="hero-ctas">
                            <button
                                onClick={() => handleScrollTo('projects')}
                                className="btn btn-primary"
                            >
                                View Projects
                                <span className="btn-glow"></span>
                            </button>

                            <a
                                href="Vishal_Resume.pdf"
                                download="Vishal_Resume.pdf"
                                className="btn btn-secondary"
                                onClick={(e) => {
                                    // Fallback if file doesn't exist yet, show resume in prompt/pop
                                    e.preventDefault();
                                    alert('Resume download started! (Generating a dynamic PDF format text outline of Vishal\'s profile)');
                                    // We will create the resume download file dynamically or standard text blob!
                                    const resumeContent = `VISHAL\nFrontend Developer | Full Stack Developer | Data Analyst\nPhone: +91 6385475759  Email: vishal9932@mountzion.ac.in\nKaraikudi, Tamil Nadu, India\nGitHub: github.com/vishal9932\n\nCAREER OBJECTIVE\nCurrently pursuing B.Tech in Information Technology and seeking opportunities to apply my frontend, full-stack development, and data analytics skills in real-world projects. Passionate about learning new technologies and building impactful software.\n\nEDUCATION\nMount Zion College of Engineering and Technology\nBachelor of Technology (Information Technology), 3rd Year Student.\n\nTECHNICAL SKILLS\n- Frontend: HTML5, CSS3, JavaScript, React.js\n- Backend: Node.js, Express.js\n- Databases: MySQL, MongoDB\n- Programming: Python\n- Data Analytics: Python, Excel, Data Visualization\n- Tools: Git, GitHub, VS Code\n\nPROJECTS\n1. VR Music: Stream music online, responsive player, intuitive playlists.\n2. Interior Website: Sleek design layout for home interiors and room configurations.\n3. Jarvis AI: Voice assistant executing tasks and displaying futuristic UI elements.\n\nSERVICES\n- Frontend Development & React.js Development\n- Full Stack Development\n- Responsive Web Design\n- UI Development\n- Data Analysis & Website Optimization`;

                                    const blob = new Blob([resumeContent], { type: 'text/plain' });
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = 'Vishal_Resume.txt';
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    URL.revokeObjectURL(url);
                                }}
                            >
                                Download Resume
                            </a>

                            <button
                                onClick={() => handleScrollTo('contact')}
                                className="btn btn-accent"
                            >
                                Contact Me
                            </button>
                        </div>
                    </Reveal>

                    {/* Social Icons with animated SVGs */}
                    <Reveal animationType="fade-up" delay={0.6}>
                        <div className="hero-socials">
                            <a href="https://github.com/vishal9932" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/vishal" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="mailto:vishal9932@mountzion.ac.in" aria-label="Email">
                                <svg className="social-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Right Side Futuristic CSS/SVG Reactor Core Profile Image */}
                <div className="hero-visual">
                    <Reveal animationType="zoom" delay={0.3}>
                        <div className="tech-core-avatar">
                            <div className="avatar-ring-outer"></div>
                            <div className="avatar-ring-middle"></div>
                            <div className="avatar-ring-inner"></div>

                            <div className="avatar-container" style={{ position: 'relative', overflow: 'hidden' }}>
                                {/* Profile image */}
                                <img
                                    src="profile.jpeg"
                                    alt="Vishal"
                                    className="hero-avatar-image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 1,
                                        transition: 'filter 0.5s ease'
                                    }}
                                />

                                {/* Futuristic HUD scanner lines and hex overlay */}
                                <div className="hud-scanline" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(124, 58, 237, 0.8), rgba(59, 130, 246, 0.5), transparent)',
                                    zIndex: 2,
                                    animation: 'scanLineMove 4s linear infinite',
                                    pointerEvents: 'none'
                                }}></div>

                                <svg className="core-svg" viewBox="0 0 100 100" style={{ zIndex: 3, position: 'relative', pointerEvents: 'none' }}>
                                    <defs>
                                        <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                                        </linearGradient>
                                    </defs>

                                    {/* Glowing hexagonal grid overlay */}
                                    <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="url(#coreGlow)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />

                                    {/* Outer circle of nodes */}
                                    <circle cx="50" cy="15" r="2.5" fill="#3B82F6" className="pulsing-node" />
                                    <circle cx="80" cy="32" r="2" fill="#7C3AED" />
                                    <circle cx="80" cy="68" r="2" fill="#3B82F6" />
                                    <circle cx="50" cy="85" r="2.5" fill="#7C3AED" className="pulsing-node" />
                                    <circle cx="20" cy="68" r="2" fill="#3B82F6" />
                                    <circle cx="20" cy="32" r="2" fill="#7C3AED" />

                                    {/* Semi-transparent center ring overlay */}
                                    <circle cx="50" cy="50" r="32" fill="none" stroke="url(#coreGlow)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />

                                    {/* Futuristic line indicators */}
                                    <line x1="50" y1="18" x2="50" y2="30" stroke="#7C3AED" strokeWidth="0.8" opacity="0.6" />
                                    <line x1="77" y1="34" x2="68" y2="40" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />
                                    <line x1="77" y1="66" x2="68" y2="60" stroke="#7C3AED" strokeWidth="0.8" opacity="0.6" />
                                    <line x1="50" y1="82" x2="50" y2="70" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />
                                    <line x1="23" y1="66" x2="32" y2="60" stroke="#7C3AED" strokeWidth="0.8" opacity="0.6" />
                                    <line x1="23" y1="34" x2="32" y2="40" stroke="#3B82F6" strokeWidth="0.8" opacity="0.6" />

                                    {/* Code-style floating indicators */}
                                    <path d="M 33 22 L 39 12 L 49 12" fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0.7" />
                                    <path d="M 67 22 L 61 12 L 51 12" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.7" />
                                </svg>

                                {/* Tech labeling */}
                                <div className="tech-badge badge-top" style={{ zIndex: 4 }}>VISHAL</div>
                                <div className="tech-badge badge-bottom" style={{ zIndex: 4 }}>SYS_ACTIVE</div>
                            </div>
                        </div>
                    </Reveal>
                </div>

            </div>

            {/* Mouse scroll indicator */}
            <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="scroll-text">SCROLL TO EXPLORE</span>
            </div>
        </section>
    );
}
