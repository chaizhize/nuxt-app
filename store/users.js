import Cookies from "js-cookie";

const users = {
  namespace: true,
  state: () => ({
    isLogin: false
  }),
  mutations: {
    //是否登录
    handleIsLogin(state, data) {
      console.log(312);
      state.isLogin = data;
    },

    logout(state, vm) {
      Cookies.remove('user');
      Cookies.remove('session');
      localStorage.clear();
      location.reload();
    },
  },
  actions: {},

}
export default users
