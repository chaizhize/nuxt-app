export const api = {
    //首页登录
    async getUserLogin({commit}, params) {
      return await this.$axios.$post('api/users/login', params)
    },
}
