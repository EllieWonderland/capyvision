import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to major sections/elements
  const elementsToAnimate = document.querySelectorAll('.card, .prototype-card, .about-text, .about-images');
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Newsletter Form Submit Prevention
  const form = document.getElementById('newsletter-form') as HTMLFormElement;
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input && input.value) {
        alert(`Danke! ${input.value} wurde in den Newsletter aufgenommen (Demo).`);
        input.value = '';
      }
    });
  }

  // Impressum Modal Logic
  const modal = document.getElementById('impressum-modal');
  const btn = document.getElementById('impressum-link');
  const span = document.querySelector('.close-modal') as HTMLElement;

  if (btn && modal && span) {
    btn.onclick = (e) => {
      e.preventDefault();
      modal.classList.add('show');
    };

    span.onclick = () => {
      modal.classList.remove('show');
    };

    window.onclick = (event) => {
      if (event.target == modal) {
        modal.classList.remove('show');
      }
    };
  }
});
