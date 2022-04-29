function displayTime(){
    const currentDate = new Date();
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const second = currentDate.getSeconds()


    document.querySelector(".hour").innerHTML = hour
    document.querySelector(".minute").innerHTML = minute
    document.querySelector(".second").innerHTML = second
   const session = document.querySelector(".session");

   if(hour >= 12){
       session.innerHTML = "PM"
   } else {
       session.innerHTML = "AM"
   }




}
setInterval(displayTime, 1)