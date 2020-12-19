# Budget Update

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Technologies](#Technologies)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)

## Description
When checking day to day expenses people want an application that works offline and online so that you can consistently keep check of your data when in an offline location and store the information once you are connected back to the local web. This application also can be added into your current mobile device by using the addtoHomeScreen function within your google chrome web browser. Once within the application you can store how much of your expense you have gained or lossed and visualise it through a graphical interface showing the date of profit gain and lost and the name of the expense.

## Installation
The deployed application can be found online [here](https://budget-update.herokuapp.com/)

However, if you wish to deploy the device on your local device you will have to do an npm install with the packages shown below

    npm install mongoose
    npm install express
    npm install compression
    npm install morgan

Once the application has started you can check your caches to ensure that nothing conflicts with local storages of information. 

     
## Technologies
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Express](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://docs.mongodb.com/manual/)
* [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)


## Usage
When starting the application you can start it up on Heroku [here](https://budget-update.herokuapp.com/). 

Once you are loaded in you can start adding and subtracting the activities and their funds from your current budget. The visual graph display should then show your current budget situation from when you start the application to the current date you added your next budget expense. Currently there is no method to reset the database, but this feature can be added in later versions. 

## License
MIT  

## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing
For anyone who wishes to contribute you can contact me with the information below

## Test
To test this application the Google Chrome Dev tools were utilized to first check the cache storage to ensure that the initial cache data was stored (i.e the database, styles, and the functionality for the app) so that the application can still be accessed offline. Once that was tested the application was then tested in offline and then online connection statuses to ensure that the data was stored once internet connection was reestablished. Lastly, we checked the MongoDB Atlas Cluster we had configured earlier to ensure that our data was being stored properly.  


Would you like to reach us?
</br>
Contact Me:

Github: https://github.com/aznjp

Email: Jpark103193@gmail.com