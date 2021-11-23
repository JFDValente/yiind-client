import filters from '../filters';

const cnpj = (value) => {
  const filteredCnpj = filters.onlyNumbers(value);
  if (filteredCnpj.length < 14) return filteredCnpj;
  return filteredCnpj.substr(0,14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

export default {
  cnpj,
}