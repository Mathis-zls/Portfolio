const loadSection = (id, path) => {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(`Error loading ${path}:`, err));
};

// Load each section
loadSection('header', 'components/header.html');
loadSection('sidebar', 'components/sidebar.html');
loadSection('hero','components/hero.html');
loadSection('skills', 'components/skills.html');
loadSection('projects', 'components/projects.html');
loadSection('contact', 'components/contact.html');
loadSection('footer', 'components/footer.html');
