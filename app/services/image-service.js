import Image from "../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});
console.log("img serv")

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

//TODO create methods to retrieve data, trigger the update window when it is complete
export default class ImageService {
	get image() {
		return _state.image
	}


	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}


	getUrl(res) {
		console.log('Calling the img')
		imgApi.get()
			.then(res => {
				_setState('image', res.data)
				console.log(res.data)
			})

	}



}
