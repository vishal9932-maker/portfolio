import React from 'react';
import Reveal from './Reveal';

// Import images from assets/projects
import musicImg from '../assets/projects/music website.png';
import interiorImg from '../assets/projects/interior work.png';
import jarvisImg from '../assets/projects/jarvis ai.png';

export default function Projects() {
    const projectsData = [
        {
            title: 'VR Music',
            description: 'A modern music streaming website featuring a clean user interface, responsive design, playlists, and an engaging music experience.',
            technology: ['HTML', 'CSS', 'JavaScript', 'React'],
            image: musicImg,
            liveLink: 'https://github.com/vishal9932', // Mock link or relative action
            codeLink: 'https://github.com/vishal9932',
            glowColor: 'purple'
        },
        {
            title: 'Interior Website',
            description: 'A stylish home interior website showcasing furniture, room designs, modern layouts, image galleries, and responsive pages.',
            technology: ['HTML', 'CSS', 'JavaScript', 'React'],
            image: interiorImg,
            liveLink: 'https://github.com/vishal9932',
            codeLink: 'https://github.com/vishal9932',
            glowColor: 'blue'
        },
        {
            title: 'Jarvis AI',
            description: "An AI assistant inspired by Iron Man's Jarvis that performs voice-based interactions, automates simple tasks, and demonstrates AI concepts with a futuristic interface.",
            technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
            image: jarvisImg,
            liveLink: 'https://github.com/vishal9932',
            codeLink: 'https://github.com/vishal9932',
            glowColor: 'purple'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">Scope Of My Work</span>
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projectsData.map((project, idx) => (
                        <Reveal
                            key={project.title}
                            animationType="fade-up"
                            delay={0.2 * (idx + 1)}
                        >
                            <div className={`project-card glass-panel glow-${project.glowColor}`}>

                                {/* Visual Image container with zoom overlay */}
                                <div className="project-img-container">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Preview`}
                                        className="project-image"
                                        loading="lazy"
                                    />
                                    <div className="project-image-overlay">
                                        <span className="overlay-tech-count">{project.technology.length} Tech Stack</span>
                                    </div>
                                </div>

                                {/* Details block */}
                                <div className="project-details">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    {/* Tech stack items tags */}
                                    <div className="project-tech-tags">
                                        {project.technology.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="project-actions">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-project btn-project-primary"
                                        >
                                            Live Demo
                                            <svg className="btn-project-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>

                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-project btn-project-secondary"
                                        >
                                            GitHub
                                            <svg className="btn-project-icon-github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
