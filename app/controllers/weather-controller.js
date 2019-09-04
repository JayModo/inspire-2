import WeatherService from "../services/weather-service.js";

var _weatherService = new WeatherService()

//NOTE The weather service and controller are mostly done, 
//		you may wish to check out the model and include some additional data.


//TODO Complete rendering data to the screen
function drawWeather() {

	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)


	let weatherElem = document.getElementById('weather')

	let weatherTemplate = `
	
	<div class='card-header' id="${_weatherService.Weather.id}">
	${_weatherService.Weather.city}
	<div	
	class='card-body' id="${_weatherService.Weather.id}">${_weatherService.Weather.kelvin}\ndegrees
${_weatherService.Weather.current}
	</div>	
	<p class="card-text"> Wind Speeds \n${_weatherService.Weather.wind}MPH
	</div>

`
	weatherElem.innerHTML = weatherTemplate

	//FIXME set the weatherelem innerhtml to the weather template
}

export default class WeatherController {


	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

	getWeather() {
		drawWeather()
	}

}
