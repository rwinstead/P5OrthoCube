let rotationSpeed = .3;

let startTime = true;
let animate = false;

let triX = 0;
let triY = 0;

let currentFrame;
let rotationFrame;

let l = 62;

let speed = 0;

let c1;
let c2;

let state0 = false;
let state1 = false;
let state2 = false;
let state3 = false;

let phase1;
let phase2;

let triRotate = 0;

function setup() 
{
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  //debugMode();
}

function draw() 
{

  ortho(-width / 2, width / 2, height / 2, -height / 2, 1000, 0);
  orbitControl();
  background('#222222');
  setState();

  // push();
  // ellipseMode(CENTER);
  // fill("red");
  // translate(176.5,0);
  // ellipse(0, 0, 10);
  // pop();


  //INSIDE CUBE

  push();
    if(state3)
    {
      rotateX(-35);
      rotateY(45);
      rotateY((frameCount-(currentFrame+188)) * -rotationSpeed);
      translate(-(l/2), -(l/2), (l/2));
      noStroke();


      
      for (i=0; i<6; i++)
        {

          if(i === 0) //DARKER PURPLE
          {
              c1="#47197A";
              c2="#47197A";

            fill(c1);
            triangle(0,0,0,l,l,0);


            fill(c2);
            triangle(l,0,l,l,0,l);
            
          }
          
          if(i === 1) //LIGHTER PURPLE (not initially visible)
            {
              rotateY(90);
              c1="#9D70FF";
              c2="#9D70FF";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===2) // LIGHTEST PURPLE (bottom)
            {
              rotateX(90);
              c1="#CAB1FF";
              c2="#CAB1FF";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===3) { // DARK PURPLE
            translate(l,0,0);
            rotateY(90);
              c1="#47197A";
              c2="#47197A";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
          }
          
          if(i===4) // LIGHTER PURPLE
            {
              
              rotateX(-90);
              translate(0,0,l);
              c1="#9D70FF";
              c2="#9D70FF";
              fill(c1);
              triangle(0,0,0,l,l,0);
              fill(c2);
              triangle(l,0,l,l,0,l);
            }
          
          if(i===5) // LIGHTEST PURPLE (top)
            {
              translate(l,0,0);
              rotateY(90);
              c1="#CAB1FF";
              c2="#CAB1FF";
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
    if(state3){
      rotateY((frameCount-(currentFrame+188)) * rotationSpeed);
    }
    noFill();
    
    stroke("white");
    strokeWeight(2);
    box(250);
  pop();


  push();

  rotateZ(180);

  if(!state3) {

    noStroke();

    if(state1)
    {
      rotateZ(180*phase1);
    }

      push(); // LEFT BOTTOM
      fill("#47197A");
        //translate(-20*phase1, -40*phase1 );
        translate(-42, -72.7461);

        if(state2) {
          translate(42 * phase2, 72.7461 * phase2);
        }

        triangle(0, 0 + 0, 0, 0 + -50, 0 + (-25*sqrt(3)), 0 + -25);


      pop();

      push();
        fill("#CAB1FF"); //LEFT TOP -- pinkish red

        translate(-42, 72.7461);
        if(state2) {
          translate(42 * phase2, -72.7461 * phase2);
        }
        triangle(0, 0, 0, 50, -25*sqrt(3), 25);
      pop();

      push(); //RIGHT
        fill("#9D70FF");
        translate(84.25, 0 );
        if(state2) {
          translate(-84.25 * phase2, 0);
        }
        triangle(0, 0, 25*sqrt(3), 25, 25*sqrt(3),-25);
      pop();

      push(); // LEFT
        fill("#47197A");
        translate(-84.25, 0);
        if(state2) {
          translate(84.25 * phase2, 0);
        }
        triangle(0, 0, -25*sqrt(3), 25, -25*sqrt(3),-25);
      pop();

      push(); //RIGHT BOTTOM
        fill("#9D70FF");
        translate(42, -72.7461);
        if(state2) {
          translate(-42 * phase2, 72.7461 * phase2);
        }
        triangle(0, 0, 0, -50, 25*sqrt(3), -25);
      pop();

      push(); //RIGHT TOP
        fill("#CAB1FF");
        translate(42, 72.7461);
        if(state2) {
          translate(-42 * phase2, -72.7461 * phase2);
        }
        triangle(0, 0, 0, 50, 25*sqrt(3), 25);
      pop();
    }

  pop(); 

}

function setState() {
//||  (frameCount % (rotationSpeed*2000) === 0)
  if( frameCount === 1  ) 
  {
    currentFrame = frameCount;
  }

    if (frameCount - currentFrame === 0) {
      state0 = true;
    }

    if(frameCount - currentFrame >= 50) {
      state1 = true;
      phase1 = min( (frameCount - (currentFrame+50))/100, 1);
    }

    if(frameCount - currentFrame >= 151) {
      state2 = true;
      phase2 = min( (frameCount - (currentFrame+151))/30, 1);
    }

    if(frameCount - currentFrame >= 188) {
      state3 = true;
      phase3 = min( (frameCount - (currentFrame+188))/120, 1);
    }

    if(frameCount % (188 + (rotationSpeed * 2000)) === 0) {
      //placeholder to advance animation
    }


}




