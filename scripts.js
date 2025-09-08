// set year
document.getElementById('year').textContent = new Date().getFullYear();

// animate progress bars when in view
function animateProgress(){
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const p = bar.getAttribute('data-progress') || '0';
    bar.style.width = p + '%';
  });
}

// run after small delay so CSS transitions show
window.addEventListener('load', () => setTimeout(animateProgress, 300));

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const tgt = document.querySelector(this.getAttribute('href'));
    if(tgt){ e.preventDefault(); tgt.scrollIntoView({behavior:'smooth'}); }
  });
});
