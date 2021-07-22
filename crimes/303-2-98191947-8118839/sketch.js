/*

Officer: 8118839
CaseNum: 303-2-98191947-8118839

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make secretStoreKey_a equal to the value of mouseX
	- Use the 'min' function to prevent secretStoreKey_a from going above 15

	When the mouse button is pressed:
	- Decrement secretStoreKey_b by 3
	- Use the 'constrain' function to prevent secretStoreKey_b from falling below 2 and going above 11

	When the mouse button is released:
	- Make secretStoreKey_c equal to the value of mouseX
	- Use the 'constrain' function to prevent secretStoreKey_c from falling below 2 and going above 12

	When the mouse button is pressed:
	- Decrement secretStoreKey_d by 1
	- Use the 'constrain' function to prevent secretStoreKey_d from falling below 2 and going above 14

	Whilst the mouse is moving:
	- Make secretStoreKey_e equal to the value of mouseY
	- Use the 'min' function to prevent secretStoreKey_e from going above 80



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

var secretStoreKey_a;
var secretStoreKey_b;
var secretStoreKey_c;
var secretStoreKey_d;
var secretStoreKey_e;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	secretStoreKey_a = 0;
	secretStoreKey_b = 0;
	secretStoreKey_c = 0;
	secretStoreKey_d = 0;
	secretStoreKey_e = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...

function mouseReleased()
{
	console.log("mouseReleased");
     // 	When the mouse button is released:
	// - Make secretStoreKey_a equal to the value of mouseX
	// - Use the 'min' function to prevent secretStoreKey_a from going above 15
    secretStoreKey_a = min(mouseX, 15);
    
    // When the mouse button is released:
	// - Make secretStoreKey_c equal to the value of mouseX
	// - Use the 'constrain' function to prevent secretStoreKey_c from falling below 2 and going above 12
    secretStoreKey_c = constrain(mouseX, 2, 12);
}

function mousePressed()
{
	console.log("mousePressed");
    // When the mouse button is pressed:
	// - Decrement secretStoreKey_b by 3
	// - Use the 'constrain' function to prevent secretStoreKey_b from falling below 2 and going above 11
    
    secretStoreKey_b -= 3;
    secretStoreKey_b = constrain(secretStoreKey_b, 2, 11);
    
    // When the mouse button is pressed:
	// - Decrement secretStoreKey_d by 1
	// - Use the 'constrain' function to prevent secretStoreKey_d from falling below 2 and going above 14
    
    secretStoreKey_d -= 1;
    secretStoreKey_d = constrain(secretStoreKey_d, 2, 14);
}

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    // 	Whilst the mouse is moving:
	// - Make secretStoreKey_e equal to the value of mouseY
	// - Use the 'min' function to prevent secretStoreKey_e from going above 80
    secretStoreKey_e = min(mouseY, 80);
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
	drawDial(140,secretStoreKey_a, 20);
	pop();

	push();
	translate(120,380);
	drawDial(140,secretStoreKey_b, 14);
	pop();

	push();
	translate(280,170);
	drawDial(140,secretStoreKey_c, 15);
	pop();

	push();
	translate(280,380);
	drawDial(140,secretStoreKey_d, 20);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(secretStoreKey_e);
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
