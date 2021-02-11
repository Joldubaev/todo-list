const addTodo=()=>{
   let newTask=textIn.value
   let date=setDate.value
   
   if(newTask !=''){
      todosArray.push({
         title:newTask,
         checked:false,
         date,

      })
      localStorage.setItem('todos',JSON.stringify(todosArray))
      rederTodoItems()

      textIn.value=''
      setDate.value=''
   }
}
const deleteTodo=(e)=>{
   let index=parseInt(e.target.parentNode.getAttribute('key'))
   todosArray.splice(index,1)
   localStorage.setItem('todos',JSON.stringify(todosArray))
   rederTodoItems()
}

const completeTodo=(e)=>{
   let todosTemporary=[...todosArray] //copy

   let index=parseInt(e.target.parentNode.getAttribute('key'))
   // console.log(typeof e.target.parentNode.id)
   // console.log(index)//2
   let objElement=todosTemporary[index].checked
   todosTemporary[index].checked= !objElement//perezapis znachenie

   localStorage.setItem('todos',JSON.stringify(todosTemporary))
   // console.log(todosTemporary)

   let isDone = e.currentTarget.parentNode.classList.contains('taskItem-done')
   if(isDone){
      e.currentTarget.parentNode.classList.remove('taskItem-done')
      e.currentTarget.parentNode.classList.add('taskItem')
   }else{
      e.currentTarget.parentNode.classList.add('taskItem-done')
      e.currentTarget.parentNode.classList.remove('taskItem')
   }
  
   
}
const getTodos=()=>{
     fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
     .then(response=>response.json())
     .then(array=>{   
        localStorage.setItem('todos',JSON.stringify(array))
   })
  }
  getTodos()