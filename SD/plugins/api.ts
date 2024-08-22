import { $fetch, FetchOptions } from "ohmyfetch";
import { defineNuxtPlugin } from "#app";
import AuthModule from "~~/repository/modules/auth";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: "http://127.0.0.1:5106/api/v1",
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
