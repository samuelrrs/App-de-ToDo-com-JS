var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnAction = document.querySelector("#app button");

var todos = ["Fazer café", "Estudar JS", "Estudar ES6"];

function renderTodos() {
  listElement.innerHTML = "";

  for (var todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");


    var linkText = document.createTextNode(" Excluir");

    var index = todos.indexOf(todo);
    linkElement.setAttribute('onClick', 'deleteTodo(' + index + ')')


    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
}

btnAction.onclick = addTodo;

function deleteTodo (index) {
    todos.splice(index, 1);
    renderTodos()
}
