

const express = require ("express");
const app = express();


    const query ="Miskolc";
    const apiKey = "b91b8da02568551998c4416aea7b0c36";
    const unit = "metric";
    const url= "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit ;
   
    https.get (url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData= JSON.parse(data)
            const temperature= weatherData.main.temp
            const descripcion = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temperature in Miskolc " + temperature + " degrees Celsius.</h1>")
            res.write("<p>The weather is currently " + descripcion + "</p>");
            res.write("<img src=" + imgUrl+">");
            res.send();
        })
    })









app.listen(3000, function(){
    console.log("Server is running! ");
})