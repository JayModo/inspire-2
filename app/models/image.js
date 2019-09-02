export default class Image {
  constructor(data) {
    this.id = data.id
    this.large_url = data.large_url
  }

  get Template() {
    return `
  <img src="${this.large_url}" alt="">
    `
  }










}