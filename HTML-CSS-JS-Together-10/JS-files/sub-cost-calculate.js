function handleCostKeyDown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");

  if (inputElement.value <= 0) {
    document.querySelector(".js-total-cost").innerHTML =
      `Error: Cost can't be less than $0`;
    document.querySelector(".js-total-cost").classList.add("error-text");
  } else {
    document.querySelector(".js-total-cost").classList.remove("error-text");
    let cost = inputElement.value * 100;

    if (cost < 4000) {
      cost = cost + 1000;
    }
    document.querySelector(".js-total-cost").innerHTML = `$${cost / 100}`;
  }
}

function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerText = "Subscribed";
    buttonElement.classList.add("is-subscribed");
  } else {
    buttonElement.innerText = "Subscribe";
    buttonElement.classList.remove("is-subscribed");
  }
}
