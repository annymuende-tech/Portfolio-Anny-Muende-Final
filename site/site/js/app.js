document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    document.getElementById('error-nom').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-message').textContent = '';
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (nom.length < 2) { document.getElementById('error-nom').textContent = 'Nom trop court'; valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('error-email').textContent = 'Email invalide'; valid = false; }
    if (message.length < 10) { document.getElementById('error-message').textContent = 'Message trop court'; valid = false; }
    const msg = document.getElementById('formMessage');
    if (valid) { msg.style.color = 'green'; msg.textContent = 'Merci ! Message envoye'; form.reset(); }
    else { msg.style.color = 'red'; msg.textContent = 'Corrige les erreurs'; }
  });
});
