// Created by Jeffrey Vavasour
// form dom elements
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const message = document.getElementById("message");
const checkbox = document.getElementById("tandc");
const form = document.getElementById("form");

// form confirmation message dom element
const formConfirmation = document.querySelector(".form-confirmation");

form.addEventListener("submit", (e) => {
  // prevent page reload on submission
  e.preventDefault();

  // array of error messages
  let messages = [];

  // add error messages to array where needed
  // firstname validation
  if (firstName.value == "" || firstName.value == null) {
    messages.push("First Name is Required!");
  }
  // lastname validation
  if (lastName.value == "" || lastName.value == null) {
    messages.push("Last Name is Required!");
  }
  // email validation
  // regular expression cited from w3resource.com
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    messages.push("Invalid email");
  }
  // phone number validation
  if (phoneNumber.value.length < 7 || phoneNumber.value.length > 10) {
    messages.push("Phone number must be between 7 and 10 characters");
  }
  // checkbox validation
  if (!checkbox.checked) {
    messages.push("You must agree to the terms and conditions");
  }

  // alert errors from array OR confirm registration
  if (messages.length > 0) {
    for (let i = 0; i < messages.length; i++) {
      alert(`${messages[i]}`);
    }
  } else {
    formConfirmation.classList.remove("hidden");
  }
});
