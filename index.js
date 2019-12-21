document.addEventListener("keydown", onKeyPressed);

function onKeyPressed(e) {
  if(e.key=='w')
  {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
  else
  if(e.key=='a')
  {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }
  else
  if(e.key=='s')
  {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }
  else
  if(e.key=='d')
  {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }
  else
  if(e.key=='j')
  {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }
  else
  if(e.key=='k')
  {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }
  else
  if(e.key=='l')
  {
    var audio = new Audio('sounds/kick.mp3');
    audio.play();
  }

}

for(var i=0;i<document.querySelectorAll("button").length;i++)
 document.querySelectorAll("button")[i].addEventListener("click", function(){
  if(this.innerHTML=='w')
  {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='a')
  {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='s')
  {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='d')
  {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='j')
  {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='k')
  {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }
  else
  if(this.innerHTML=='l')
  {
    var audio = new Audio('sounds/kick.mp3');
    audio.play();
  }


});
