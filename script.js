
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('nav button');
  const sections = document.querySelectorAll('main section');
  const headerTitle = document.querySelector('header h1');

  // Typing effect for header
  const fullText = "Your Name";
  let i = 0;
  function typeEffect() {
    if (i < fullText.length) {
      headerTitle.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeEffect, 150);
    }
  }
  headerTitle.textContent = "";
  typeEffect();

  // Function to show section
  function showSection(id) {
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`nav button[onclick="showSection('${id}')"]`).classList.add('active');

    localStorage.setItem('activeSection', id);
  }

  // Initialize nav buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('onclick').match(/'(.*)'/)[1];
      showSection(sectionId);
    });
  });

  // Load last active section from storage
  const savedSection = localStorage.getItem('activeSection') || 'about';
  showSection(savedSection);
});
