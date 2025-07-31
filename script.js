// Optional JavaScript for smooth scrolling and active nav link

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight active nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  let scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop - 100 &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      let id = section.getAttribute('id');
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
});
