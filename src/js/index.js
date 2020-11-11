/**
 *
 * Description. JS incharge of the dynamic and logic for https://folletos.carrefour.com.ar
 *
 * @link   https://www.linkedin.com/in/nicolasdeyros/
 * @author Nicolas Deyros.
 * @version 1.0.0
 */

import Glide from '@glidejs/glide';
import '../css/tailwind.css';
import '../utils/states.title';
const moment = require('moment');

let statesSelect = document.getElementById('statesSelect');
let ul = document.querySelector('.glide_mobile_slides');
let desktopCarrousel = document.querySelector('.glide_desktop_carrousel');
let msg = document.querySelector('#msgDefault');
let arrows = document.querySelector('.glide__arrows');

let statesSelected = '';
let statesSelectValue = '';
let card = '';

let today = moment();

const states = '../metadata/states.json';

fetch(states)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(function (str) {
      statesSelected += `<option value="${str.id}">${str.provincia}</option>`;
    });
    statesSelect.innerHTML = statesSelected;
  });

var init = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  cache: 'default',
};
const url = new Request('../metadata/catalogs.json', init);

const fetchData = fetch(url).then((data) => {
  return data.json();
});

statesSelect.addEventListener('change', (e) => {
  statesSelectValue = e.target.value;
  card = '';

  fetchData.then((datas) => {
    datas[statesSelectValue].forEach((data) => {
      let start = moment(data.from);
      let end = moment(data.to);
      let from = moment(data.from).locale('es').format('DD/MM');
      let to = moment(data.to).locale('es').format('DD/MM');

      if (start <= today && end >= today) {
        card += `
          <li class="glide__slide">
            <div class="max-w-xs rounded overflow-hidden">
              <div class="p-2 mb-1 text-center bg-blue-700 font-bold text-white">
                ${data.title}
              </div>
              <div>
                <img class="mx-auto h-64" src="${data.thumb}" alt="${data.title}">
              </div>
              <div class="w-full">
                <a href="${data.link}#DisablePreview=true" class="block w-auto p-1 m-1 cursor-pointer rounded transition-colors bg-blue-700 no-underline text-white text-center font-bold outline-none hover:bg-blue-800">Ver Folleto</a>
              </div>
              <div class="text-center p-2 border-t border-gray-400 bg-gray-300 bg-opacity-50 text-xs font-bold">
                V\u00E1lido del ${from} al ${to}
              </div>
            </div>
          </li>
    `;
      }
    });
    if (card != '') {
      ul.innerHTML = card;
      desktopCarrousel.innerHTML = card;
      arrows.classList.add('block'), arrows.classList.remove('hidden');
      msg.innerHTML = '';
    } else {
      ul.innerHTML = '';
      desktopCarrousel.innerHTML = '';
      msg.innerHTML = `
      <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 text-center" role="alert">
        <p class="font-bold">\u00A1Gracias por visitarnos\u0021</p>
        <p>En estos momentos no hay folletos disponibles. Pod\u00E9s mirar todas nuestras promos <a class="cursor-pointer underline font-bold" href="https://www.carrefour.com.ar/promociones" target="_blank">ac\u00E1</a></p>
      </div>
      `;
    }
    new Glide('.glide_mobile', {
      type: 'slider',
      focusAt: 'center',
      hoverpause: true,
      keyboard: true,
      bound: true,
      rewind: true,
    }).mount();
    new Glide('.glide_desktop', {
      type: 'carrousel',
      perView: 4,
      startAt: 0,
      hoverpause: true,
      keyboard: true,
      autoplay: 4000,
      breakpoints: {
        1024: {
          perView: 3,
        },
        800: {
          perView: 2,
        },
      },
    }).mount();
  });
});
