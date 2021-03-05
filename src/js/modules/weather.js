'use strict'

function weather() {
  const container = document.querySelector('.main-header__wrapper')

  const timeWeatherContainer = document.createElement('div')
  timeWeatherContainer.classList.add('time-weather-container')

  const time = document.createElement('div')
  time.classList.add('time')

  const weather = document.createElement('div')
  weather.classList.add('weather')

  function setZero(num) {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  function createClock() {
    const date = new Date(),
      year = date.getFullYear(),
      months = setZero(date.getMonth()),
      day = setZero(date.getDate()),
      hour = setZero(date.getHours()),
      min = setZero(date.getMinutes()),
      sec = setZero(date.getSeconds())

    time.textContent = `${day}/${months}/${year} ${hour}:${min}:${sec}`
  }
  setInterval(createClock, 1000)
  timeWeatherContainer.appendChild(time)

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e04642fda9ce051d847b5e3eb80ae6ab`
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          const container = document.createElement('div')
          container.classList.add('weather')
          container.innerHTML = `
            <div class="weather__city">${data.name}</div>
            <div class="weather__degrees"><img height="45" src="https://openweathermap.org/img/wn/${
              data.weather[0]['icon']
            }@2x.png">
              ${Math.round(data.main.temp - 273.15)}&deg;C
            </div>
            <div class="weather__feels">Відчувається як ${Math.round(data.main.feels_like - 273.15)}&deg;C</div>
          `
          timeWeatherContainer.appendChild(container)
        })
    })
  }

  container.prepend(timeWeatherContainer)
}

export default weather
