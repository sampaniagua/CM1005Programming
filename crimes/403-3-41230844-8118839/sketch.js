/*

Officer: 8118839
CaseNum: 403-3-41230844-8118839

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 138 meters from Smalltalk Speakeasy then alert local police by drawing a Magenta circle around it with a radius of 138 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a ForestGreen rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumPurple rectangle covering the area between Gates Avenue, Bereners-Lee Street, Gosling Road and Adele Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
if(dist(mouseX, mouseY, 1951, 628) < 138)
{
    fill(255, 0, 255);
    ellipse(1951, 628, 276);
}
   
else if(mouseX >= 1947 && mouseX <= 2064 && mouseY >= 154 && mouseY <= 262)
    {
        fill(34, 139, 34);
        rect(1947, 152, 118, 110);
    }
else
{
    fill(147, 112, 219);
    rect(1268, 120, 156, 545);
}
    
    

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}

