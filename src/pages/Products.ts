import { fetchProducts } from '../api';
import { renderCard } from '../components/Card';

export async function renderProducts(container: HTMLElement) {
  container.innerHTML = '<div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="productList"></div>';
  const list = document.getElementById('productList');
  if (!list) return;

  const products = await fetchProducts();
  list.innerHTML = products.map(renderCard).join('');
}
