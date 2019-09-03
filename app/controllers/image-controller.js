import ImageService from "../services/image-service.js";

const _is = new ImageService()



// debugger
// let image = _is.image
//let template = ''
//image.forEach(i => {
//template += i.Template
//})
// let image = _is.image
// let template = ``
// image.forEach(i => {
//   template += i.Template
// })
//lol

function _drawImg() {
  let imgEle = "<div class=" + _is.image.id + ">"
  imgEle += "<img class= 'background' src= " + _is.image.url + " >"
  document.getElementById('bg-image').setAttribute('background', _is.image.url)

  //document.getElementById('bg-image').insertAdjacentHTML('afterbegin', imgEle);
  console.log('hello there', _is)


}
// document.getElementById('bg-image').innerHTML = template + ``



//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    debugger
    _is.addSubscriber("image", _drawImg)
    _is.getUrl()
  }
  getUrl(url) {
    _is.getUrl(url)
    _drawImg()
  }









}



