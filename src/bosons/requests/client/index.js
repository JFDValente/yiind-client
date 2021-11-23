import Cookies from 'universal-cookie';

const cookies = new Cookies();

const server = 'http://ec2-18-117-174-22.us-east-2.compute.amazonaws.com:8003';
const api_token = '34733ab3fc8cab2272f45561ebff3676b14a02b5b72cd9fec0c7be6a4a97727a';

const request = (path, options) => {
  const user_token = cookies.get('user_token');
  const authHeader = user_token ? { 'x-token': `Bearer ${user_token}` } : {};
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_token}`,
      ...authHeader,
    },
    ...options,
  };

  const promise = fetch(`${server}/${path}`, requestOptions)
    .then(response => {
      if (response.status >= 400) {
        throw response;
      };
      return response.json();
    });

  return promise;
}

const _get_ = (path, queryParams = {}) => {
  const requestOptions = {
    method: 'GET',
  };
  const search = new URLSearchParams(queryParams).toString();
  const fullPath = search ? `${path}?${search}` : path;
  return request(fullPath, requestOptions);
};

const _post_ = (path, payload = {}) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  return request(path, requestOptions);
};

const _put_ = (path, payload = {}) => {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(payload),
  };
  return request(path, requestOptions);
};

const _delete_ = (path) => {
  const requestOptions = {
    method: 'DELETE',
  };
  return request(path, requestOptions);
};

export default {
  _get_,
  _post_,
  _put_,
  _delete_,
};
