import React, { useState } from 'react';
import Reveal from './Reveal';

const certificates = [
    {
        id: 1,
        title: 'Modern Web Development & Responsive Design',
        issuer: 'HCL / GUVI Certification',
        date: 'March 7, 2026',
        type: 'image',
        src: '/certificate/guvi_web_dev.png',
        color: '#E34F26',
        badge: 'Frontend Development',
        credentialId: '127892d7BYf108V1sw',
        desc: 'Validated core competencies in HTML5, CSS3, layout structures, and building responsive client-facing web architectures.'
    },
    {
        id: 2,
        title: 'Full Stack Product Engineering & Flows',
        issuer: 'HCL / GUVI Certification',
        date: 'March 22, 2026',
        type: 'image',
        src: '/certificate/guvi_full_stack.png',
        color: '#00d2ff',
        badge: 'Full Stack Engineering',
        credentialId: '71etRDc19L141772uX',
        desc: 'Covered backend design patterns, application routing, full stack logic consolidation, and deployment lifecycles.'
    },
    {
        id: 3,
        title: 'Core Programming & Computational Logic',
        issuer: 'HCL / GUVI Certification',
        date: 'February 21, 2026',
        type: 'image',
        src: '/certificate/guvi_programming.png',
        color: '#FFE052',
        badge: 'Core Programming',
        credentialId: '715UmN91g',
        desc: 'Certified prowess in scripting, algorithmic logic flow, complexity optimization, and data collection structures.'
    },
    {
        id: 4,
        title: 'Critical Thinking in the AI Era',
        issuer: 'HP LIFE Foundation',
        date: 'January 28, 2026',
        type: 'image',
        src: '/certificate/hp_critical_thinking.png',
        color: '#0096D6',
        badge: 'AI & Critical Thinking',
        credentialId: '386501f5-5e19-435c-930b',
        desc: 'Completed HP LIFE online course on critical thinking strategies to evaluate AI-generated content and reduce cognitive biases in decision-making.'
    },
    {
        id: 5,
        title: 'Getting Started with MySQL Command Line',
        issuer: 'IBM Cognitive Class',
        date: 'February 22, 2026',
        type: 'image',
        src: '/certificate/ibm_mysql.png',
        color: '#0052FF',
        badge: 'Databases',
        credentialId: 'IBM-GPXX01RYEN',
        desc: 'Certified by IBM Cognitive Class for mastering MySQL command-line operations, database querying, and database management fundamentals.'
    },
    {
        id: 6,
        title: 'AI for Beginners',
        issuer: 'HP LIFE Foundation',
        date: 'July 25, 2025',
        type: 'image',
        src: '/certificate/hp_ai_beginners.png',
        color: '#00BFFF',
        badge: 'Artificial Intelligence',
        credentialId: '8520bec9-2a2d-44ff-8c56',
        desc: 'Completed HP LIFE online course gaining foundational understanding of AI impact, key AI concepts, data importance, and ethical implications in technology.'
    },
    {
        id: 7,
        title: 'MongoDB Basics for Students',
        issuer: 'MongoDB, Inc.',
        date: 'July 17, 2025',
        type: 'image',
        src: '/certificate/mongo_db_certificate.png',
        color: '#00ED64',
        badge: 'Database',
        credentialId: 'MDBwgxmvzs6zc',
        desc: 'Proof of completion from MongoDB, Inc. for successfully mastering MongoDB basics including documents, collections, CRUD operations, and querying fundamentals.'
    },
    {
        id: 8,
        title: 'React JS Development',
        issuer: 'Certification Authority',
        date: '2026',
        type: 'image',
        src: '/certificate/react_js_certificate.jpeg',
        color: '#61DAFB',
        badge: 'Frontend Framework',
        credentialId: 'REACT-JS-2026',
        desc: 'Certified in React.js covering component architecture, hooks, state management, routing, and building scalable modern web applications.'
    }
];

export default function Certificates() {
    const [lightbox, setLightbox] = useState(null);

    const handleOpen = (cert) => {
        setLightbox(cert);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setLightbox(null);
        document.body.style.overflow = '';
    };

    return (
        <>
            <section id="certificates" className="certificates-section">
                <div className="container">

                    {/* Section Title */}
                    <Reveal animationType="fade-up">
                        <div className="section-header">
                            <span className="section-subtitle">Verified Accomplishments</span>
                            <h2 className="section-title">Certificates &amp; Credentials</h2>
                            <div className="title-bar"></div>
                        </div>
                    </Reveal>

                    {/* Certificates Grid */}
                    <div className="certificates-grid">
                        {certificates.map((cert, i) => (
                            <Reveal key={cert.id} animationType="fade-up" delay={i * 0.1}>
                                <div
                                    className="cert-card glass-panel"
                                    onClick={() => handleOpen(cert)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && handleOpen(cert)}
                                    aria-label={`View ${cert.title} certificate`}
                                    style={{ cursor: 'pointer', '--cert-color': cert.color }}
                                >
                                    {/* Badge */}
                                    <span className="cert-tag-badge">{cert.badge}</span>

                                    {/* Preview Container */}
                                    <div className="cert-preview-container">
                                        <div className="cert-image-wrapper">
                                            {cert.type === 'pdf' ? (
                                                <div className="cert-pdf-placeholder" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%', minHeight: '180px' }}>
                                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="1.5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h4M13 3v6h6" />
                                                    </svg>
                                                    <span style={{ color: cert.color, fontWeight: 700, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>PDF Certificate</span>
                                                </div>
                                            ) : (
                                                <img
                                                    src={cert.src}
                                                    alt={cert.title}
                                                    className="cert-photo"
                                                />
                                            )}
                                            <div className="cert-overlay">
                                                <svg className="cert-zoom-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                </svg>
                                                <span>View Certificate</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Details */}
                                    <div className="cert-details">
                                        <span className="cert-provider">{cert.issuer}</span>
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-desc">{cert.desc}</p>
                                        <div className="cert-footer">
                                            <div className="credential-id-block">
                                                <span className="id-lbl">CREDENTIAL ID:</span>
                                                <span className="id-val">{cert.credentialId}</span>
                                            </div>
                                            <a
                                                href={cert.src}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-cert-action"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                View Full
                                                <svg className="btn-cert-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

            {/* Lightbox Modal */}
            {lightbox && (
                <div
                    className="cert-lightbox"
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Certificate viewer"
                >
                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="lightbox-close"
                            onClick={handleClose}
                            aria-label="Close Preview"
                        >
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {lightbox.type === 'pdf' ? (
                            <iframe
                                src={lightbox.src}
                                title={lightbox.title}
                                className="lightbox-pdf"
                                style={{
                                    width: '100%',
                                    height: '80vh',
                                    border: 'none',
                                    borderRadius: '12px',
                                    background: '#fff'
                                }}
                            />
                        ) : (
                            <img
                                src={lightbox.src}
                                alt={lightbox.title}
                                className="lightbox-image"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
