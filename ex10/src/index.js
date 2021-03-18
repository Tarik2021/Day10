function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      relase_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Izvodjac",
      title: "Naslov",
      relase_year: 1995,
      formats: {
        1: "DVD",
        2: "8TT",
        3: "LPT",
      },
      gold: false,
    },
  };
}
myFunction()[002];
module.exports = myFunction;
