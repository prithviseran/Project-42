var hours, minutes, seconds;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hours = hour();

  minutes = minutes();
  
  seconds = second();


  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  

    secondsAngle = map(seconds, 0, 60, 0, 360);
    minutesAngle = map(minutes, 0, 60, 0, 360);
    hoursAngle = map(minutes, 0, 60, 0, 360);

 stroke (225, 0, 0);
 strokeWieght(7);
 line (0,0,100,0);

 translate();


  


  drawSprites();
}