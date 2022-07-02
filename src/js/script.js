const form = document.querySelector("[data-form]");
const emailAddress = document.querySelector("[data-input]");
const errorIcon = document.querySelector(".err-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checInputs();

  errorIcon.classList.remove("anim");
  void errorIcon.offsetWidth;
  errorIcon.classList.add("anim");
});

function checInputs() {
  const emailAddressValue = emailAddress.value.trim();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailAddressValue === "" || !re.test(emailAddressValue)) {
    inputError(emailAddress, "Please provide a valid email");
    inputError(emailAddress, "Please enter an email");
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
