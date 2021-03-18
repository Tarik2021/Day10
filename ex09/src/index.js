function myFunction(myObj, checkProp) {
  myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama",
  };
  if ((checkProp = "title")) {
    return "Titanic";
  } else if ((checkProp = "song")) {
    return "My Heart Will Go On";
  } else if ((checkProp = "genre")) {
    return "drama";
  } else {
    return "Not Found";
  }
}
module.exports = myFunction;
