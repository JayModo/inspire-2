export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url
  }

  get Template() {
    debugger
    return `
    
   <div class=" ${this.id}">
            <img src="${this.url}">
            <div class="card-body">
            

                `
  }










}