function startTime(){
  var time = new Date()
  var h= time.getHours(); 
  var m = time.getMinutes(); 
  var s = time.getSeconds(); 
  let hour= document.getElementById("hourFrame");
  let minute= document.getElementById("minuteFrame");
  let second= document.getElementById("secondFrame");
  let amPm=document.getElementById("amPm");
  if(h>11){
    amPm.innerText = "PM"
    hour.innerHTML = h-12 + "\n" + `<p>hours</p>`
  }
  else{
    amPm.innerText = "AM"
    hour.innerHTML = h + "\n" + `<p>hours</p>`
  }
  minute.innerHTML = m + "\n" + `<p>mins</p>`
  second.innerHTML = s + "\n" + `<p>secs</p>`
  setTimeout(startTime, 1000);

}

window.onload = function(){
  startTime()
};

function getSelectedTime() {
  const wakeUpTime = document.getElementById("wakeUp");
  const lunchTime = document.getElementById("lunch");
  const napTime = document.getElementById("nap");
  const mainRight = document.getElementById("main-right");
  var time = new Date()
  var h= time.getHours();
  if(napTime.value == h){
    mainRight.innerHTML = `<p>Good Night!</p>`
    mainRight.style.backgroundImage = "url(./Assets/goodnight_image.svg)";
    mainRight.style.backgroundPosition = "unset";
    mainRight.style.backgroundSize = "contain";
  }
  else if(lunchTime.value == h){
    mainRight.innerHTML = `<p>Time for Lunch!</p>`
    mainRight.style.backgroundImage = "url(./Assets/lunch_image.svg)";
    mainRight.style.backgroundPosition = "unset";
    mainRight.style.backgroundSize = "contain";
  }
  else if(wakeUpTime.value == h){
    mainRight.innerHTML = `<p>Good Morning!</p>`
    mainRight.style.backgroundImage = "url(./Assets/wakeup_image.svg)";
    mainRight.style.backgroundPosition = "-100% -200%";
    mainRight.style.backgroundSize = "contain";
    

  }

  const wakeUpTimeRange = getRange(wakeUpTime);
  const lunchTimeRange = getRange(lunchTime);
  const napTimeRange = getRange(napTime);
  selectedTime.innerHTML = `<p>Wake Up Time : ${wakeUpTimeRange} <br>Lunch Time : ${lunchTimeRange} <br>Nap Time : ${napTimeRange} `
  selectedTime.style.display = "block"

}

function getRange(timeR) {
  var time = new Date()
  var h= time.getHours();
  for (var i = 0; i < timeR.length; i++) {
      var option = timeR.options[i];
      if (option.value == timeR.value) {
          return option.text
      }
  }
}

const setTimeButton = document.getElementById("setTimeButton")
const selectedTime = document.getElementById("selectedTime")
setTimeButton.addEventListener("click",getSelectedTime);
