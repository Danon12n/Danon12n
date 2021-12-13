import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todoList: [
        {
            id: 0,
            text: 'завалить ебало',
            status: false,
        },
        {
            id: 1,
            text: 'точно завалить ебало',
            status: false,
        },
    ]
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const executeTodo = createAction('EXECUTE_TODO');

export default createReducer(initialState, {
    [increment]: (state) => {
        state.count++;
    },
    [decrement]: (state) => {
        state.count--;
    },
    [executeTodo]: (state, id) => {
        state.todoList.map(e => {
            if (e.id === id.payload) {
                e.status = !e.status;
            }
        })
    }
})

