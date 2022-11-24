const drivers = ['Antonia', 'Nuru','Amari',  'Mo']; 

 const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0,2)];
    return drivers;
 }
 const returnLastTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(2,4)];
    return drivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(int) {
    return function(fare=12){
     return fare * int;
    }
 }
 const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
 }
 const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(driversArray, fn){
    return fn(driversArray);
}