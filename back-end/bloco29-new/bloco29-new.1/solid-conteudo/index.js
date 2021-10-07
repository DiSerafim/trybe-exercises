const { default: axios } = require('axios');

const CIDADES = {
  cabanagem: {
    cep: '66.625-670',
  },
  bengui: {
    cep: '66.630-215',
  },
};

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep);
}

async function ConsultaCEP(cidade, service) {
  const { cep } = CIDADES[`${cidade}`];
  const valida = validaCEP(cep);
  let cepTratado;

  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    service(cepTratado);
  }
}

async function brasilapi(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;
  const request = await axios.get(URL);
  console.log(request.data);
};

async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;
  const request = await axios.get(URL);
  console.log(request.data);
};

ConsultaCEP('cabanagem', viaCEP);
