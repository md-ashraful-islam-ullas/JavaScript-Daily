const listArray = JSON.parse(localStorage.getItem('todolist')) || [];

renderTodoList();

function renderTodoList() {
  let todolistHTML = "";

  for (let i = 0; i < listArray.length; i++) {
    const todoObj = listArray[i];
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;

    // const { name, dueDate } = todoObj;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="listArray.splice(${i},1); saveToStorage(); renderTodoList();">Delete</button>
    `;
    todolistHTML += html;
  }

  document.querySelector(".js-topics-div").innerHTML = todolistHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const dateInputElement = document.querySelector(".js-due-date-input");

  listArray.push({ name: inputElement.value, dueDate: dateInputElement.value });

  inputElement.value = "";
  dateInputElement.value = "";
  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todolist", JSON.stringify(listArray));
}

// {name: 'Wash Dishes', dueDate: '2022-12-22'},
//   {name: 'Listen Music', dueDate: '2022-12-22'}
