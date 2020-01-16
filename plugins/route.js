import {Message} from 'element-ui'
export default  ({app, store, route, redirect}) => {
  app.router.beforeEach((to, from, next) => {
    if (!store.state.authUser) {

      return redirect('/login')
    }else {
      if(to.fullPath === '/login'){

      }
      // return redirect(route.fullPath)
    }
  })
}
