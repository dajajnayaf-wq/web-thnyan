'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = currentYear;
  });

  document.querySelectorAll('.mobile-nav nav a').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = link.closest('details');
      if (menu) menu.open = false;
    });
  });
});
