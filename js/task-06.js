const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  let inputValue = event.currentTarget.value.trim();
  if (inputValue.length === Number(inputEl.getAttribute("data-length"))) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
  if (
    inputEl.value.length !== Number(inputEl.getAttribute("data-length")) &&
    inputEl.value.length !== 0
  ) {
    inputEl.classList.add("invalid");
  }
}
