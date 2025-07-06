// js/main.js
// Initialize tsParticles
tsParticles.load('particles', {
 particles: {
 number: { value: 50, density: { enable: true, value_area: 800 } },
 color: { value: '#2dd4bf' },
 shape: { type: 'circle' },
 opacity: { value: 0.5, random: true },
 size: { value: 3, random: true },
 line_linked: { enable: true, distance: 150, color: '#2dd4bf', opacity: 0.4, width: 1 },
 move: { enable: true, speed: 2, direction: 'none', random: false }
 },
 interactivity: {
 detect_on: 'canvas',
 events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' } },
 modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
 }
}).then(() => console.log('tsParticles loaded')).catch(err => console.error('tsParticles error:', err));

// Menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
 const menu = document.getElementById('mobile-menu');
 menu.classList.toggle('hidden');
 console.log('Mobile menu toggled');
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
 const winScroll = document.documentElement.scrollTop;
 const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 const scrolled = (winScroll / height) * 100;
 document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Tip Panel Toggle
document.querySelectorAll('.tip-button').forEach(button => {
 button.addEventListener('click', () => {
 const panel = button.nextElementSibling;
 panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
 console.log('Tip panel toggled');
 });
});

// Marquee Animation Control
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
 marqueeContent.style.animationPlayState = 'running';
}

// 3D Tilt Effect for Feature Cards
document.querySelectorAll('.feature-card').forEach(card => {
 card.addEventListener('mousemove', (e) => {
 const rect = card.getBoundingClientRect();
 const x = e.clientX - rect.left;
 const y = e.clientY - rect.top;
 const centerX = rect.width / 2;
 const centerY = rect.height / 2;
 const tiltX = (centerY - y) / 25;
 const tiltY = (x - centerX) / 25;
 card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
 });
 card.addEventListener('mouseleave', () => {
 card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
 });
});
