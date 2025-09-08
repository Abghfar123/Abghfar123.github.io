document.addEventListener('DOMContentLoaded', () => {

  /* ===== Scroll Animation for Sections ===== */
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(section => observer.observe(section));


  /* ===== Smooth Scroll for Nav Links ===== */
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      if(targetSection){
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
      } else {
        window.location.href = targetID; // external pages
      }
    });
  });

});
