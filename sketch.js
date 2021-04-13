let rotationSpeed = .3;

let l = 62;

let c1;
let c2;

let state0 = false;
let state1 = false;
let state2 = false;
let state3 = false;
let state4 = false;

let phase1;
let phase2;
let phase4;

let counter = 0;

function setup() 
{
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() 
{

  ortho(-width / 2, width / 2, height / 2, -height / 2, 1000, 0);
  orbitControl();
  background('#222222');

  if(frameCount > 20){
    setState();
    counter+=1;
}

  //INSIDE CUBE
  push();
    if(state3)
    {
      rotateX(-35);
      rotateY(135);
      rotateY((counter - 138)*rotationSpeed);
      translate(-(l/2), -(l/2), (l/2));
      noStroke();

      for (i=0; i<6; i++)
        {

          if(i === 0) //DARKER PURPLE _BACK FACE_ GOES LEFT
          {
            push();
              c1="#9D70FF";
              c2="#9D70FF";

            push();
            if(state4) {
              translate(-29.33*phase4, -29.33*phase4, 89.33 * phase4 );
            }

            fill(c1);
            triangle(0,0,0,l,l,0);
            pop();

            push();
            if(state4) {
              translate(29.33*phase4, 29.33*phase4, 89.33 * phase4 );
            }
            fill(c2);
            triangle(l,0,l,l,0,l);
            pop();
            pop();
            
          }
          
          
          if(i === 1) //LIGHTER PURPLE _LEFT_ GOES LEFT
            {
              push();
              c1="#47197A";
              c2="#47197A";

              if(!state4) {
                rotateY(90);
              }

              push();
              if(state4) {
                translate(-88.5 * phase4, -29.7*phase4, -29.7*phase4);
                rotateY(90);
              }

              fill(c1);
              triangle(0,0,l,0,l,l);
              pop();

              push();
              if(state4) {
                translate(-88.5 * phase4, 29.7*phase4, 29.7*phase4);
                rotateY(90);
              }
              fill(c2);
              triangle(0,0,0,l,l,l);
              pop();
              pop();
            }
            
          
          if(i===2) // LIGHTEST PURPLE _BOTTOM_ SPLIT
            {
              push();
              c1="#47197A";
              c2="#CAB1FF";
              if(!state4) {
                rotateX(-90);
              }
              fill(c1);
              push();
                if(state4) {
                  translate((-29.7)*phase4, -88.5* phase4, 29.7*phase4);
                  rotateX(-90);
                }
                triangle(0,0,0,l,l,0);
              pop();
              push();
                if(state4) {
                  translate((29.7)*phase4, -88.5 * phase4, -29.7*phase4);
                  rotateX(-90);
                }
                fill(c2);
                triangle(l,0,l,l,0,l);
              pop();
              pop();
            }
            
          
          if(i===3) { // DARK PURPLE _RIGHT_ GOES RIGHT
            push();
              c1="#47197A";
              c2="#47197A";

              if(!state4){
                translate(l,0,0);
                rotateY(90);
              }

              push();

                if(state4) {
                  translate(89.33 * phase4, -29.33*phase4, -29.33*phase4);
                  translate(l,0,0);
                  rotateY(90);
                }


              fill(c1);
              triangle(0,0,l,0,l,l);
              pop();

              push();
                if(state4) {
                  translate(89.33 * phase4, 29.33*phase4, 29.33*phase4);
                  translate(l,0,0);
                  rotateY(90);
                }
                fill(c2);
                triangle(0,0,0,l,l,l);
              pop();
              pop();
          }
          
          
          if(i===4) // LIGHTER PURPLE _TOP_ SPLIT
            {
              push();
              if(!state4){
                rotateX(-90);
                translate(0,0,l);
              }
              c1="#CAB1FF";
              c2="#CAB1FF";
              fill(c1);
              push();
              if(state4){
                translate(-29.7*phase4 ,88.5*phase4, 30*phase4);
                rotateX(-90);
                translate(0,0,l);
              }
              triangle(0,0,0,l,l,0);
              pop();

              push();
                if(state4) {
                  translate(29.7*phase4,88.5*phase4, -29.7*phase4);
                  rotateX(-90);
                  translate(0,0,l);
                }
                fill(c2);
                triangle(l,0,l,l,0,l);
              pop();
              pop();
            }
            
          
          if(i===5) // LIGHTEST PURPLE /FRONT
            {
              push();
              c1="#9D70FF";
              c2="#9D70FF";

              if(!state4) {
                translate(0,0,-l);
              }

              push();
                  if(state4) {
                    translate(-29.7*phase4, -29.7*phase4, -88.5*phase4);
                    translate(0,0,-l);
                  }

                fill(c1);
                triangle(0,0,0,l,l,0);
              pop();
              push();
                  if(state4) {
                    translate(29.7*phase4, 29.7*phase4, -88.5*phase4);
                    translate(0,0,-l);
                  }
                fill(c2);
                triangle(l,0,l,l,0,l);
              pop();
              pop();
            }
            
          
        }
      }
  
  pop();


  //OUTLINE CUBE ***************************************************

  push();
    rotateX(-35);
    rotateY(45);
    if(state3){
      rotateY((counter - 138)*rotationSpeed);
    }
    noFill();
    
    stroke("white");
    strokeWeight(2);
    box(250);
  pop();


  push();

  if(!state3) {

    noStroke();


    if(state1)
    {
      rotateZ(360*phase1);
    }

      push(); // LEFT BOTTOM
      fill("#47197A");

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

    if (counter === 0) {
      state0 = true;
    }

    if(counter >= 1) {
      state1 = true;
      phase1 = min( (counter)/100, 1);
    }

    if(counter >= 101) {
      state2 = true;
      phase2 = min( (counter-101)/30, 1);
    }

    if(counter >= 138) {
      state3 = true;
      phase3 = min( (counter-138)/120, 1);
    }

    if(counter >= 138 + (rotationSpeed * 1000)) {
      state4 = true;
      phase4 = min( (counter-438)/300, 1);
    }

    if(counter >= 740) {
      state0 = false;
      state1 = false;
      state2 = false;
      state3 = false;
      state4 = false;
      counter = 0;
    }
}




