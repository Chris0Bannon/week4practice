const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats ( ){
console.log( 'in enoughSeats' );
// check if seatsInCar is >= the number of passengers.
if (seatsInCar >= passengers.length) {
 return true;
} // end enoughSeats
else {
  return false;
} // end  not enoughSeats
} // end enoughSeats
  function getInCar( nameOfPassenger ) {
    console.log('in getInCar', nameOfPassenger);
    //push this new passenger into our passengers array
    passengers.push(nameOfPassenger);
    return passengers;
  } //end getInCar

function readyForRoadTrip(){
console.log('in readyForRoadTrip:');
  if (enoughSeats() && tankFull) {
    return true;
  }//end all good
  else {
    return false;
  }
}//end readyForRoadTrip

  getInCar('You');
  getInCar('Dev');
  getInCar('Keeli Jo');
  getInCar('Baba Yaga');


  console.log('enough seats?', enoughSeats());
  console.log( 'are we ready for the trip?', readyForRoadTrip());
