// script.js
function displayTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById('currentTime').innerHTML = time;
  }
  
  // Update time every second
  setInterval(displayTime, 1000);
  
  // Initially display the time
  displayTime();