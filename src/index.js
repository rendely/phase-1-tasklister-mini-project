document.addEventListener("DOMContentLoaded", () => {
  //EL on submit button prevents default and appends child to-do if not empty
  document.querySelector('form').addEventListener('submit', e=>{
    e.preventDefault();
    const todo = e.target['new-task-description'].value;
    //Only add if not empty
    todo.length > 0 ? addTodo(todo) : console.log('empty');
    //Clear input after
    e.target['new-task-description'].value = '';
  })
});

// Add to do to list
function addTodo(todo){
  console.log(todo);
  const taskList = document.querySelector('#tasks');
  const newTodo = document.createElement('li');
  newTodo.textContent = todo;
  taskList.appendChild(newTodo);
}

