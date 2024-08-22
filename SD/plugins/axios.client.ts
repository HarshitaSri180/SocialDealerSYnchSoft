// @ts-ignore
import * as axios from 'axios';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: axios
        }
    }
});