export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.message = data.message

  }
  // hello hello



  get Template() {
    return `
    <div class="col-4">
    <div class="" style="width: 18rem;">
    <div class="card-body"${this._id}>
      <p class="card-text">${this.description}</p>
      <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">x</button>
      <a onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-danger">remove list</a>
    </div>
  </div>
    `
  }
}