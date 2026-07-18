import React from 'react';
import Reveal from './Reveal';

export default function Services() {
    const serviceList = [
        {
            title: 'Frontend Development',
            desc: 'Creating interactive, accessible client-side UI structures with fast load-times and modular components utilizing semantic HTML & custom CSS.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: 'Full Stack Development',
            desc: 'Developing server scripts (Node.js, Express) and tying them securely to relational or document-based databases (MySQL, MongoDB).',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
        {
            title: 'React.js Development',
            desc: 'Structuring single-page apps (SPA) with reusable components, context API loaders, state hooks, and smooth animation hooks.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'Responsive Web Design',
            desc: 'Crafting pixel-perfect designs catering dynamically to Desktop, Tablet, and Mobile layouts ensuring a unified across-device feel.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: 'UI Development',
            desc: 'Designing custom animations, hover state transformations, clean neon glowing badges, and custom aesthetic color palettes.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" />
                </svg>
            )
        },
        {
            title: 'Data Analysis',
            desc: 'Wrangling data with Python and Excel, aggregating patterns, rendering visualizations, and formulating intelligence pipelines.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            )
        },
        {
            title: 'Website Optimization',
            desc: 'Speeding up site renders using lazy-loading assets, clean conditional DOM trees, and efficient asynchronous Javascript scripts.',
            icon: (
                <svg className="service-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">

                {/* Section Title */}
                <Reveal animationType="fade-up">
                    <div className="section-header">
                        <span className="section-subtitle">What I Provide</span>
                        <h2 className="section-title">My Services</h2>
                        <div className="title-bar"></div>
                    </div>
                </Reveal>

                {/* Services Grid */}
                <div className="services-grid">
                    {serviceList.map((service, idx) => (
                        <Reveal
                            key={service.title}
                            animationType="fade-up"
                            delay={0.1 * (idx + 1)}
                        >
                            <div className="service-card glass-panel">
                                <div className="service-card-glow"></div>
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-desc">{service.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
