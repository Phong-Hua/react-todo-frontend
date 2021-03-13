const {login} = require('../src/utils/api/user');

test('Should be able to login', async () => {
    const email = 'userone@mail.com';
    const password = 'Userone1234';
    login(email, password)
})