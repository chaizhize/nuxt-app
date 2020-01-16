import {Message} from 'element-ui'
export default function ({$axios, redirect}) {

  $axios.onRequest(config => {
    config.baseURL = process.env.baseURL
    return config;
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.onResponse(
    response => {
      return response.data
    }
  )
}
