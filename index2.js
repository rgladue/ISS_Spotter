const {nextISSTimesForMyLocation} = require('./iss-promised')
const {printPassTimes} = require('./index')

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then()

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("OMG: ", error.message);
  });