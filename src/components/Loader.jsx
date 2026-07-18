import React, { useEffect, useState } from 'react';

export default function Loader({ onFinished }) {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [outro, setOutro] = useState(false);

    const loadingTexts = [
        'INITIALIZING SYSTEM INTERFACES...',
        'COMPILING AUDIO & DESIGN MODULES...',
        'LOADING SECURE EXPERIENCES...',
        'ESTABLISHING CONNECTION PORT...',
        'RENDER ENGAGES: VISHAL PORTFOLIO 2026...'
    ];

    useEffect(() => {
        // Increment loading text index every 800ms
        const textInterval = setInterval(() => {
            setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
        }, 600);

        // Dynamic numeric loader count
        const duration = 2500; // total duration in ms
        const intervalTime = 20; // tick rate
        const steps = duration / intervalTime;
        let step = 0;

        const progressInterval = setInterval(() => {
            step++;
            const currentProgress = Math.min(Math.round((step / steps) * 100), 100);
            setProgress(currentProgress);

            if (currentProgress >= 100) {
                clearInterval(progressInterval);
                clearInterval(textInterval);
                // Start exit animation after a brief delay
                setTimeout(() => {
                    setOutro(true);
                    // Let parent component know load is complete after transition duration (800ms)
                    setTimeout(() => {
                        if (onFinished) onFinished();
                    }, 850);
                }, 400);
            }
        }, intervalTime);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, [onFinished]);

    return (
        <div className={`loader-overlay ${outro ? 'slide-exit' : ''}`}>
            <div className="loader-container">
                {/* Futuristic Cyber Ring */}
                <div className="loader-ring-wrapper">
                    <svg className="loader-ring-svg" viewBox="0 0 100 100">
                        <circle className="ring-bg" cx="50" cy="50" r="45" />
                        <circle
                            className="ring-progress"
                            cx="50"
                            cy="50"
                            r="45"
                            style={{
                                strokeDashoffset: 282.7 - (282.7 * progress) / 100,
                            }}
                        />
                    </svg>
                    <div className="loader-percentage">
                        <span>{progress}</span>
                        <span className="percent-symbol">%</span>
                    </div>
                </div>

                {/* Status texts & bar */}
                <div className="loader-status-wrapper">
                    <div className="loader-text-status">{loadingTexts[textIndex]}</div>
                    <div className="loader-bar-bg">
                        <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="loader-subtext">SYSTEM v1.0.4.SECURE</div>
                </div>
            </div>
        </div>
    );
}
