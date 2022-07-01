const inputField = document.querySelector("[data-input]");
const form = document.querySelector("[data-form]");
const submitBtn = document.querySelector("[data-btn]");
const errorIcon = document.querySelector(".err-icon");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checInputs();
});

function checInputs() {
  // const inputFieldValue = inputField.value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (inputField === "" || !regex.test(inputField)) {
    form.classList.add("error");
  } else {
    form.submit();
  }

  errorIcon.classList.remove("anim");
  void errorIcon.offsetWidth;
  errorIcon.classList.add("anim");
}

// function inputError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "featured-panel__form-container error";

//   const err = formControl.querySelector(".err-message");
//   err.innerText = message;
// }

// function inputSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = "featured-panel__form-container success";
// }

inputField.addEventListener("invalid", (e) => {
  e.preventDefault();
});
