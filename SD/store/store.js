// store.js

import { reactive } from "vue";

export const store = reactive({
  user: null,
  accessToken: null,

  getters: {
    getUser() {
      return store.user;
    },

    getAccessToken() {
      return store.accessToken;
    },
  },

  mutations: {
    setUser(user) {
      store.user = user;
    },

    setAccessToken(token) {
      store.accessToken = token;
    },
  },
});
