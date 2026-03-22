let todoList = [{items: 'Study JavaScript', 
  dueDate: '2024-06-30'

},  
 {items: "Make Notes",
  dueDate: '2024-07-01'
 }, 

  ];
   
displayitems();
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
   let dateElement = document.querySelector('#todo-date');


  let todoItem = inputElement.value; 
  let todoDate = dateElement.value;

  todoList.push({items :todoItem, 
    dueDate: todoDate});

  inputElement.value = '';
    dateElement.value = '';
  displayitems();
}

function displayitems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  
  for (let i = 0; i < todoList.length; i++) {
   //  let item = todoList[i].items;
   //  let dueDate = todoList[i].dueDate;
    let {items, dueDate} = todoList[i];
    newHtml +=`
    <span>${items}</span>
    <span>${dueDate}</span>
     <button class='btn-delete' onclick="todoList.splice(${i}, 1);
     displayitems();">Delete</button>
    `;
   

  }
  containerElement.innerHTML = newHtml;
  }
  


  