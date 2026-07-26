function toggleButton(buttonElement) {
  if (buttonElement.classList.contains("is-toggled")) {
    buttonElement.classList.remove("is-toggled");
  } else {
    buttonElement.classList.add("is-toggled");
  }
}

// function toggleButton2() {
//     const buttonElement = document.querySelector('.js-button-2');

//     if (buttonElement.classList.contains('is-toggled')) {
//         buttonElement.classList.remove('is-toggled');
//     } else {
//         buttonElement.classList.add('is-toggled');
//     }
// };

// function toggleButton3() {
//     const buttonElement = document.querySelector('.js-button-3');

//     if (buttonElement.classList.contains('is-toggled')) {
//         buttonElement.classList.remove('is-toggled');
//     } else {
//         buttonElement.classList.add('is-toggled');
//     }
// };


function toggleButtonOnly(buttonElement) {
    if(!buttonElement.classList.contains('is-toggled')) {
        previousButtonOff();
        buttonElement.classList.add('is-toggled');
    } else {
        buttonElement.classList.remove('is-toggled');
    }
};


function previousButtonOff() {
    const turnOfButton = document.querySelector('.is-toggled');
    if(turnOfButton) {
        turnOfButton.classList.remove('is-toggled');
    }
};