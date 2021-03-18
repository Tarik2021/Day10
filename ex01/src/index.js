var myPet = {
  species: "Cat",
  name: "Zdero",
  legs: 4,
  friends: ["Dog", "Cow"],
};
function myFunction(myPet) {
  return myPet;
}
console.log(myFunction(myPet));
module.exports = {
  myPet,
  myFunction,
};
