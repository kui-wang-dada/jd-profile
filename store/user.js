/** @format */
export default {
  state: () => ({
    userInfo: {},
    token: '',
    deviceId: '',
  }),
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_DEVICE_ID: (state, deviceId) => {
      state.deviceId = deviceId;
    },

    SET_USER_INFO: (state, data) => {
      state.userInfo = data;
    },
  },
  actions: {},
};
