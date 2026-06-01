const productsContainer = document.querySelector('.products');
const sortSelect = document.querySelector('#sort');

const sorters = {
  'precio-asc': (a, b) => Number(a.dataset.precio) - Number(b.dataset.precio),
  'precio-desc': (a, b) => Number(b.dataset.precio) - Number(a.dataset.precio),
  'potencia-desc': (a, b) => Number(b.dataset.potencia) - Number(a.dataset.potencia),
  'torque-desc': (a, b) => Number(b.dataset.torque) - Number(a.dataset.torque),
  'anio-desc': (a, b) => Number(b.dataset.anio) - Number(a.dataset.anio),
  'consumo-desc': (a, b) => Number(b.dataset.consumo) - Number(a.dataset.consumo),
  'marca-asc': (a, b) => a.dataset.marca.localeCompare(b.dataset.marca, 'es')
};

function ordenarProductos(criterio) {
  const cards = Array.from(productsContainer.querySelectorAll('.product-card'));
  const sorter = sorters[criterio] || sorters['precio-asc'];
  cards.sort(sorter).forEach((card) => productsContainer.appendChild(card));
}

sortSelect.addEventListener('change', (event) => {
  ordenarProductos(event.target.value);
});

ordenarProductos(sortSelect.value);
