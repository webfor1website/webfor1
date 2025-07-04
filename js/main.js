// Particle Background with Connections
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero-section').offsetHeight;
    const particlesArray = [];
    let mouseX = 0, mouseY = 0;

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

    for (let i = 0; i < 20; i++) {
        particlesArray.push(new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                let dx = particlesArray[i].x - particlesArray[j].x;
                let dy = particlesArray[i].y - particlesArray[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 80) {
                    ctx.strokeStyle = 'rgba(45, 212, 191, ' + (1 - distance / 80) + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
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
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    setTimeout(animateParticles, 1000); // Defer animation start
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.hero-section').offsetHeight;
    });
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
}

// Cursor Trail (skip on mobile)
function initCursorTrail() {
    if (window.innerWidth <= 768) return; // Skip on mobile
    const trailContainer = document.body;
    function createTrail(e) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trailContainer.appendChild(trail);
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        setTimeout(() => trail.remove(), 500);
    }
    document.addEventListener('mousemove', createTrail);
}

// 3D Tilt for Feature Cards
function init3DTilt() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (centerY - y) / 15; // Reduced tilt for less CPU
            const tiltY = (x - centerX) / 15;
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
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

// Initialize all features after DOM load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursorTrail();
    init3DTilt();
    initTipPanels();
});
