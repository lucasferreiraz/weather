const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

const showCityCard = () => {
    if (cityCard.classList.contains('d-none'))
    cityCard.classList.remove('d-none')
}

const showCityWeatherInfo = async (cityName) => {
    const [{ Key, LocalizedName }] = await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)
    const timeIcon = `<img src="./img/icons/${WeatherIcon}.svg" />`

    timeImg.src = IsDayTime ? './img/day.svg' : './img/night.svg'
    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    showCityCard()
    showCityWeatherInfo(inputValue)

    cityForm.reset()
})