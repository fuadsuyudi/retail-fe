import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const Post = (path ,params) => {
    return new Promise((resolve, reject) => {
        axios.post(`/uma/${path}`, params).then(result => {
            resolve(result.data)
        }, err => {
            reject(err)
        })
    })
}

const Put = (path ,params) => {
    return new Promise((resolve, reject) => {
        axios.put(`/uma/${path}`, params).then(result => {
            resolve(result.data)
        }, err => {
            reject(err)
        })
    })
}

const Get = (path ,query) => {
    return new Promise((resolve, reject) => {
        axios.get(`/uma/${path}`, query).then(result => {
            resolve(result.data)
        }, err => {
            reject(err)
        })
    })
}

const Delete = (path ,params) => {
    return new Promise((resolve, reject) => {
        axios.delete(`/uma/${path}`, params).then(result => {
            resolve(result.data)
        }, err => {
            reject(err)
        })
    })
}

export default {
    Get,
    Post,
    Put,
    Delete
}