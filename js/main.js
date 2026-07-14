// Lightbox for screenshot zoom
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  document.querySelectorAll('a.zoom').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      lbImg.src = a.getAttribute('href');
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}
