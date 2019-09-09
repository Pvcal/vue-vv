import axios from 'axios'
export function request(config,sucess,failure) {
  // const instance = axios.create({
  //   baseURL:'http://localhost:8080',
  //   timeout:10000
  // })
  // instance(config)
  // .then(res => {
  //   sucess(res)
  // }).catch(err => {
  //   failure(err)
  // })


  return new Promise((resolve,reject) => {
    const instance = axios.create({
      baseURL:'http://localhost:4300',
      timeout:10000
    })
    instance(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
  

  // const instance = axios.create({
  //   baseURL:'http://localhost:8080',
  //   timeout:10000
  // })
  // return instance(config)
  // .then(res => {
  //   resolve(res)
  // })
  // .catch(err => {
  //   reject(err)
  // })
}