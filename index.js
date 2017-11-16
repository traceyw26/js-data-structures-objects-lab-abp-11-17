// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue() {
  /*this function should take in a driver object, a key and a value. 
  The function should not mutate the driver parameter and return a new 
  driver that has an updated value for the key passed in.*/
  const driver = {driver: "Sam"};

  return Object.assign(driver, {address: "11 Broadway"});
}