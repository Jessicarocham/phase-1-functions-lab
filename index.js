// Code your solution in this file!
const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - hq);
}
function distanceFromHqInFeet(street) {
  distanceFromHqInBlocks(street);
  return distanceFromHqInBlocks(street) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) < 2000) {
    return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
  } else if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }
}
