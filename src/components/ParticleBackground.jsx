import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];

        // Check if device is mobile to reduce particle density
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 30 : 70;
        const connectionDistance = 100;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.width = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;

                // Colors from palette (purple, blue, navy highlights)
                const colors = [
                    'rgba(124, 58, 237, 0.45)', // Purple (#7C3AED)
                    'rgba(59, 130, 246, 0.45)', // Blue (#3B82F6)
                    'rgba(147, 51, 234, 0.3)'   // Accent purple
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screens
                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;

                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = this.width * 2;
                ctx.shadowColor = this.color;
                ctx.fill();
                // Reset shadow
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Render connected lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Update & Draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: '#0B0B0F', // Main background code
            }}
        />
    );
}
