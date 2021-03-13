const axios = require('axios');

const api = 'http://localhost:5000';

const getTodos(authToken) => 
axios.get(`${api}/todos`)
.then(response => response.data)

module.exports = {
    getTodos,
}