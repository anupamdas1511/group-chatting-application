import { Axios } from './axios-config.js'


export const addUser = (user) => {
    Axios.post('/user', user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}