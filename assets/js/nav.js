const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
    const container = link.textContent;
    scrollTo(container);
  });
});

function scrollTo(container) {
  var div = document.getElementById(container);
  div.scrollIntoView({ behavior: "smooth", block: "start" });
}
