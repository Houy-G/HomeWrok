import { handleRoute } from './router';
import { renderNavbar } from './components/Navbar';

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
});
