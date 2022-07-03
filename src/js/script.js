const form = document.querySelector("[data-form]");
const emailAddress = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-btn]");
const errorIcon = document.querySelector(".err-icon");

submitBtn.addEventListener("click", checInputs);

function checInputs(e) {
  const emailAddressValue = emailAddress.value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(emailAddressValue) || emailAddressValue === "") {
    inputError(emailAddress, "Please provide a valid email");
    e.preventDefault();
  } else {
    inputSuccess(emailAddress);
  }
}

function inputError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "featured-panel__form-container error";

  const err = formControl.querySelector(".err-message");
  err.innerText = message;
}

function inputSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "featured-panel__form-container success";
}

emailAddress.addEventListener("invalid", (e) => {
  e.preventDefault();
});
