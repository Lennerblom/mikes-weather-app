// eslint-disable
// this is an auto generated file. This will be overwritten

export const weatherByCity = `query WeatherByCity($city: String!) {
  weatherByCity(city: $city) {
    timestamp
    location
    condition
    description
    temperature
    pressure
    humidity
    wind_speed
    wind_direction
    cloud_cover
    rain_volume
    snow_volume
  }
}
`;
