"use strict";

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const output = document.querySelector(".output");
const clickButton = document.querySelector(".button");

console.log(charset);

const passwordFunction = () => {
  let passwordString = ``;

  for (let i = 0; i < 20; i++) {
    let index = Math.floor(Math.random() * charset.length);

    if (i > 0 && i % 3 == 0) {
      passwordString += charset[index].toLocaleUpperCase();
    } else {
      passwordString += charset[index];
    }
    output.textContent = passwordString;
  }
};

// console.log(passwordFunction());

clickButton.addEventListener("click", passwordFunction);

// Bonus
// =============================

const defineNumber = document.querySelector(".define-number-input");
