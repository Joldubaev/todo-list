let main=document.createElement('main')
main.classList.add('container')

document.body.prepend(main)

let projectName=document.createElement('h1')
projectName.innerHTML="Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className = "mainBlock"
main.append(listBlock)

let firstDiv=document.createElement('div')
listBlock.append(firstDiv)

let textIn=document.createElement('input')
textIn.className="textIn"
textIn.setAttribute('placeholder','Gonna do it')
firstDiv.append(textIn)

let setDate=document.createElement('input')
setDate.setAttribute('type','date')
firstDiv.append(setDate)

let addBtn=document.createElement('button')
addBtn.innerHTML='Add'
addBtn.id='addBtn'
firstDiv.append(addBtn)

let list =document.createElement('ul')
listBlock.append(list)

let todosArray=localStorage.getItem('todos')==null
?[]
:[...JSON.parse(localStorage.getItem('todos'))]
//   console.log(localStorage.getItem('todos'))

addBtn.addEventListener('click',addTodo)