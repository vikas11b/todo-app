let ctr=3;
let todos=[
  {
    id:1,
    description:"go to gym"
  },{
    id:2,
    description:"have dinner"
  }
]
function addTodo()
{
  todos.push(
    {
      id:ctr++,
      description:document.querySelector("input").value.trim()
    }
  )
  render(todos)
  document.querySelector("input").value="";
}
function deleteLast()
{
  todos.splice(todos.length-1,1);
  render(todos)
}
function deleteFirst()
{
  todos.splice(0,1)
  render(todos)
}
function render(todos)
{
  const list=document.getElementById('root');
  list.innerHTML="";
  todos.forEach(todo=>{
    const div= document.createElement("div");
    const h4=document.createElement("h4");
    h4.textContent=todo.description;
    div.appendChild(h4);
    div.setAttribute('data-id',todo.id);
    list.appendChild(div);
  })
}
render(todos);