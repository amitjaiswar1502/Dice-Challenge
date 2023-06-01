// let randomNumber1;
// a = Math.random();
// randomNumber1 = Math.round(a * 6);

let randomNumber1;
const dice1 = () => {
    //1st dice
    randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomImage = "dice" + randomNumber1 + ".png";

    let randomImagesource = "images/" + randomImage;

    let image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImagesource);


}




// ============================2nd Dice============

const dice2 = () => {
    let randomNumber2;

    randomNumber2 = Math.floor(Math.random() * 6) + 1;

    randomImagesource2 = "images/dice" + randomNumber2 + ".png";

    let image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImagesource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "😎Player 1 wins!"
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins 😎!"
    } else {
        document.querySelector("h1").innerHTML = "😒 Draw!"
    }
}

// ==========button function====

const play = () => {

    dice1();
    dice2();

}

// document.addEventListener('mousemove', function (e) {
//     let body = document.querySelector('body');
//     let circle = document.getElementById('circle');
//     let left = e.offsetX;
//     let top = e.offsetY;
//     circle.style.left = left + 'px';
//     circle.style.top = top + 'px';
// });

let circle = document.getElementById('circle');
const onMouseMove = (e) => {
    circle.style.left = 20 + e.pageX + 'px';
    circle.style.top = 20 + e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
