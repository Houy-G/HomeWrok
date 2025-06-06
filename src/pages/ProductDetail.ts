export async function renderProductDetail(container: HTMLElement, id: string) {
  const res = await fetch('https://fakestoreapi.com/products/' + id);
  const product = await res.json();

  container.innerHTML = `
    <div class="p-4 max-w-xl mx-auto">
      <img src="${product.image}" class="w-64 mx-auto mb-4" />
      <h1 class="text-2xl font-bold">${product.title}</h1>
      <p class="mt-2 text-sm">${product.description}</p>
      <p class="mt-2 font-semibold">${product.price} USD</p>
      <a href="#/products" class="text-blue-500 mt-4 inline-block">← Back to products</a>
    </div>
  `;
}
