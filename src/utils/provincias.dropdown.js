let provinciasSelect = document.getElementById('provinciasSelect');
let provinciasSelected = '';

const provinciasSelection = import('../metadata/dropdown.json').then(
  (module) => {
    const data = module.default;
    data.forEach((provincia) => {
      provinciasSelected += `<option value="${provincia.id}">${provincia.provincia}</option>`;
    });
    provinciasSelect.innerHTML = provinciasSelected;
    new Glide('.glide').destroy();
  }
);

module.exports = provinciasSelection;
