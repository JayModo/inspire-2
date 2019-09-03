export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    debugger
    return `
    
   <div class=" ${this.id}">
            <div class="card-header ${this.author}">Header</div>
            <div class="card-body ${this.body}">
            

                `
  }
}