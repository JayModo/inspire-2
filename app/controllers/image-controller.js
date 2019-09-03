import ImageService from "../services/image-service.js";

const _is = new ImageService()





function _drawImg() {
  let imgElem = "<div class=" + _is.image.id + ">"
  imgElem += "<img class= 'background' src= " + _is.image.url + " >"
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



