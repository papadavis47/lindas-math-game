const questions = {
  addition: [
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
    },
  
    {
      problem: "21 + 6 =",
      answer: 27
    },
  
    { problem: "32 + 14 =", answer: 46 }
  ],

  subtraction: [
    {
      problem: "32 - 12 =",
      answer: 20
    },
  
    {
      problem: "44 - 30 =",
      answer: 14
    },
  
    {
      problem: "17 - 8 =",
      answer: 9
    },
  
    {
      problem: "36 - 14 =",
      answer: 22
    },
  
    {
      problem: "13 - 7 =",
      answer: 6
    },
  
    {
      problem: "19 - 17 =",
      answer: 2
    },
    {
      problem: "33 - 22 =",
      answer: 11
    },
    {
      problem: "16 - 9 =",
      answer: 7
    },
    {
      problem: "12 - 5 =",
      answer: 7
    },
  
    {
      problem: "30 - 15 =",
      answer: 15
    }
  ],
  multiplication: [
    {
      problem: "5 X 5 = ",
      answer: 25
    },
  
    {
      problem: "6 X 2 =",
      answer: 12
    },
    {
      problem: "3 X 6 =",
      answer: 18
    },
    {
      problem: "4 X 2 =",
      answer: 8
    },
    {
      problem: "7 X 3 =",
      answer: 21
    },
    {
      problem: "2 X 9 =",
      answer: 18
    },
    {
      problem: "3 X 3 =",
      answer: 9
    },
    {
      problem: "5 X 7 =",
      answer: 35
    },
    {
      problem: "6 X 6 =",
      answer: 36
    },
    {
      problem: "3 X 9 =",
      answer: 27
    }
  ],
  division: [
    {
      problem: "9 &#10135; 3 =",
      answer: 3
    },
    {
      problem: "8 &#10135; 2 =",
      answer: 4
    },
    {
      problem: "12 &#10135; 6 =",
      answer: 2
    },
    {
      problem: "10 &#10135; 2 =",
      answer: 5
    },
    {
      problem: "16 &#10135; 3 =",
      answer: 8
    },
    {
      problem: "14 &#10135; 2 =",
      answer: 8
    },
    {
      problem: "19 &#10135; 19 =",
      answer: 1
    },
    {
      problem: "30 &#10135; 5 =",
      answer: 6
    },
    {
      problem: "28 &#10135; 4 =",
      answer: 7
    },
    {
      problem: "21 &#10135; 7 =",
      answer: 3
    }
  ]
}

let score = 0;





// This is what happens when someone wins game

function gameIsWon() {

}

// This is the bulk of the game play here:

function gamePlay() {
  for (item in currentChallenge) {
    if (score < 50) {
      challenge.innerText = currentChalleng[item].problem;
      if (attempt === currentChallenge[item].answer) {
        challenge.innerText = "Good, that's right!";
        score += 5;
      } else {
        score -= 5;
        challenge.innerText =
          'Not quite. To see answer Type "Y"\n To move on type "N".';
        if (attempt.toUpperCase() === "Y") {
          challenge.innerText = arr[item].answer;
        } else {
          continue;
        }
      }
    } else {
      gameIsWon();
    }
  }
};

function startAgain() {
  score = 0;
  hide1.style.display = "block";
  hide2.style.display = "none";
  hide3.style.display = "none";
}
// I found out I need to declare my variables within DOMCONTENT - function

document.addEventListener("DOMContentLoaded", function(e) {
  
  const challenge = document.querySelector(".challenge");
  const choices = document.querySelector(".choices");
  const displayScore = document.getElementById("display-score");
  const attempt = document.getElementById("attempt");
  const hide1 = document.getElementById("hide-1");
  const hide2 = document.getElementById("hide-2");
  const hide3 = document.getElementById("hide-3");
  
  
  

  displayScore.innerText = score;

  // opening sound - "You should play a math game."
  hide1.addEventListener("mouseenter", function(e) {
    document.getElementById("math-game").play();
    // hide1.removeEventListener("mouseenter", function(e) {
    //   document.getElementById("math-game").play();
      
    // });
  });

  

  // initial click event listener after the directions intro
  hide1.addEventListener("click", function(e) {
    hide1.style.display = "none";
    hide2.style.display = "block";
  });

  hide2.addEventListener("mouseenter", function(e) {
    document.getElementById("pick-one").play();
    

  })

  
    choices.addEventListener("click", function(e) {
      hide2.style.display = "none";
      hide3.style.display = "block";
      let currentChallenge = questions[`${e.target.id}`];
      console.log(currentChallenge);
      for (item in currentChallenge) {
        console.log(currentChallenge[item].problem)
      }
    })

    console.log(attempt.value);
    
      
      
      

  
 
    
    // attempt.addEventListener("submit", function(e) {
    //   e.preventDefault();

    // })

    
  });
