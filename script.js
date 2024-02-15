const apiKey="047e82a3493503fd3349718fd1e42b74";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const Searchbox=document.querySelector(".search input");
const SearchBTn=document.querySelector(".search button");
//handle asynchronous operations, such as making network requests, reading from a file, or handling timers. Asynchronous functions leverage Promises and the async/await syntax to make asynchronous code more readable and maintainable. 
    async function checkWeather(city){
        const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data =await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name; //update city name
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c"; //update temperature
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%"; //update humidity
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"; //update windspeed
    }
    SearchBTn.addEventListener("click",()=>{
        checkWeather(Searchbox.value);//pass city name into the async function
    })
    