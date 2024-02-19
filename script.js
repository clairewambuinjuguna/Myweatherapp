/*const apiKey="047e82a3493503fd3349718fd1e42b74";
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
    */
    /*const apiKey = "047e82a3493503fd3349718fd1e42b74";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon=document.querySelector(".weather-icon")

    const cityElement = document.querySelector(".city");
    const tempElement = document.querySelector(".temp");
    const humidityElement = document.querySelector(".humidity");
    const windElement = document.querySelector(".wind");
    
    async function checkWeather(city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status==404) {
                document.querySelector(".error").style.display="block";//error handling  display error message
                document.querySelector(".weather").style.display="none";//hide the weather in4
            }else{
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "./assets/clouds.png";
                } else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "./assets/drizzle.png";
                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "./assets/clear.png";
                } else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "./assets/rainy.png";
                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "./assets/mist.png";
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "./assets/clear.png";
                }
        
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";

            }
            const data = await response.json();
            console.log(data);
            cityElement.innerHTML = data.name; // update city name
            tempElement.innerHTML = Math.round(data.main.temp) + "°C"; // update temperature
            humidityElement.innerHTML = data.main.humidity + "%"; // update humidity
            windElement.innerHTML = data.wind.speed + "km/h"; // update windspeed
    
            // Update weather icon based on weather condition
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "./assets/clouds.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./assets/drizzle.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./assets/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "./assets/rainy.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "./assets/mist.png";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./assets/clear.png";
            }
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
            // Handle error: Display a message to the user or perform other actions
        }
        document.querySelector(".weather").style.display="block"
    }
    
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value.trim()); // pass city name into the async function
    });
    
    // Handle Enter key press in the input field
    searchBox.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            checkWeather(searchBox.value.trim());
        }
    });*/

/*const apiKey = "047e82a3493503fd3349718fd1e42b74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block"; //error handling display error message
            document.querySelector(".weather").style.display = "none"; //hide the weather info
        } else {
            const data = await response.json(); // Move the declaration here
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "./assets/clouds.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./assets/drizzle.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./assets/clear.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "./assets/rainy.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "./assets/mist.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./assets/clear.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            cityElement.innerHTML = data.name; // update city name
            tempElement.innerHTML = Math.round(data.main.temp) + "°C"; // update temperature
            humidityElement.innerHTML = data.main.humidity + "%"; // update humidity
            windElement.innerHTML = data.wind.speed + "km/h"; // update windspeed
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        // Handle error: Display a message to the user or perform other actions
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim()); // pass city name into the async function
});

// Handle Enter key press in the input field
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
*/
const apiKey = "047e82a3493503fd3349718fd1e42b74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.error("Error fetching weather data. HTTP Status:", response.status);
        return;
    }

    const data = await response.json();

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/drizzle.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/rainy.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/mist.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
    humidityElement.innerHTML = data.main.humidity + "%";
    windElement.innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
