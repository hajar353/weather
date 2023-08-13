
var dataDayOne=document.querySelector('#dataDayOne')
var textDayOne=document.querySelector('#textDayOne')
var nameDayone=document.querySelector('#nameDayone')
var tempDayOne=document.querySelector('#tempDayOne')
var iconDayOne=document.querySelector('#iconDayOne')
var dayOne=document.querySelector('#dayOne')
var maxTembDayOne=document.querySelector('#maxTembDayOne')
var minTembDayOne=document.querySelector('#minTembDayOne')
var iconTwoDayOne=document.querySelector('#iconTwoDayOne')
var textTwoDayOne=document.querySelector('#textTwoDayOne')
var dataTwoDayOne=document.querySelector('#dataTwoDayOne')
var dataDayTwo=document.querySelector('#dataDayTwo')
var iconDayTwo=document.querySelector('#iconDayTwo')
var maxTemDayTwo=document.querySelector('#maxTemDayTwo')
var minTembDaytwo=document.querySelector('#minTembDaytwo')
var textDayTwo=document.querySelector('#textDayTwo')

var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var date= new Date()
dayOne.innerHTML=day[date.getDay()]
dataTwoDayOne.innerHTML=day[date.getDay()+1]
dataDayTwo.innerHTML=day[date.getDay()+2]
if(date.getDay()+1 > 6  ){
   dataTwoDayOne.innerHTML=day[0]
}
if(date.getDay()+2 > 6){
   dataDayTwo.innerHTML=day[1]
}

async function getWeather(term){

        var req=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3a18549cc393457784d73703231008&q=${term}&days=7`,{method:'get'})
        var res=await req.json()

 //......................col-1......................................................... 
 var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var DM=res.forecast.forecastday[0].date
 var DM=JSON.stringify(DM)
 var DM=DM.split('-')[2]
 var DM=DM.split('"')[0]

       dataDayOne.innerHTML=DM+' '+months[date.getMonth()]
       textDayOne.innerHTML=res.current.condition.text
       nameDayone.innerHTML=res.location.name
       tempDayOne.innerHTML=res.current.temp_c+'<sup>o</sup>C'
       iconDayOne.innerHTML=`<img src=${"https:"+res.current.condition.icon}>`  
 //......................col-2......................................................... 

       maxTembDayOne.innerHTML=res.forecast.forecastday[1].day.maxtemp_c+'<sup>o</sup>C'
       minTembDayOne.innerHTML=res.forecast.forecastday[1].day.mintemp_c+'<sup>o</sup>C'
       iconTwoDayOne.innerHTML=`<img src=${"https:"+res.forecast.forecastday[1].day.condition.icon}>`
       textTwoDayOne.innerHTML=res.forecast.forecastday[1].day.condition.text
 //....................col-3............................................................

       iconDayTwo.innerHTML=`<img src=${"https:"+res.forecast.forecastday[2].day.condition.icon}>` 
       maxTemDayTwo.innerHTML=res.forecast.forecastday[2].day.maxtemp_c+'<sup>o</sup>C'
       minTembDaytwo.innerHTML=res.forecast.forecastday[2].day.mintemp_c+'<sup>o</sup>C'
       textDayTwo.innerHTML=res.forecast.forecastday[2].day.condition.text
    
}

async function getWeatherEgypt(){

    var req=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3a18549cc393457784d73703231008&q=egypt&days=7`,{method:'get'})
    var res=await req.json()

    var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var DM=res.forecast.forecastday[0].date
    var DM=JSON.stringify(DM)
    var DM=DM.split('-')[2]
    var DM=DM.split('"')[0]

//......................col-1......................................................... 
   dataDayOne.innerHTML=DM+' '+months[date.getMonth()]
   textDayOne.innerHTML=res.current.condition.text
   nameDayone.innerHTML=res.location.name
   tempDayOne.innerHTML=res.current.temp_c+'<sup>o</sup>C'
   iconDayOne.innerHTML=`<img src=${"https:"+res.current.condition.icon}>`  
  
//......................col-2......................................................... 

   maxTembDayOne.innerHTML=res.forecast.forecastday[1].day.maxtemp_c+'<sup>o</sup>C'
   minTembDayOne.innerHTML=res.forecast.forecastday[1].day.mintemp_c+'<sup>o</sup>C'
   iconTwoDayOne.innerHTML=`<img src=${"https:"+res.forecast.forecastday[1].day.condition.icon}>`
   textTwoDayOne.innerHTML=res.forecast.forecastday[1].day.condition.text
 
//....................col-3............................................................

 
   iconDayTwo.innerHTML=`<img src=${"https:"+res.forecast.forecastday[2].day.condition.icon}>` 
   maxTemDayTwo.innerHTML=res.forecast.forecastday[2].day.maxtemp_c+'<sup>o</sup>C'
   minTembDaytwo.innerHTML=res.forecast.forecastday[2].day.mintemp_c+'<sup>o</sup>C'
   textDayTwo.innerHTML=res.forecast.forecastday[2].day.condition.text

}
getWeatherEgypt()



