// composables/useCookieManager.js

import { useCookie } from '#app';

export const useCookieManager = () => {
  const tokenCookie = useCookie('token');
  const userCookie = useCookie('user');

  const setAuthCookie = (token, user) => {
    tokenCookie.value = token;
    userCookie.value = user; // Store the user object directly
  };

  const getAuthCookie = () => {
    const token = tokenCookie.value;
    const user = userCookie.value;
    return { token, user };
  };

  const removeAuthCookie = () => {
    tokenCookie.value = null;
    userCookie.value = null;
  };

  return {
    setAuthCookie,
    getAuthCookie,
    removeAuthCookie
  };
};