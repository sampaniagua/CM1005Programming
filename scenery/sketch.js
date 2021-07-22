/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);
    ellipse(185,77, 110, 60);
    ellipse(231,94, 90, 60);
    ellipse(205,125, 90, 60);
    ellipse(172,108, 90, 60);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(54,64,64);
	text("mountain", 500, 256);
    triangle(466,179,  400,430, 670,430);
    triangle(550,400,  420,430, 700,430);
    triangle(321,232,  209,430, 414,430);

	//3. a tree
	//... add your code here

	noStroke();
	fill(51,25,0);
	text("tree", 800, 346);
    rect(783,327, 60, 105);
    fill(102,102,0);
    ellipse(768, 278,90,90);
    ellipse(868, 269,105,90);
    ellipse(809, 293,105,90);
    ellipse(808, 225,100,90);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);
    fill(100, 155, 255);
    ellipse(80,570, 250,350);


	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
    fill(204,0,0);
    ellipse(460,391, 50,50);
    fill(255);
    rect(459,410, 5, 75);
}
