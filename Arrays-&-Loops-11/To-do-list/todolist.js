const listArray = [];

renderTodoList();

function renderTodoList() {
  let todolistHTML = "";

  for (let i = 0; i < listArray.length; i++) {
    const html = `<p>${listArray[i]}</p>`;
    todolistHTML += html;
  }

  console.log(todolistHTML);

  document.querySelector(".js-topics-div").innerHTML = todolistHTML;
}

function addTodo() {
  const topic = document.querySelector(".js-input");
  listArray.push(topic.value);
  console.log(listArray);

  topic.value = "";
  renderTodoList();
}
