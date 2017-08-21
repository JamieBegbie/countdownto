var date = new Date()
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var daysLeft = 0;
year = year/4




  if ((year===505 || 506 || 507 || 508) && (month===1)) {
    daysLeft = 299+(29-day)

  } else if ((year===505 || 506 || 507 || 508) && (month===0)) {
    daysLeft = 328+(31-day)

  } else if (month === 0){
    daysLeft = 327 + (31-day)

  } else if (month === 1){
    daysLeft = 299 + (28-day)

  } else if (month === 2){
    daysLeft = 268 + (31-day)

  } else if (month === 3){
    daysLeft = 238 + (30-day)

  } else if (month === 4){
    daysLeft = 207 + (31-day)

  } else if (month === 5){
    daysLeft = 177 + (30-day)

  } else if (month === 6){
    daysLeft = 146 + (31-day)

  } else if (month === 7){
    daysLeft = 115 + (31-day)


  } else if (month === 8){
    daysLeft = 85 + (30-day)

  } else if (month === 9){
    daysLeft = 54 + (31-day)

  } else if (month === 10){
    daysLeft = 24 + (30-day)

  } else if (month === 11){
    daysLeft =  24 - day

  }

hoursLeft = 23 - hour
minutesLeft = 59 - minute
secondsLeft = 59 - second

document.getElementById("demo").innerHTML = daysLeft + " days " + hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " seconds ";






setTimeout(function(){
   window.location.reload(1);
}, 1000);
