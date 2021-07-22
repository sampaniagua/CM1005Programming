/*

Officer: 8118839
CaseNum: 303-2-90051610-8118839

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make crypticStoreKey_a equal to the value of mouseX
	- Use the 'constrain' function to prevent crypticStoreKey_a from falling below 3 and going above 14

	When the mouse button is pressed:
	- Decrement crypticStoreKey_b by 3
	- Use the 'constrain' function to prevent crypticStoreKey_b from falling below 3 and going above 18

	When the mouse button is pressed:
	- Make crypticStoreKey_c equal to the value of mouseX
	- Use the 'constrain' function to prevent crypticStoreKey_c from falling below 5 and going above 20

	When the mouse button is pressed:
	- Increment crypticStoreKey_d by 3
	- Use the 'min' function to prevent crypticStoreKey_d from going above 15

	Whilst the mouse is being dragged:
	- Make crypticStoreKey_e equal to the value of mouseX
	- Use the 'min' function to prevent crypticStoreKey_e from going above 69



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var crypticStoreKey_a;
var crypticStoreKey_b;
var crypticStoreKey_c;
var crypticStoreKey_d;
var crypticStoreKey_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	crypticStoreKey_a = 0;
	crypticStoreKey_b = 0;
	crypticStoreKey_c = 0;
	crypticStoreKey_d = 0;
	crypticStoreKey_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);

     crypticStoreKey_e = min(mouseX, 69);
    
}

function mousePressed()
{
	console.log("mousePressed");

    crypticStoreKey_a = constrain(mouseX, 13, 14);
    crypticStoreKey_b += 3;
    constrain(crypticStoreKey_b, 3, 18);
    crypticStoreKey_c = constrain(mouseX, 5, 20);
    crypticStoreKey_d -= 3;
    min(crypticStoreKey_d, 15);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,crypticStoreKey_a, 19);
	pop();

	push();
	translate(120,380);
	drawDial(140,crypticStoreKey_b, 25);
	pop();

	push();
	translate(280,170);
	drawDial(140,crypticStoreKey_c, 26);
	pop();

	push();
	translate(280,380);
	drawDial(140,crypticStoreKey_d, 21);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(crypticStoreKey_e);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
