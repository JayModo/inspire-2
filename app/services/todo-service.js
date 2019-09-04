//NOTE your service is all set up for the observer pattern but there is still work to be done
import Todo from "../Models/Todo.js"
// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jeremyO/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {

	get TodoError() {
		return _state.error
	}
	get Todos() {
		return _state.todos.map(t => new Todo(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				_setState('todos', res.data.data)
				console.log(res.data.data)
				//TODO Handle this response from the server
				//	this.saveTask()
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				_state.todos.push(new Todo(res.data.data))
				_setState('todos', _state.todos)
				//	this.saveTask()
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
			})
			.catch(err => _setState('error', err.response.data))
	}
	// changing the completed status to true wich marks it done
	toggleTodoStatus(todoId) {

		_state.todos.find(t => t._id == todoId)
		let todo = _state.todos[0]
		todo == false
		todoApi.put(todoId, { completed: true })
			.then(res => {
				//	_setState("todos", _state.todos)
				console.log("changed")
				this.getTodos()
			})
			//TODO Make sure that you found a todo, 
			//		and if you did find one
			//		change its completed status to whatever it is not (ex: false => true or true => false)

			//	todoApi.put(todoId, todo)
			//	.then(res => {


			//TODO do you care about this data? or should you go get something else?

			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				let index = _state.todos.findIndex(t => t._id == _state.todos)
				_state.todos.splice(index, todoId)
				_setState('todos', _state.todos)
				this.getTodos()
			})
			.catch(err => {
				console.error(err)
			})
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
	}
	// saveTask() {
	// 	localStorage.setItem('completed-task', JSON.stringify(_state.todos))
	// }

}


