// const Koa = require('koa')
import Koa from 'koa'

const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')

import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import Json from 'koa-json'


import users from './interface/users/index'

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  app.keys = ['mt', 'keyskeys']
  // app.proxy = true
  // app.use(proxy('/api', { target: 'http://127.0.0.1:3000', changeOrigin: true }));
  app.use(session({
    key: 'mt',
    prefix: 'mt:uid',
    store: new Redis()
  }))

  app.use(bodyParser({
    extendTypes:['json','from','text']
  }))
  app.use(Json())



  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }


  app.use(users.routes()).use(users.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })


  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
