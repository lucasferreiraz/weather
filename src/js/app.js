const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value
    const [{ Key, LocalizedName }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
    const timeIcon = `<img src="./img/icons/${WeatherIcon}.svg" />`

    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    if (cityCard.classList.contains('d-none'))
        cityCard.classList.remove('d-none')

    timeImg.src = IsDayTime ? './img/day.svg' : './img/night.svg'

    cityForm.reset()
})