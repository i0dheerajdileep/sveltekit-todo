import { Writable, writable } from "svelte/store";

export const todos = writable([])

export const addTodos = (text)=>{
    todos.update((curr)=>{
        const newTodos = [...cur,{text, completed:false , id : Date.now()}]
        return newTodos;

    })
}

export const deleteTodos = (id)=>{
    todos.update((todos)=>{
        todos.update(todos=>todos.filter((todo)=>todo.id != id))        
    })
}

export const toggleTodoCompleted =(id)=>{
    todos.update(todos=>{
        
    })
}