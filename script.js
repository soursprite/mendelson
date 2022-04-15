let fs = require('fs');
let files = fs.readdirSync('/assets/images/sizzle/');
console.log(files)

function carousel() {
    const imgList = document.getElementsByClassName("drinkBox");
    console.log(currentDrink)
    for (let i = 0; i < drinkList.length; i++) {
      drinkList[i].style.display = "none"
    }
    //console.log('working')
    currentDrink++
    if (currentDrink === drinkList.length) {currentDrink = 0}
    drinkList[currentDrink].style.display = "block";
    if (drinkList.length > 1) {setTimeout(carousel, 1500)}
  } 