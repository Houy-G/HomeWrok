export function renderCard(product: any) {
  return `
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded p-4">
      <img src="${product.image}" class="h-40 mx-auto mb-4" />
      <h3 class="text-lg font-bold">${product.title}</h3>
      <p class="text-sm">${product.price} USD</p>
      <a href="#/product/${product.id}" class="text-blue-500 mt-2 inline-block">View</a>
    </div>
  `;
}
