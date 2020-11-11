let statesOptionValue = document.querySelector('#statesSelect');
let titleSelect = document.getElementById('titleSelect');

let statesOptionValueClick = '';
let displayTitleSelect = '';

statesOptionValue.addEventListener('change', (e) => {
  statesOptionValueClick = e.target.value;

  switch (statesOptionValueClick) {
    case 'caba':
      displayTitleSelect = `Ofertas vigentes en Ciudad Aut\u00F3noma de Buenos Aires`;
      break;
    case 'bsas':
      displayTitleSelect = `Ofertas vigentes en Buenos Aires`;
      break;
    case 'catamarca':
      displayTitleSelect = `Ofertas vigentes en Catamarca`;
      break;
    case 'chaco':
      displayTitleSelect = `Ofertas vigentes en Chaco`;
      break;
    case 'chubut':
      displayTitleSelect = `Ofertas vigentes en Chubut`;
      break;
    case 'cordoba':
      displayTitleSelect = `Ofertas vigentes en C\u00F3rdoba`;
      break;
    case 'corrientes':
      displayTitleSelect = `Ofertas vigentes en Corrientes`;
      break;
    case 'entreRios':
      displayTitleSelect = `Ofertas vigentes en Entre R\u00EDos`;
      break;
    case 'formosa':
      displayTitleSelect = `Ofertas vigentes en Formosa`;
      break;
    case 'jujuy':
      displayTitleSelect = `Ofertas vigentes en Jujuy`;
      break;
    case 'laPampa':
      displayTitleSelect = `Ofertas vigentes en La Pampa`;
      break;
    case 'laRioja':
      displayTitleSelect = `Ofertas vigentes en La Rioja`;
      break;
    case 'mendoza':
      displayTitleSelect = `Ofertas vigentes en Mendoza`;
      break;
    case 'neuquen':
      displayTitleSelect = `Ofertas vigentes en Neuqu\u00E9n`;
      break;
    case 'rioNegro':
      displayTitleSelect = `Ofertas vigentes en R\u00EDo Negro`;
      break;
    case 'salta':
      displayTitleSelect = `Ofertas vigentes en Salta`;
      break;
    case 'sanJuan':
      displayTitleSelect = `Ofertas vigentes en San Juan`;
      break;
    case 'sanLuis':
      displayTitleSelect = `Ofertas vigentes en San Luis`;
      break;
    case 'santaCruz':
      displayTitleSelect = `Ofertas vigentes en Santa Cruz`;
      break;
    case 'santaFe':
      displayTitleSelect = `Ofertas vigentes en Santa Fe`;
      break;
    case 'tierraDelFuego':
      displayTitleSelect = `Ofertas vigentes en Tierra del Fuego`;
      break;
    case 'tucuman':
      displayTitleSelect = `Ofertas vigentes en Tucum\u00E1n`;
      break;
  }

  titleSelect.innerHTML = displayTitleSelect;
});

module.exports = statesOptionValue;
