const onEntry = entries => {
  entries.forEach(entries => {
    if (entries.isIntersecting) {
      const entriesSectionId = entries.target.getAttribute('id');
      const activeLink = document.querySelector('.nav__link--active');
      if (activeLink) {
        activeLink.classList.remove('nav__link--active');
      }
      const nextLink = document.querySelector(`a[href='#${entriesSectionId}']`);
      nextLink.classList.add('nav__link--active');
    }
  });
};

const options = {
  threshold: 0.1,
};

const sections = document.querySelectorAll('.js-section');

const observer = new IntersectionObserver(onEntry, options);

sections.forEach(section => {
  observer.observe(section);
});
