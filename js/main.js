// Particle Background (simplified, no connections)
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero-section').offsetHeight;
    const particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.01;
        }
        draw() {
            ctx.fillStyle = 'rgba(45, 212, 191, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].size <= 0.2) {
                particlesArray.splice(i, 1);
                i--;
                particlesArray.push(new Particle());
            }
        }
        requestAnimationFrame(animateParticles);
    }

    if (window.requestIdleCallback) {
        requestIdleCallback(animateParticles);
    } else {
        setTimeout(animateParticles, 1000);
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.hero-section').offsetHeight;
    });
}

// 3D Tilt for Feature Cards (hover-only)
function init3DTilt() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.addEventListener('mousemove', handleMouseMove);
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            card.removeEventListener('mousemove', handleMouseMove);
        });

        function handleMouseMove(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (centerY - y) / 20;
            const tiltY = (x - centerX) / 20;
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    });
}

// Tip Panel Toggle
function initTipPanels() {
    const tipButtons = document.querySelectorAll('.tip-button');
    tipButtons.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            panel.classList.toggle('active');
        });
    });
}

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    init3DTilt();
    initTipPanels();
});
