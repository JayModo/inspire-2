import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
//connect the draw to the method
function _drawTodos() {
	let tasks = _todoService.Todos
	//FIXME add the _todoService.todos.length to the page
	let template = _todoService.Todos.length + '<ul>'
	tasks.forEach(t => {
		template += t.Template
	});
	document.getElementById('todos').innerHTML = template + '</ul>'

}
function completeLine() {
	document.getElementById('completed-task').style.textDecoration = "line-through"

}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
			//TODO build the todo object from the data that comes into this method
		}
		_todoService.addTodo(todo)
		_drawTodos()
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(e) {
		_todoService.toggleTodoStatus(e)
		_drawTodos()
		completeLine()
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
		_drawTodos()
	}



}
