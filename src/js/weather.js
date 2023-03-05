const APIKey = '2M7tf1pJ8QcV9OC6DWNKCB07ScgkzqVO'
const getCityUrl = cityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok){
            throw new Error('Não foi possível obter os dados.')
        }

        const [cityData] = await response.json()
        return cityData
    } catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}