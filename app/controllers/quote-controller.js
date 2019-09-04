import QuoteService from "../services/quote-service.js";

let _qs = new QuoteService()


function _drawquote() {
  //FIXME Draw the rest of the quote data to the screen
  //TODO now style where you want it and size
  let quoteElem = document.getElementById('quote')
  let quote = `
  <div class='card-body' id="${_qs.quote.quote.id}">${_qs.quote.quote.body}
  </div>
  <p class="card-text"${_qs.quote.quote.id}"> ${_qs.quote.quote.author}</div>`
  quoteElem.innerHTML = quote
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {

    _qs.addSubscriber("quote", _drawquote)
    _qs.getQuote()
  }
  getQuote() {
    _qs.getQuote()
    _drawquote()
  }
}