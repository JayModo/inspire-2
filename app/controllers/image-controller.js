import ImageService from "../services/image-service.js";

const _is = new ImageService()



function _drawImg() {

  document.getElementById('bg-image').innerHTML
  console.log("the image is trying?")
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    debugger
    _is.addSubscriber("image", _drawImg)
    _is.getUrl(document.getElementById('bg-image').innerHTML)
    _drawImg()
  }
  getUrl() {

  }


}

