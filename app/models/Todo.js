export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.message = data.message

  }




  get Template() {
    return `
    <div class="col-4">
    <ul id="completed-task"
    <div class="" >
    <div class="card-body"${this._id}>
   
    <p class="card-text">${this.description}</p>
    
    <input type="checkbox"  onclick=" app.controllers.todoController.toggleTodoStatus('${this._id}')">
      <a onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-danger">remove list</a>
    </div>
    </ul>
  </div>
    `
  }
}