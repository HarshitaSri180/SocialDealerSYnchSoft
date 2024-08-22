import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async register({ commit }, formData) {
      try {
        const response = await this.$api.post('/register', formData);
        const { user, token } = response.data;
        commit('SET_USER', user);
        commit('SET_TOKEN', token);
        this.$cookies.set('token', token);
        return user;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await this.$api.post('/login', credentials);
        const { user, token } = response.data;
        commit('SET_USER', user);
        commit('SET_TOKEN', token);
        this.$cookies.set('token', token);
        return user;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      commit('SET_USER', null);
      commit('SET_TOKEN', null);
      this.$cookies.remove('token');
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getUser(state) {
      return state.user;
    },
  },
});
