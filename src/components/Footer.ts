export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = "text-center p-4 bg-gray-100 dark:bg-gray-900 text-sm";
  footer.innerHTML = "© 2025 Asto Shop. All rights reserved.";
  document.body.appendChild(footer);
}
