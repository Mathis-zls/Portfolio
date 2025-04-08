const loadSection = (id, path, callback) => {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(`❌ Error loading ${path}:`, err));
};

// Load standard sections
loadSection('header', 'components/header.html');
loadSection('sidebar', 'components/sidebar.html');
loadSection('hero','components/hero.html');
loadSection('skills', 'components/skills.html');
loadSection('projects', 'components/projects.html');
loadSection('footer', 'components/footer.html');

// Load contact + EmailJS + contact.js
// In loader.js where you load the contact section:
loadSection('contact', 'components/contact.html', () => {
  const script1 = document.createElement("script");
  script1.src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";
  script1.onload = () => {
    emailjs.init("qSbd91Y2Y5LeEzaJ8");
    
    // Only load contact.js after EmailJS is loaded and initialized
    const script2 = document.createElement("script");
    script2.src = "js/contact.js";
    script2.onload = () => console.log('📋 contact.js loaded and running!');
    document.body.appendChild(script2);
  };
  script1.onerror = () => console.error('❌ Failed to load EmailJS script');
  document.body.appendChild(script1);
});