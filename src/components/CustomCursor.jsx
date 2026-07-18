import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isClicking, setIsClicking] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    const trailRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef();

    useEffect(() => {
        // Detect mobile / touch screen
        const checkDevice = () => {
            const mobile = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
            setIsMobile(mobile);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        if (isMobile) return;

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);
        };

        const onMouseLeave = () => {
            setIsHidden(true);
        };

        const onMouseDown = () => {
            setIsClicking(true);
        };

        const onMouseUp = () => {
            setIsClicking(false);
        };

        // Listen to mouse movement and state changes
        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        // Setup interactive hover states for buttons, links, etc.
        const addHoverEvents = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, select, [role="button"], .project-card, .skill-card, .service-card, .clickable'
            );

            const onHoverStart = () => setIsHovered(true);
            const onHoverEnd = () => setIsHovered(false);

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', onHoverStart);
                el.addEventListener('mouseleave', onHoverEnd);
            });

            return () => {
                interactiveElements.forEach((el) => {
                    el.removeEventListener('mouseenter', onHoverStart);
                    el.removeEventListener('mouseleave', onHoverEnd);
                });
            };
        };

        // Setup Mutation Observer to re-bind hover events if elements change dynamically
        const observer = new MutationObserver(addHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        const removeHoverEvents = addHoverEvents();

        return () => {
            window.removeEventListener('resize', checkDevice);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            removeHoverEvents();
            observer.disconnect();
        };
    }, [isMobile]);

    // Smooth trail animation using requestAnimationFrame interpolation (lerp)
    useEffect(() => {
        if (isMobile) return;

        const updateTrail = () => {
            const speed = 0.15; // interpolation factor
            const nextX = trailRef.current.x + (position.x - trailRef.current.x) * speed;
            const nextY = trailRef.current.y + (position.y - trailRef.current.y) * speed;

            trailRef.current = { x: nextX, y: nextY };
            setTrailPosition({ x: nextX, y: nextY });

            requestRef.current = requestAnimationFrame(updateTrail);
        };

        requestRef.current = requestAnimationFrame(updateTrail);

        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [position, isMobile]);

    if (isMobile || isHidden) return null;

    return (
        <>
            {/* Inner Dot */}
            <div
                className={`custom-cursor-dot ${isClicking ? 'clicking' : ''} ${isHovered ? 'hovered' : ''}`}
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            />
            {/* Outer Ring */}
            <div
                className={`custom-cursor-ring ${isClicking ? 'clicking' : ''} ${isHovered ? 'hovered' : ''}`}
                style={{
                    transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0)`,
                }}
            />
        </>
    );
}
