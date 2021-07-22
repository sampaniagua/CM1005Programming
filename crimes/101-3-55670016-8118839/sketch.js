/*

Officer: 8118839
CaseNum: 101-3-55670016-8118839

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dark Red filled rectangle with a Medium Turquoise outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Turquoise filled
rectangle with a Aqua outline around him.

Identify the man reading the newspaper by drawing a Forest Green filled rectangle
with a Coral outline around him.

Identify the woman with the dog by drawing a Royal Blue filled rectangle with a
Medium Aquamarine outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    stroke(72,209,204)
    fill(139, 0, 0, 100)
    rect(403, 231, 110, 215)
    
    stroke(0,255,255)
    fill(64, 224, 208, 100)
    rect(27, 330, 135, 180)
    
    stroke(255,127,80)
    fill(34, 139, 34, 100)
    rect(857, 286, 209, 405)
    
    stroke(102,205,170)
    fill(65, 105, 225, 100)
    rect(604, 220, 190, 405)


}
