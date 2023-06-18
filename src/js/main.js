const cityLabel          = document.querySelector(" header > h1 span");

const searchForm         = document.querySelector(" header .main_form")
const searchInput        = document.querySelector(" header form h1 input");

const weatherStatus      = document.querySelector(" main .weather h2");
const weatherStatusImage = document.querySelector(" main .weather img");

const tempurature        = document.querySelector(" main .temp h1 span");
const windSpeed          = document.querySelector(".details .wind-speed h3 span");
const humidity           = document.querySelector(".details .humidity h3 span");

const apiKey = "a1c4d5edd97fdaeb7f77f9754c99b11e";

const GetData = async (city)=>
{
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)

  if (request.status == 200)
  {
    // Get Json
    const respond = await request.json()

    // Refresh Ui
    weatherStatus.innerText = respond.weather[0].main;
    tempurature.innerText = Math.trunc(respond.main.temp - 273.15);
    cityLabel.innerText = respond.name;
    searchInput.value = city;
    windSpeed.innerText = respond.wind.speed;
    humidity.innerText = respond.main.humidity;
  }
}

window.addEventListener("load", ()=>{GetData("Egypt")})
searchForm.addEventListener("submit", (event)=>{
  event.preventDefault()
  GetData(searchInput.value)
})