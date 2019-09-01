import ImageService from "../services/image-service.js";

const _is = new ImageService()



function _drawImg() {
  let Img = _is.image
  document.getElementById('bg-image').innerHTML
  console.log("the image is trying?")
}

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber("image", _drawImg)
    _is.getUrl(_is.image)
    _drawImg()
  }
  getUrl() {

  }


}

