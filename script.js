//accessing elements
let list = document.getElementById("City");
let temprature = document.querySelector("temperature");
let cityV = document.getElementById("cityV");
let feels = document.getElementById("feels");
let overcast = document.getElementById("overcast");
let form = document.querySelector("form");
let body = document.querySelector("body");
let github = document.querySelector("#github1");
let video = document.querySelector("video");
let head = document.querySelector(".head");

function isOnline(){
    console.log("Online");
}
function isOffline(){
    alert('You are offline now, Please check your Internet Connection');
}

 form.addEventListener('submit',async (e) => {
    e.preventDefault();
    let input2 = document.getElementById("inp").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=7bdb0971e6b57f7f37af1c2a4a9caef6`;
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
           video.innerHTML = '<source src="cloudy.mp4">';
       }
       else if(cast === "Clear"){
           cloud = " <i class='fa-solid fa-sun'></i>";
           video.innerHTML = '<source src="clear.mp4">';
       }
       else if(cast === "Rain" || cast === "Rainy"){
           cloud = ' <i class="fa-solid fa-cloud-showers-heavy"></i>';
           video.innerHTML = '<source src="rain.mp4">';
       }
       else if(cast === "Haze" || cast === "Mist"){
           cloud = ' <i class="fa-solid fa-smog"></i>';
           video.innerHTML = null;
           video.innerHTML = '<source src="fog.mp4">';
       }
       else if(cast === "Cloud bolt"){
           cloud = ' <i class="fa-solid fa-cloud-bolt"></i>';
       }
       else{
        video.innerHTML = null;
       }
       temperature.innerHTML = tempc + "\u00B0" + "C" + cloud;
       cityV.innerText = weat.name;
       feels.innerText = "Feels like " + Math.floor(feels_like) + "\u00B0" + "C";
       overcast.innerText = cast;
       form.style.border = '1px solid black';
       form.style.backgroundColor = 'rgba(255,255,255,0.1)';
       head.innerHTML = "<h2><i class='fa-solid fa-temperature-high'></i> Weather</h2>";
       github.innerHTML = 'Made By <a href="https://github.com/AtulmishraIT/Weather-Web">Atul Mishra<hr>'       
});
cityName1.forEach(function(item) {
    let option = document.createElement("option");
    option.value = item;    
    list.appendChild(option);
}
);
