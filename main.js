let button = document.querySelector('.btn');
let showButton = document.querySelector('.about');
let button2 = document.querySelector('.btn2');
let showButton2 = document.querySelector('.competences');

button.onclick = function () {
 if(showButton.style.visibility == 'visible') {
    showButton.style.visibility = 'hidden'
} else {
    showButton.style.visibility = 'visible';
  }
};

button2.onclick = function () {
  if(showButton2.style.visibility == 'visible') {
    showButton2.style.visibility = 'hidden'
  } else {
    showButton2.style.visibility = 'visible';
  }
}
