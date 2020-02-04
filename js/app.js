let score = 0;

let addition = [
  {
    problem: "12 + 2 =",
    answer: 14
  },

  {
    problem: "8 + 20 =",
    answer: 28
  },

  {
    problem: "10 + 22 =",
    answer: 32
  },

  {
    problem: "19 + 7 =",
    answer: 26
  },

  {
    problem: "16 + 30 =",
    answer: 46
  },

  {
    problem: "15 + 23 =",
    answer: 38
  },

  {
    problem: "17 + 4 =",
    answer: 21
  },

  {
    problem: "19 + 23 =",
    answer: 42
  }
];

// I found out I need to declare my variables within DOMCONTENT - function

document.addEventListener("DOMContentLoaded", function(e) {
  let hide1 = document.getElementById("hide-1");
  let hide2 = document.getElementById("hide-2");
  let hide3 = document.getElementById("hide-3");
  let splashScreen = document.getElementsByClassName("splash-screen");

  hide1.addEventListener("click", function(e) {
    hide1.style.display = "none";
    hide2.style.display = "block";
  });
});

console.log("I love you, Linda - Hija Bonita!");
