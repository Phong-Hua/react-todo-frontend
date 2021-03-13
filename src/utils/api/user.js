const axios = require('axios');

const api = 'http://localhost:5000';
const headers = {
    'Content-Type': 'application/json'
}

const _login = (email, password) =>
    axios.post(`${api}/users/login`, {
        email,
        password
    })
    .then(response => response.data)

module.exports = {
    _login,
}