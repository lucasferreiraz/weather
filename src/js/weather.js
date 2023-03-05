const APIKey = '2M7tf1pJ8QcV9OC6DWNKCB07ScgkzqVO'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
    `${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) =>
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados.')
        }

        return response.json()
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
        const [cityData] = await getCityData(cityName)
        return fetchData(getWeatherUrl(cityData))
}
