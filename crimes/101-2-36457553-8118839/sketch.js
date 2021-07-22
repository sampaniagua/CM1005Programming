/*

Officer: 8118839
CaseNum: 101-2-36457553-8118839

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Teal filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Sandy Brown filled
rectangle around him.

Identify the man in the striped top by drawing a Sea Green filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    fill(0, 128, 128, 100)
    rect(128, 255, 195, 405)
    
     fill(244, 164, 96, 100)
    rect(438, 85, 110, 115)
    
    fill(46, 139, 87, 100)
    rect(581, 87, 45, 120)
    


}
