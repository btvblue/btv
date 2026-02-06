document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  if (year) {
    year.textContent = currentYear;
  }
});
