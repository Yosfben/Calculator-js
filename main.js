let numbers = document.querySelectorAll(".numbers");
let operateurs = document.querySelectorAll(".operators");
let ecran = document.querySelector(".scren");
let equal = document.querySelector(".equal");
let supresion = document.querySelector(".supretion");
let previusValue = "";
let currentValue = "";
let operateur = "";
for (const number of numbers) {
  number.addEventListener("click", function () {
    currentValue += number.textContent;
    ecran.textContent = currentValue;
    for (const operator of operateurs) {
      operator.onclick = function () {
        ecran.nextElementSibling.textContent = operator.textContent;
        operateur=operator.textContent
        ecran.textContent = "";
        previusValue=currentValue
        currentValue=""
      };
    }
  });
}
equal.addEventListener("click", function () {
    ecran.textContent = calculate(previusValue, currentValue, operateur);
    ecran.nextElementSibling.textContent="="
});
supresion.onclick = function () {
    initialValues();
}
/**
 *
 * @param {number} previusValue
 * @param {number} currentValue
 */
function sum(previusValue, currentValue) {
    return parseFloat(previusValue) + parseFloat(currentValue);
}
/**
 *
 * @param {number} previusValue
 * @param {number} currentValue
 */
function multip(previusValue, currentValue) {
  return parseFloat(previusValue) * parseFloat(currentValue);
}
/**
 *
 * @param {number} previusValue
 * @param {number} currentValue
 */
function div(previusValue, currentValue) {
  return parseFloat(previusValue) / parseFloat(currentValue);
}
/**
 *
 * @param {number} previusValue
 * @param {number} currentValue
 */
function sub(previusValue, currentValue) {
    return parseFloat(previusValue) - parseFloat(currentValue);
}
/**
 *
 * @param {number} previusValue
 * @param {number} currentValue
 */
function mode(previusValue, currentValue) {
    return parseFloat(previusValue) % parseFloat(currentValue);
}
function calculate(previusValue, currentValue, operator) {
  let result = "";
  switch (operator) {
      case "+":
          result = sum(previusValue, currentValue);
          break;
          case "*":
              result = multip(previusValue, currentValue);
      break;
    case "-":
      result = sub(previusValue, currentValue);
      break;
    case "/":
      result = div(previusValue, currentValue);
      break;
    case "%":
      result = mode(previusValue, currentValue);
      break;
    }
    return result;
}
function initialValues() {
    previusValue=""
    currentValue=""
    operateur=""
    ecran.textContent=""
    ecran.nextElementSibling.textContent=""

}