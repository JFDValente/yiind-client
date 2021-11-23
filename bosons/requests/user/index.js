import client from '../client';

const resource = 'usuarios';

const getData = () => {
  const route = `${resource}/me`;
  return client._get_(route);
}

const loginPF = (payload) => {
  const route = `${resource}/login/pf`;
  return client._post_(route, payload);
}

const loginPJ = (payload) => {
  const route = `${resource}/login/pj`;
  return client._post_(route, payload);
}

const createPJ = (payload) => {
  const route = `${resource}/pj`;
  return client._post_(route, payload);
}

const sendEmailRecovery = (payload) => {
  const route = `${resource}/pj/recuperar_senha`;
  return client._post_(route, payload);
}

const associateCategories = (payload) => {
  const route = `${resource}/categorias`;
  return client._post_(route, payload);
}

const updatePassword = (payload) => {
  const route = `${resource}/pj/alterar_senha_temp`;
  return client._post_(route, payload);
}

export default {
  associateCategories,
  createPJ,
  getData,
  loginPF,
  loginPJ,
  sendEmailRecovery,
  updatePassword,
}
