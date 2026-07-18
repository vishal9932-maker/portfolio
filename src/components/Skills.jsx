import React, { useEffect, useState, useRef } from 'react';
import Reveal from './Reveal';

function SkillBar({ name, level }) {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add a small delay for aesthetic entry
                    setTimeout(() => {
                        setWidth(level);
                    }, 200);
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
    }, [level]);

    return (
        <div ref={ref} className="skill-bar-wrapper">
            <div className="skill-bar-info">
                <span className="skill-bar-name">{name}</span>
                <span className="skill-bar-percent">{level}%</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{
                        width: `${width}%`,
                        transition: 'width 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)'
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Development',
            iconUrl: (
                <svg className="skill-cat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: 'HTML5', level: 95 },
                { name: 'CSS3', level: 90 },
                { name: 'JavaScript (ES6+)', level: 88 },
                { name: 'React.js', level: 85 },
            ],
        },
        {
            title: 'Backend & Databases',
            iconUrl: (
                <svg className="skill-cat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: [
                { name: 'Node.js', level: 78 },
                { name: 'Express.js', level: 80 },
                { name: 'MySQL', level: 82 },
                { name: 'MongoDB', level: 75 },
            ],
        },
        {
            title: 'Programming & Analytics',
            iconUrl: (
                <svg className="skill-cat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            skills: [
                { name: 'Python', level: 85 },
                { name: 'Data Visualization', level: 80 },
                { name: 'Excel / Data Wrangling', level: 90 },
            ],
        },
        {
            title: 'Developer Tools',
            iconUrl: (
                <svg className="skill-cat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            skills: [
                { name: 'Git & GitHub', level: 88 },
                { name: 'VS Code', level: 92 },
                { name: 'Responsive Web Design', level: 90 },
            ],
        },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">What I Excel In</span>
                        <h2 className="section-title">My Skills</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Skill Cards Grid */}
                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <Reveal
                            key={category.title}
                            animationType="fade-up"
                            delay={0.1 * (idx + 1)}
                        >
                            <div className="skill-card glass-panel">
                                <div className="skill-card-header">
                                    <div className="skill-card-icon-bg">
                                        {category.iconUrl}
                                    </div>
                                    <h3 className="skill-card-title">{category.title}</h3>
                                </div>

                                <div className="skill-list">
                                    {category.skills.map((skill) => (
                                        <SkillBar
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
