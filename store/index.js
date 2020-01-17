import Vuex from 'vuex'
import Cookies from 'js-cookie'
// const cookieparser = process.server ? require('cookieparser') : undefined
import {api} from './api'
console.log(api);
export const strict = false


let actives = {
    nuxtServerInit(){

    }
}
const actives2 = Object.assign(actives,api)
export const actions = actives2
