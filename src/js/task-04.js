let counterValue = 0;
const valueEl = document.querySelector("#value");
const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');

addListenerBtn.addEventListener("click", (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

removeListenerBtn.addEventListener("click", (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
