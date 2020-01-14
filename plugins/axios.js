export default function ({ $axios, redirect }) {
  console.log($axios,'$axios');
  $axios.onRequest(config => {




    console.log('Making request to ' + config)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
