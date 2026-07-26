let calculation = localStorage.getItem("calculation") || "";

document.querySelector(".show-calculation").innerHTML = calculation || 0;

function updateCalculation(value) {
  calculation += value;
  // console.log(calculation);
  document.querySelector(".show-calculation").innerHTML = calculation;

  localStorage.setItem("calculation", calculation);
}
