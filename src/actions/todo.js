const RECEIVE_TODOS = 'RECEIVE_TODOS';

const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    }
}

module.exports = {
    RECEIVE_TODOS,
    receiveTodos,
}