let button =document.getElementById("btn");
let inputcity =document.getElementById("inputcity") ;
let cityname =document.getElementById("cname");
let temperature =document.getElementById("temp");
let description =document.getElementById("desc");


button.addEventListener("click",function(){
    // document.getElementById("cname").innerHTML = "Hello World";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputcity.value+"&appid=93e5edf8ebd5fc3063a37c66ab576f61")
    .then(response=>response.json())
    .then(data=> {
        console.log(data);
        let citynameValue = data["name"];
        let fetchedtemperature=data["main"]["temp"];
        let descriptionValue=data["weather"][0]["description"];
        let temperatureValue=(fetchedtemperature-273.15).toFixed(2);
        let id=data['weather'][0]['id']


        document.getElementById("cname").innerHTML=citynameValue;
        document.getElementById("temp").innerHTML=temperatureValue + "°C";
        document.getElementById("desc").innerHTML=descriptionValue;

        let body =document.getElementById("result");

        if(id>=200)
        {
            body.style.backgroundColor = "red";

        }
        if(id>=300)
        {
            body.style.backgroundColor = "coral";
            
        }
        if(id>=500)
        {
            body.style.backgroundColor = "gray";
            
        }
        if(id>=600)
        {
            body.style.backgroundColor = "whitesmoke";
            
        }
        if(id>=700)
        {
            body.style.backgroundColor = "smoke";
            
        }
        if(id==800)
        {
            body.style.backgroundColor = "yellow";
        }
        else if(id>800)
        {
            body.style.backgroundColor = "lightgreen";
        }
    })
}) 

