import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll <= 0) {
                setScrollProgress(0);
                return;
            }
            const scrollPercent = (window.pageYOffset / totalScroll) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger on mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="scroll-progress-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                zIndex: 9999,
                pointerEvents: 'none',
            }}
        >
            <div
                className="scroll-progress-bar"
                style={{
                    width: `${scrollProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%)',
                    boxShadow: '0 0 10px rgba(124, 58, 237, 0.8), 0 0 5px rgba(59, 130, 246, 0.8)',
                    transition: 'width 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
            />
        </div>
    );
}
