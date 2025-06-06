import { renderHome } from './pages/Home';
import { renderProducts } from './pages/Products';
import { renderProductDetail } from './pages/ProductDetail';

export function handleRoute() {
  const app = document.getElementById('app');
  const hash = window.location.hash;

  if (!app) return;

  if (hash.startsWith('#/product/')) {
    const id = hash.split('/')[2];
    renderProductDetail(app, id);
  } else if (hash === '#/products') {
    renderProducts(app);
  } else {
    renderHome(app);
  }
}
