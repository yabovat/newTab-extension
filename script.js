// Upsplash Access key removed for security purposes
const endpoint = 'https://api.unsplash.com/photos/random/?client_id= < INSERT ACCESS HERE KEY > &collections=1499877&orientation=landscape';

const unsplashImage = document.getElementById('unsplashImage');
const attribution = document.getElementById('attribution');

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    // Set the image source to the regular-sized image URL from the API response
    unsplashImage.src = jsonData.urls.regular;

    // Extract photographer information and photo URL
    const photographer = jsonData.user.name;
    const photographerPortfolio = jsonData.user.portfolio_url;
    const photoURL = jsonData.links.html;

    // Display attribution with links to photographer's portfolio and Unsplash
    attribution.innerHTML = `Photo by <a href="${photographerPortfolio}" style="color:#ffffff;" target="_blank">${photographer}</a> on <a href="${photoURL}" style="color:#ffffff;" target="_blank">Unsplash</a>`;
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });

// Function to display current time
function displayTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  document.getElementById('currentTime').innerHTML = time;
}

// Update time every second
setInterval(displayTime, 1000);

// Initially display the time
displayTime();

// Function to display formatted date
function displayFormattedDate() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var now = new Date();

  var dayOfWeek = days[now.getDay()];
  var monthName = months[now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();

  var formattedDate = dayOfWeek + ', ' + monthName + ' ' + day + ', ' + year;

  document.getElementById('formattedDate').innerHTML = formattedDate;
}

// Call the function to display the formatted date
displayFormattedDate();
