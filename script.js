let passwordBtn = document.querySelector(".generate-btn");
let span1El = document.getElementById("password1");
let span2E2 = document.getElementById("password2");

let password1 = "";
let password2 = "";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

function displayPassword() {
  span1El.textContent = password1;
  span2E2.textContent = password2;
}

function generatePassword() {
  let randomPw1 = "";
  let randomPw2 = "";
  // check if random password variable is not empty. If so, reset to empty
  if (password1 != "" && password2 != "") {
    password1 = "";
    password2 = "";
  }

  for (let i = 0; i < 15; i++) {
    let num1 = Math.floor(Math.random() * characters.length);
    let num2 = Math.floor(Math.random() * characters.length);
    randomPw1 += characters[num1];
    randomPw2 += characters[num2];
  }

  password1 = randomPw1;
  password2 = randomPw2;

  displayPassword();
}
