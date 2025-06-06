export function renderHome(container: HTMLElement) {
  container.innerHTML = `
    <section class="text-center p-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to Asto Shop</h1>
      <p class="text-lg">Find your next favorite product here.</p>
      <a href="#/products" class="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">Shop Now</a>
    </section>
  `;
}
