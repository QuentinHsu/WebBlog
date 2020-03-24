import axios from 'axios'

axios.interceptors.request.use(config => {
    const apiAccessKey = '123456'
    if (config.method == 'get') {
        config.params = {
            api_access_key: apiAccessKey,
            ...config.params
        }
    }

    return config
},err =>{
    return Promise.reject(err)
})

export default axios
