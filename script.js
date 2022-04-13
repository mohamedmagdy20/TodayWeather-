let citylocation = document.getElementById("search");
let submitbtn = document.getElementById("Submit");
cityname = "london";
let Apiaddress;
let W_day = document.getElementById("W-days");
let W_month = document.getElementById("W-month");
let City = document.getElementById("Reagion");
let Temp = document.getElementById("tempreatue");
let Daystateicon = document.getElementById("iconday");
let state = document.getElementById("states");
let humidity = document.getElementById("humidty");
let wind = document.getElementById("wind");
let compass = document.getElementById("compass");

submitbtn.addEventListener("click", () => {
  cityname = citylocation.value;
  DisplatApi();
});

citylocation.addEventListener("keyup", () => {
  cityname = citylocation.value;
  DisplatApi();
});
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
async function DisplatApi() {
  let address = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=9a2047ff078b4f61b3221713213009&q=${cityname}&days=3&aqi=no&alerts=no`
  );
  Apiaddress = await address.json();
  console.log(Apiaddress);
  todayWeather();
  nextDAY();
  nextDAY2();
}
function todayWeather() {
  let Apidate = Apiaddress.forecast.forecastday[0].date;
  console.log(Apidate);
  W_day.innerHTML = days[date.getDay()];
  W_month.innerHTML = `${Apidate}`;
  City.innerHTML = Apiaddress.location.name;
  Temp.innerHTML = `${Math.round(Apiaddress.current.temp_c)} <sup>o</sup> C`;
  Daystateicon.setAttribute("src", `http:${Apiaddress.current.condition.icon}`);
  state.innerHTML = Apiaddress.current.condition.text;
  humidity.innerHTML = Apiaddress.current.humidity;
  wind.innerHTML = Apiaddress.current.wind_kph;
  compass.innerHTML = Apiaddress.current.wind_dir;
}
////////////////////////////////////////////////////
let W_day1 = document.getElementById("W-days1");
let W_month1 = document.getElementById("W-month1");
let tempreatue1 = document.getElementById("tempreatue1");
let Daystateicon1 = document.getElementById("iconday1");
let maxtemp1 = document.getElementById("maxtempreatue1");
let mintemp1 = document.getElementById("mintempreatue1");
let state1 = document.getElementById("states1");
function nextDAY() {
  let nextdayapidate = Apiaddress.forecast.forecastday[1].date;
  console.log(nextdayapidate);
  let nextday = new Date(nextdayapidate);
  //console.log(nextday);
  W_day1.innerHTML = days[nextday.getDay()];
  W_month1.innerHTML = `${nextdayapidate}`;
  Daystateicon1.setAttribute(
    "src",
    `http:${Apiaddress.forecast.forecastday[1].day.condition.icon}`
  );
  maxtemp1.innerHTML = `${Math.round(
    Apiaddress.forecast.forecastday[1].day.maxtemp_c
  )} <sup>o</sup> C`;
  mintemp1.innerHTML = `${Math.round(
    Apiaddress.forecast.forecastday[1].day.mintemp_c
  )} <sup>o</sup> C`;
  state1.innerHTML = Apiaddress.forecast.forecastday[1].day.condition.text;
}
/////////////////////////////////////////////////////////
let W_day2 = document.getElementById("W-days2");
let W_month2 = document.getElementById("W-month2");
let Daystateicon2 = document.getElementById("iconday2");
let maxtemp2 = document.getElementById("maxtempreatue2");
let mintemp2 = document.getElementById("mintempreatue2");
let state2 = document.getElementById("states2");
function nextDAY2() {
  let nextdayapidate = Apiaddress.forecast.forecastday[2].date;
  console.log(nextdayapidate);
  let nextday = new Date(nextdayapidate);
  //console.log(nextday);
  W_day2.innerHTML = days[nextday.getDay()];
  W_month2.innerHTML = `${nextdayapidate}`;
  Daystateicon2.setAttribute(
    "src",
    `http:${Apiaddress.forecast.forecastday[2].day.condition.icon}`
  );
  maxtemp2.innerHTML = `${Math.round(
    Apiaddress.forecast.forecastday[2].day.maxtemp_c
  )} <sup>o</sup> C`;
  mintemp2.innerHTML = `${Math.round(
    Apiaddress.forecast.forecastday[2].day.mintemp_c
  )} <sup>o</sup> C`;
  state2.innerHTML = Apiaddress.forecast.forecastday[2].day.condition.text;
}
DisplatApi();
