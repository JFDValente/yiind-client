import client from '../client';

const resource = 'ideias';

const create = (payload) => {
  return client._post_(resource, payload);
};

const listCategories = () => {
  const route = `${resource}/categorias`;
  return client._get_(route);
};

export default {
  create,
  listCategories,
};
