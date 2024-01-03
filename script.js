// script.js

// Function to display current time
function displayTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById('currentTime').innerHTML = time;
  }
  
  // Update time every second using setInterval
  setInterval(displayTime, 1000);
  
  // Initially display the time
  displayTime();
  
  // Function to display formatted date
  function displayFormattedDate() {
    // Arrays for days and months
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    var now = new Date();
  
    // Get specific date components
    var dayOfWeek = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var day = now.getDate();
    var year = now.getFullYear();
  
    // Format the date
    var formattedDate = dayOfWeek + ', ' + monthName + ' ' + day + ', ' + year;
  
    // Display the formatted date
    document.getElementById('formattedDate').innerHTML = formattedDate;
  }
  
  // Call the function to display the formatted date
  displayFormattedDate();
  