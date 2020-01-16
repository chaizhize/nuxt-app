import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {api} from './modules/api'
import users from './modules/users'
// const cookieparser = process.server ? require('cookieparser') : undefined

console.log(api,'ddd');
const createStore = () => {
  return new Vuex.Store({
    strict: false,
    modules:{
      users
    },
    actions: {
      ...api,
      nuxtServerInit({ commit }, { req }){
        let auth = null
        // if (req.headers.cookie) {
        //   const parsed = cookieparser.parse(req.headers.cookie)
        //   try {
        //     auth = JSON.parse(parsed.auth)
        //   } catch (err) {
        //     // No valid cookie found
        //   }
        // }
      }
    },

  })
}

export default createStore
