const apiKey = "8f779747c50dff6f7757ef30d3a796a9"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

searchBox = document.querySelector('.search input')
searchBtn = document.querySelector('.search button')


async function weatherFor(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  city = data.name
  temp = data.main.temp
  humidity = data.main.humidity
  wind = data.wind.speed

  console.log(data)

  document.querySelector('.temp').innerHTML = Math.round(temp) + "°C";
  document.querySelector('.city').innerHTML = city;
  document.querySelector('.humidity').innerHTML = humidity + "%";
  document.querySelector('.wind').innerHTML = wind + "km/h";
}

searchBtn.addEventListener("click", ()=>{
  weatherFor(searchBox.value)
})






