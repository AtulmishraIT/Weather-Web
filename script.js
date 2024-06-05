let list = document.getElementById("City");
let URL = "https://api.openweathermap.org/data/2.5/weather?q=ulhasnagar&appid=7bdb0971e6b57f7f37af1c2a4a9caef6";
let button = document.querySelector("button");
let temprature = document.querySelector("temperature");
let cityV = document.getElementById("cityV");
let feels = document.getElementById("feels");
let overcast = document.getElementById("overcast")
let input1;

async function getvalue(){
 input = document.getElementById("inp").value;
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7bdb0971e6b57f7f37af1c2a4a9caef6`;
 let response = await fetch(url);
 let cloud;
    const weat = await response.json();
    temp = weat.main.temp - 273.15;;
    tempc = Math.floor(temp);
    feels_like = weat.main.feels_like - 273.15;
    cast = weat.weather[0].main;
    console.log(temp + "deg C");
    console.log(weat.name);
    console.log(feels_like + "deg C")
    console.log(weat.weather[0].main);
    console.log(weat.main.temp);
    console.log(weat);
    if(cast === "Clouds"){
        cloud = " <i class='fa-solid fa-cloud'></i>";
    }
    else if(cast === "Clear"){
        cloud = " <i class='fa-solid fa-sun'></i>";
    }
    else if(cast === "Rainy"){
        cloud = ' <i class="fa-solid fa-cloud-showers-heavy"></i>';
    }
    else if(cast === "Haze"){
        cloud = ' <i class="fa-solid fa-smog"></i>';
    }
    else if(cast === "Cloud bolt"){
        cloud = ' <i class="fa-solid fa-cloud-bolt"></i>';
    }
    temperature.innerHTML = tempc + "\u00B0" + "C" + cloud;
    cityV.innerText = weat.name;
    feels.innerText = "Feels like " + Math.floor(feels_like) + "\u00B0" + "C";
    overcast.innerText = cast;
}

cityName1.forEach(function(item) {
    let option = document.createElement("option");
    option.value = item;    
    list.appendChild(option);
}
);