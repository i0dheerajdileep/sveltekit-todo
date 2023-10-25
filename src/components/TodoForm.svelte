<script>
    let todo = '';
    import {addTodos} from '../stores/todoStore'
    const handleSubmit = (e)=>{
        console.log("submited")
        addTodos(todo)
        todo = '';
    }

</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-gray-800" for="todo">Todo</label>
        <input type="text" name="todo" bind:value={todo} placeholder="what to do?" class="shadow-sm border-gray-800 border-2 p-2 rounded-lg w-auto">
    </div>
    <button type="submit" class="w-min-content shadow-sm rounded-xl bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 border-gray-500 border-2">Submit</button>
</form>
