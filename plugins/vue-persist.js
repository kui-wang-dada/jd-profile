// ~/plugins/localStorage.js

import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: window.localStorage,
      reducer(val) {
        return {
          lang: val.lang
        };
      }
    })(store);
  });
};
