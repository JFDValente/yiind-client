import Cookies from 'universal-cookie';

const USER_TOKEN = 'user_token';

const cookieConfig = {
  maxAge: 3540 /* 59 minutes */, path: '/',
};

const setUserToken = (userToken) => {
  const cookies = new Cookies();
  cookies.set(USER_TOKEN, userToken, cookieConfig);
}

const getUserToken = () => {
  const cookies = new Cookies();
  return cookies.get(USER_TOKEN);
}

const clearUserToken = () => {
  const cookies = new Cookies();
  cookies.remove(USER_TOKEN, { path: '/' });
}

export default {
  clearUserToken,
  getUserToken,
  setUserToken,
};