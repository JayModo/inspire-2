export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    //FIXME add in the rest of the necessary weather data
    this.city = data.name
    this.kelvin = (data.main.temp) * 1.8 - 459.67
    this.clouds = data.clouds
    this.sys = data.sys
    this.coord = data.coord
    this.wind = data.wind.speed
    this.current = data.weather[0].description
    this.icon = data.weather[0].icon
  }

  get Template() {
    return `
  
  
    `
  }






}