// Set year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Animate progress bars
function animateProgress(){
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const p = bar.getAttribute('data-progress') || '0';
    bar.style.width = p + '%';
  });
}
window.addEventListener('load', () => setTimeout(animateProgress, 300));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const tgt = document.querySelector(this.getAttribute('href'));
    if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:'smooth'}); }
  });
});
