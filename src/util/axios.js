import axios from 'axios'
export default (type = 'get', url, params) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: type,
      url: '/api' + url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    type = type.toLocaleLowerCase()
    if (type === 'get') {
      config.params = params
    } else {
      config.data = params
    }
    axios.interceptors.response.use((response) => {
      switch (response.data.code) {
        case 0:
          break
        case 10:
          window.ra.push('second1')
          break
        default:
          console.log('cuowu')
          break
      }
      return response
    }, (error) => {
      return reject(error)
    })
    axios(config).then(res => {
      // if (res.data) reject(res.data)
      // else resolve(res.data)
      resolve(res.data)
    }).catch(data => {
      console.log('catch error', data)
    })
  })
}
