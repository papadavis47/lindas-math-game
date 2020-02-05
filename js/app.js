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
      problem: "9 / 3 =",
      answer: 3
    },
    {
      problem: "8 / 2 =",
      answer: 4
    },
    {
      problem: "12 / 6 =",
      answer: 2
    },
    {
      problem: "10 / 2 =",
      answer: 5
    },
    {
      problem: "16 / 3 =",
      answer: 8
    },
    {
      problem: "14 / 2 =",
      answer: 8
    },
    {
      problem: "19 / 19 =",
      answer: 1
    },
    {
      problem: "30 / 5 =",
      answer: 6
    },
    {
      problem: "28 / 4 =",
      answer: 7
    },
    {
      problem: "21 / 7 =",
      answer: 3
    }
  ]
}

let score = 0;
let currentChallenge = null;
let currentQuestIndex = 0;





// This is what happens when someone wins game

function gameIsWon() {

}

// This is the bulk of the game play here:

function gamePlay() {

  
}
    

function startAgain() {
  score = 0;
  hide1.style.display = "block";
  hide2.style.display = "none";
  hide3.style.display = "none";
}
// Most everything will go under here

document.addEventListener("DOMContentLoaded", function(e) {
  
  // this is the h2 where I send in the math problem
  const challenge = document.querySelector(".challenge");
  // this is the div holding the elements where user clicks to choose math type
  const choices = document.querySelector(".choices");
  // this is the h2 displaying the score that will be updated
  const displayScore = document.getElementById("display-score");
  // this is my form entirely
  const mainForm = document.getElementById("attempt");
  // this is the input field
  const attempt = document.getElementById("input");
  // this is the section div with my info screen and directions
  const hide1 = document.getElementById("hide-1");
  // this is the section div where user chooses math type
  const hide2 = document.getElementById("hide-2");
  // this is the play area
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
    console.log(e.target);
  });
  // another sound on the pick screen - "Go ahead and pick one"
  hide2.addEventListener("mouseenter", function(e) {
    document.getElementById("pick-one").play();
  });

  
  choices.addEventListener("click", function(e) {
    // after user clicks on type of math -  
    // screen will change to flashcard  
    hide2.style.display = "none";
    hide3.style.display = "block";
    // current challenge will be changed to whatever the user clicks
    currentChallenge = questions[e.target.id];
    
    // first question will come up
    
    // get first index of currentChallenge
    // update the innner text of h2 that will hold questions with string from first index at currentChallenge[0].problem
    challenge.innerText = currentChallenge[0].problem;
  });
  
  // user will submit their answer 
  mainForm.addEventListener("submit", function(e) {
    
    e.preventDefault();
    console.log("testing");
    // compare user input against answer in currentChallenge[0].answer
    // if input and answer are match, 
    // let answer = attempt.value;
    if (attempt.value == currentChallenge[currentQuestIndex].answer) {
      // then I will display message 
      challenge.innerText = "Good, that's right!";
      //  and increment score +5
      score += 5;
      // if input is wrong
    } else {
      // I will display message "Close, try again later"
      challenge.innerText = "Close, try again later.";
      // and decrement the score by 5 points then move on to next one
      score -= 5;
    }
    currentQuestIndex +=1;
      
    console.log(attempt.value);
  });

});

  
