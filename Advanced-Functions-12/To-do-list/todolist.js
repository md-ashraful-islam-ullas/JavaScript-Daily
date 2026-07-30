const listArray = [
  { name: "Wash Dishes", dueDate: "2022-12-22" },
  { name: "Listen Music", dueDate: "2022-12-22" },
];

renderTodoList();

function renderTodoList() {
  let todolistHTML = "";

  listArray.forEach(function (todoObj, index) {
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;

    // const { name, dueDate } = todoObj;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="listArray.splice(${index},1); renderTodoList();">Delete</button>
    `;
    todolistHTML += html;
  });

  document.querySelector(".js-topics-div").innerHTML = todolistHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const dateInputElement = document.querySelector(".js-due-date-input");

  listArray.push({ name: inputElement.value, dueDate: dateInputElement.value });

  inputElement.value = "";
  dateInputElement.value = "";
  renderTodoList();
}
