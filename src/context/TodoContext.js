import {createContext, useContext} from 'react'

export const TodoContxt = createContext({
    todos: [
        {
            id : 1,
            todo : "Todo msg",
            completed : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id, todo) =>{},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})



export const useTodo = ()=>{
    return useContext(TodoContxt)
}

export const TodoProvider = TodoContxt.Provider