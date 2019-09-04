export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.message = data.message

  }



  // <div class="" >
  // <div class="card-body">

  get Template() {
    return `<li id="completed-task">
    <div class="col-4">
     
   
    
    <input type="checkbox" ${this.completed ? "checked" : ""}  onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
    <a onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-danger">remove list</a>
    </div>
    </li>
    
  </div>
    `
  }
}