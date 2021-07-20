"use strict";

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const output = document.querySelector(".output");
const clickButton = document.querySelector(".button");

const defineNumber = document.querySelector(".define-number-input");

const checkbox = document.querySelector("#checkbox");

const definePasswordLength = () => {
  let password = ``;

  // ? input number to pass into for loop
  let number = defineNumber.value;

  // ? for loop with input number
  for (let i = 0; i < number; i++) {
    let index = Math.floor(Math.random() * charset.length);

    if (checkbox.checked == true) {
      if (i > 0 && i % 3 == 0) {
        password += charset[index].toLocaleUpperCase();
      } else {
        password += charset[index];
      }
    } else {
      password += charset[index];
    }

    output.textContent = password;
  }

  //? Default length
  if (defineNumber.value < 1) {
    for (let i = 0; i < 20; i++) {
      let index = Math.floor(Math.random() * charset.length);

      if (checkbox.checked == true) {
        if (i > 0 && i % 3 == 0) {
          password += charset[index].toLocaleUpperCase();
        } else {
          password += charset[index];
        }
      } else {
        password += charset[index];
      }
    }
    output.textContent = password;
  }
};

clickButton.addEventListener("click", definePasswordLength);
