// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}
//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	get quote() {
		return _state.quote
	}


	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote(id) {

		console.log('calling the quote')
		_quoteApi.get(id)
			.then(res => {
				_setState('quote', res.data)
				console.log(res.data.quote.body)
				console.log(_state.quote)
				return _state.quote
			})
	}












}
