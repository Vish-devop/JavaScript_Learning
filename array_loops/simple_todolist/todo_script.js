const todoList=[]

function addTodo(){
    const inputEle=document.querySelector(".js-name-input")
    const name=inputEle.value;

    todoList.push(name)
    console.log(todoList)

    inputEle.value=" "
    renderTodoList()
}
    
    function renderTodoList(){
        let todoListHTML=""
        for (let i=0; i<todoList.length; i++)
        {
            const todo=todoList[i]
            const html=`<p>${todo}</p>`
            todoListHTML+=html
        }
        document.querySelector(".js-todo-list").innerHTML=todoListHTML
}