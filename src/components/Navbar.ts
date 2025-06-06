export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = "flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900";
  nav.innerHTML = `
    <a href="#/" class="font-bold text-xl">AstoShop</a>
    <div>
      <a href="#/products" class="mr-4">Products</a>
      <button id="darkToggle" class="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded">🌓</button>
    </div>
  `;
  document.body.prepend(nav);

  const toggle = document.getElementById('darkToggle');
  toggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
}
