<script>
    import {deleteTodos, toggleTodoCompleted} from "../stores/todoStore"
    export let todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <input type="checkbox" name="completed" checked={todo.completed} on:change={()=>toggleTodoCompleted(todo.id)} class="mr-2 form-checkbox h-5 w-5"/>
    <span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
    <button type="button" class="text-sm bg-red-500 hover:bg-red-600 py-1 px-2 foxus:outline-none focus:shadow-outline " on:click={()=>deleteTodos(todo.id)}>Delete task</button>
</li>