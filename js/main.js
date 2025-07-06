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

// Chat Modal Toggle
const chatButton = document.getElementById('chat-grok-button');
const chatModal = document.getElementById('chat-modal');
const closeChat = document.getElementById('close-chat');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatContainer = document.getElementById('chat-container');

chatButton.addEventListener('click', () => {
  chatModal.classList.remove('hidden');
  chatModal.classList.add('show');
  chatModal.setAttribute('aria-hidden', 'false');
  chatInput.focus();
  console.log('Chat modal opened');
});

closeChat.addEventListener('click', () => {
  chatModal.classList.add('hidden');
  chatModal.classList.remove('show');
  chatModal.setAttribute('aria-hidden', 'true');
  console.log('Chat modal closed');
});

// Close modal when clicking outside
chatModal.addEventListener('click', (e) => {
  if (e.target === chatModal) {
    chatModal.classList.add('hidden');
    chatModal.classList.remove('show');
    chatModal.setAttribute('aria-hidden', 'true');
    console.log('Chat modal closed by clicking outside');
  }
});

// Mock chat submission (replace with xAI API call)
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    // Append user message
    const userMsgDiv = document.createElement('p');
    userMsgDiv.className = 'user-message';
    userMsgDiv.textContent = userMessage;
    chatContainer.appendChild(userMsgDiv);

    // Mock Grok response
    const grokMsgDiv = document.createElement('p');
    grokMsgDiv.className = 'grok-message';
    grokMsgDiv.textContent = `Grok here! You said: "${userMessage}". I can help with your $1 website. Try asking for a specific feature, like "Add a contact form" or "Make my site teal". Check the Guide page for more!`;
    chatContainer.appendChild(grokMsgDiv);

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Clear input
    chatInput.value = '';
    console.log('Chat message sent:', userMessage);
  }
});

// Marquee Animation Control
const marqueeContent = document.querySelector('.marquee-content');
if (marqueeContent) {
  marqueeContent.style.animationPlayState = 'running';
}

// Enhanced Debug for Images
window.addEventListener('load', () => {
  const heroImage = document.querySelector('.hero-media');
  if (!heroImage.complete || heroImage.naturalWidth === 0) {
    console.error('Hero image (images/hero.jpg?v=4) failed to load. Check: 1) File exists in images/, 2) Correct filename/extension (hero.jpg, not Hero.jpg or hero.png), 3) GitHub push, 4) Netlify deploy logs, 5) Image format (JPEG, <100 KiB). URL: https://webfor1.netlify.app/images/hero.jpg?v=4');
  } else {
    console.log('Hero image loaded successfully: https://webfor1.netlify.app/images/hero.jpg?v=4');
    const rect = heroImage.getBoundingClientRect();
    if (rect.right < window.innerWidth - 1) {
      console.warn('Hero image does not span full viewport width. Right edge at: ' + rect.right + 'px, viewport width: ' + window.innerWidth + 'px. Check .hero-media styles.');
    } else {
      console.log('Hero image spans full viewport width.');
    }
    if (rect.height < window.innerHeight * 0.9 && window.innerWidth >= 768) {
      console.warn('Hero image height is less than expected. Current height: ' + rect.height + 'px. Check .hero-section min-height.');
