const revealTargets = document.querySelectorAll(
  '.section-heading, .project, .about-section, .contact-section',
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
