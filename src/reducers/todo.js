import { RECEIVE_TODOS } from '../actions/todo'

export default function todo (state={}, action) {
    switch (action.type) {
        case RECEIVE_TODOS:
            // convert an array to object with the key is id of currentTodo
            return action.todos.reduce((accumulator, currentTodo)=>{
                return accumulator[currentTodo._id] = currentTodo
            }, {...state})
        default:
            return state;
    }
}