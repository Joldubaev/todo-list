
const creatItem=(todo,id)=>{
   let item = `
   <li
         key="${id}"    
         class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
         ${todo.title} ${todo.date ? todo.date:''}
         <img  class="btn" src="check-icon.png" onclick="completeTodo(event)"/>
         <img class="btn" src="delete-icon.png" onclick="deleteTodo(event)"/>
      </li>
      `
   return item
}

const rederTodoItems=()=>{
   list.innerHTML = ''
   let items = []
// console.log(todosArray.length)
// console.log(Boolean(1))
todosArray.length ?
  todosArray.map((todo,id)=>{
     items.unshift(creatItem(todo,id))
     list.innerHTML=items.join('')
   }):
  list.prepend('Азыркы учурда тапшырма жок')
  }
  rederTodoItems()