// detecting button press

var numberOfButtons = document.getElementsByClassName("drum").length;
for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var innerHTML = this.innerHTML;
    detectPress(innerHTML);
    buttonAnimation(innerHTML)

  });
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
  detectPress(event.key);
  buttonAnimation(event.key);

});

function detectPress(character) {
  switch (character) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "s":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}
 
//creating animation on button press and click

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("."+currentKey) //TO GET THE SAME FORMAT AS .w, .k. etc. THIS IS THE BUTTON WHOSE STYLE WE WILL CHANGE
 activeButton.classList.add("pressed"); //the "pressed" class is found in styles.css
 setTimeout(function(){ //how long the "animation" lasts
  activeButton.classList.remove("pressed");
 },100);
}



