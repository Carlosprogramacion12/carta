// Crear corazones flotantes
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '♥';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 20 + 15}px`;
      heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      heartsContainer.appendChild(heart);
    }
  }
  
  // Función de confeti
  function createConfetti() {
    const colors = ['#ff6b9d', '#ffb6c1', '#ffd6e4', '#d14d7a', '#ff8fa3'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '10';
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${50 + Math.random() * 20 - 10}%`;
        confetti.style.borderRadius = '50%';
        confetti.style.transform = 'rotate(45deg)';
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
        
        document.head.insertAdjacentHTML('beforeend', `
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `);
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 1000);
      }, i * 100);
    }
    
    setTimeout(() => {
      confettiContainer.remove();
    }, 3000);
  }
  
  // Cuando la página carga
  document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    
    const envelope = document.getElementById('envelope');
    envelope.addEventListener('click', function() {
      this.classList.toggle('open');
      if (this.classList.contains('open')) {
        createConfetti();
      }
    });
  });