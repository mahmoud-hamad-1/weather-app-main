const searchinput = document.getElementById("searchinput")
// const m = document.getElementById("m")
const rowforcolimns = document.getElementById("rowforcolimns")
let countryapis 


function GEtdatafromapi(pam){
    let http = new XMLHttpRequest()
    http.open("GEt",`https://api.weatherapi.com/v1/forecast.json?key=beaa6830775a4e99910131438220406&q=${pam}07112&days=3`)
    http.send()
    http.addEventListener("readystatechange",function(){
        if(http.readyState==4){
            console.log(JSON.parse(http.response));
            countryapis = JSON.parse(http.response)
            console.log(countryapis);
            
            showweather()
    
        }
    })
    
}




searchinput.addEventListener("input",function(e){
    GEtdatafromapi(e.target.value)

    console.log(e.target.value);
})


let todaydate = new Date()

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


let day = new Date()

function showweather() {

    let columns = `
    <div class=" col-md-4   ">
                <div class="d-flex justify-content-between bg-darkcss">
                    <h5>${days[day.getDay()]}</h5>
                    <div>
                    <h5>${countryapis.forecast.forecastday[0].date}</h5>
                    </div>
                   
                    
                </div>
                <div class="bg-body-secondarycss  h-100 p-3">
                
                    <h6>${countryapis.location.name}</h6>
                    
                    <div class="d-flex justify-content-between">
                        <h2>${countryapis.current.temp_c}<sup>o</sup>c</h2>
                        <img src="https:${countryapis.current.condition.icon}" alt="">
                    </div>
                    <div>
                        <h6 class="text-info">${countryapis.current.condition.text}</h6>
                    </div>
                    <div class="d-flex">
                        <div>
                            <img src="images/icon-umberella@2x.png" width="21" height="21" alt="">
                           <span>${countryapis.current.humidity}%</span> 
                        </div>
                        <div class="ms-2">
                            <img src="images/icon-wind@2x.png" width="21" height="21" alt="">
                           <span>${countryapis.current.wind_kph}</span>
                        </div>
                        <div class="ms-2">
                            <img src="images/icon-compass@2x.png" width="21" height="21" alt="">
                           <span>${countryapis.current.wind_dir}</span>
                        </div>
                    </div>
                </div>
            </div>
    
    









    
            <div class="col-md-4 ">
                <div class="d-flex justify-content-center p-1 bg-dangercss3">
                    <span class="text-center">${days[new Date(countryapis.forecast.forecastday[1].date).getDay()]}</span>
                   
                </div>
                <div class="bg-body-secondarycss3 text-center h-100 p-3">
                    <img src="https:${countryapis.forecast.forecastday[1].day.condition.icon}" width="21" height="21" alt="">
                <div class=text-center">
                    <img src="" alt="">
                    <h2>${countryapis.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</h2>
                    <h6>${countryapis.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></h6>
                    <span class="text-info">${countryapis.forecast.forecastday[1].day.condition.text}</span>
                </div>
                </div>  
            </div>









            <div class="col-md-4 ">
                <div class="d-flex justify-content-center  p-1  bg-darkcss">
                    <span class="text-center">${days[new Date(countryapis.forecast.forecastday[2].date).getDay()]}</span>
                </div>
                <div  class="bg-body-secondarycss h-100 text-center p-3">
                    <img src="https:${countryapis.forecast.forecastday[2].day.condition.icon}" width="21" height="21" alt=""> 
                <div class=text-center">
                    <img src="" alt="">
                    <h2>${countryapis.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</h2>
                    <h6>${countryapis.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></h6>
                    <span class="text-info">${countryapis.forecast.forecastday[2].day.condition.text}</span>
                </div>
                </div>    
            </div>










    
    `





  
    rowforcolimns.innerHTML=columns
   
}





