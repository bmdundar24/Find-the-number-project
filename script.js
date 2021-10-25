let number = document.getElementById("text");
let controlButton = document.getElementById("check");
let feedback = document.getElementById("feedback");
let highScore = document.getElementById("highscore");
let myGuess = Math.floor(Math.random() * 100)+1;
let x = 100;
controlButton.addEventListener("click", () => {
  let mynumber = number.value;

  feedback.innerHTML = checkNumber(parseInt(mynumber));

  highScore.innerHTML = ` Your score is ${--x}`;
});

function checkNumber(num) {
  if (num == myGuess) {
    return ` Conguralitions you find the my ${num} number.`;
  } else if (num < myGuess) {
    return ` Sory your gues lower than my number. `;
  } else {
    return ` Sory  your gues higher than my number. `;
  }
}

//örnek
// const myTextInput = document.getElementById("mynumber");
// console.log(myTextInput);
// const myButton = document.getElementById("submit");
// const myResult = document.getElementById("sonuc");

// myButton.addEventListener("click", () => {
//     let myNumber = myTextInput.value;
//     let logic = perfectNumber(parseInt(myNumber));
//     if (logic) {
//         myResult.innerHTML = `${myNumber} is a perfect number!`;
//     } else {
//         myResult.innerHTML = `${myNumber} is not a perfect number!`;
//     }
// })

// function perfectNumber(num){
//     let toplam = 1;
//     if (num == 1) {
//         return false;
//     }else{
//         for (let index = 2; index <= num/2; index++) {
//             if (num % index == 0) {
//                 toplam += index;
//             }
//         }
//         if (num == toplam) {
//             return true;
//         }
//         return false;
//     }
// }
