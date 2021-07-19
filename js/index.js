"use strict";

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const output = document.querySelector(".output");
const clickButton = document.querySelector(".button");

// const passwordFunction = () => {
//   let passwordString = ``;

//   for (let i = 0; i < 20; i++) {
//     let index = Math.floor(Math.random() * charset.length);

//     if (i > 0 && i % 3 == 0) {
//       passwordString += charset[index].toLocaleUpperCase();
//     } else {
//       passwordString += charset[index];
//     }
//     output.textContent = passwordString;
//   }
// };

// // console.log(passwordFunction());

// clickButton.addEventListener("click", passwordFunction);

// Bonus
// =============================

const defineNumber = document.querySelector(".define-number-input");

const checkbox = document.querySelector("#checkbox");

const definePasswordLength = () => {
  let password = ``;

  // ? Checkbox for loop..
  if (checkbox.checked == true) {
    // alert(`Checked!`);
    // ? input number to pass into for loop
    let number = defineNumber.value;

    for (let i = 0; i < number; i++) {
      let index = Math.floor(Math.random() * charset.length);
      if (i > 0 && i % 3 == 0) {
        password += charset[index].toLocaleUpperCase();
      } else {
        password += charset[index];
      }
    }
    output.textContent = password;

    // ===========
    //? Regular length - 20 char..
  } else {
    for (let i = 0; i < 20; i++) {
      let index = Math.floor(Math.random() * charset.length);
      if (i > 0 && i % 3 == 0) {
        password += charset[index].toLocaleUpperCase();
      } else {
        password += charset[index];
      }
    }
    output.textContent = password;
  }
};

clickButton.addEventListener("click", definePasswordLength);
