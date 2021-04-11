let rotationSpeed = .3;

let animate = false;

let triX = 0;
let triY = 0;

let currentFrames;

let l = 62;

let c1;
let c2;

let phase1;

let triRotate = 0;

function setup() 
{
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  //debugMode();
}

function draw() 
{
  console.log(currentFrames);

  ortho(-width / 2, width / 2, height / 2, -height / 2, 1000, 0);
  
  orbitControl();

  background('#222222');

  if(frameCount % (rotationSpeed*1000) === 0) {
    console.log("explode now");

    animate = true;
    currentFrames = frameCount;

  }


  //INSIDE CUBE

  push();
    if(!animate)
    {
      rotateX(-35);
      rotateY(45);
      rotateY(frameCount * rotationSpeed);
      translate(-(l/2), -(l/2), (l/2));
      noStroke();


      
      for (i=0; i<6; i++)
        {

          if(i === 0) //ORANGE
          {
            c1="#e0795a";
            c2="#e0795a";

            fill(c1);
            triangle(0,0,0,l,l,0);


            fill(c2);
            triangle(l,0,l,l,0,l);
            
          }
          
          if(i === 1) //YELLOW
            {
              rotateY(90);
              c1="#e3cb54";
              c2="#e3cb54";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===2) // GREEN
            {
              rotateX(90);
              c1="#8edb5e";
              c2="#8edb5e";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===3) { // BLUE
            translate(l,0,0);
            rotateY(90);
              c1="#4c92d9";
              c2="#4c92d9";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
          }
          
          if(i===4) // PURPLE
            {
              
              rotateX(-90);
              translate(0,0,l);
              c1="#7e47d1";
              c2="#7e47d1";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===5) // PINK
            {
              translate(l,0,0);
              rotateY(90);
              c1="#de49ac";
              c2="#de49ac";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
        }
      }
  
  pop();


  //OUTLINE CUBE

  push();
    rotateX(-35);
    rotateY(45);
    //rotateY(frameCount * rotationSpeed);
    noFill();
    
    stroke("white");
    strokeWeight(2);
    box(250);
  pop();


  push();

    if(animate){
      fill(color(0, 126, 255, 255));
      noStroke();
      phase1 = min( (frameCount-currentFrames)/ 30, 1);
      /*
      if(phase1 ===1 && frameCount-currentFrames >50){
        rotateZ(triRotate);
        if(triRotate <=225)
        triRotate += 5;
      }
      */

      push(); // LEFT BOTTOM
      fill("#7e47d1");
        //translate(-20*phase1, -40*phase1 );
        translate(-42, -72.7461);
        triangle(0, 0 + 0, 0, 0 + -50, 0 + (-25*sqrt(3)), 0 + -25);
      pop();

      push();
        fill("#de49ac"); //LEFT TOP
        //translate(-20*phase1, 40*phase1);
        translate(-42, 72.7461);
        triangle(0, 0, 0, 50, -25*sqrt(3), 25);
      pop();

      push(); //RIGHT
        fill("#e0795a");
        //translate(40*phase1, 0);
        translate(84.25, 0 );
        triangle(0, 0, 25*sqrt(3), 25, 25*sqrt(3),-25);
      pop();

      push(); // LEFT
        fill("#7e47d1");
        translate(-84.25, 0);
        triangle(0, 0, -25*sqrt(3), 25, -25*sqrt(3),-25);
      pop();

      push(); //RIGHT BOTTOM
        fill("#e0795a");
         translate(42, -72.7461);
        triangle(0, 0, 0, -50, 25*sqrt(3), -25);
      pop();

      push(); //RIGHT TOP
        fill("#de49ac");
         translate(42, 72.7461);
        triangle(0, 0, 0, 50, 25*sqrt(3), 25);
      pop();
  }

  pop();
  
    

}