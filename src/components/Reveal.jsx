import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable Reveal component to animate elements on scroll using IntersectionObserver.
 */
export default function Reveal({ children, width = '100%', delay = 0, duration = 0.6, animationType = 'fade-up' }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can disconnect the observer for this element
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.15, // trigger when 15% of the element is visible
                rootMargin: '0px 0px -50px 0px' // slightly trigger before it reaches viewport
            }
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

    const styles = {
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
    };

    return (
        <div
            ref={ref}
            className={`reveal-wrapper ${animationType} ${isVisible ? 'revealed' : ''}`}
            style={{ ...styles, width }}
        >
            {children}
        </div>
    );
}
