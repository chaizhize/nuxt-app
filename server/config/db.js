const env = process.env.NODE_ENV //环境变量

let MYSQL_CONF
let REDIS_CONF
let SMTP_CONF
let CODE_CONF
if (env === 'development') {
  //mysql
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'czz19941128',
    port: '3306',
    database: 'myblog'
  }

  //redis
  REDIS_CONF = {
    get port() {
      return 6379
    },
    get host() {
      return '127.0.0.1'
    }
  }
  //SMTP_CONF
  SMTP_CONF = {
    get host() {
      return 'smtp.qqcom'
    },
    get user() {
      return '1250022874@qq.com'
    },
    get pass() {
      return 'hudhsulwaqetfgjb'
    }
  }
  CODE_CONF = {
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() * 60 * 60 * 1000
      }
    }
  }

}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'czz19941128',
    port: '3306',
    database: 'myblog'
  }
  REDIS_CONF = {
    get port() {
      return 6379
    },
    get host() {
      return '127.0.0.1'
    }
  }
  //SMTP_CONF
  SMTP_CONF = {
    get host() {
      return 'smtp.qqcom'
    },
    get user() {
      return '1250022874@qq.com'
    },
    get pass() {
      return 'hudhsulwaqetfgjb'
    }
  }

  CODE_CONF = {
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() * 60 * 60 * 1000
      }
    }
  }
}
module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
  SMTP_CONF,
  CODE_CONF
}
